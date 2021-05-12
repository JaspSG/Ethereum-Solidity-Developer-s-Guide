const assert = require('assert');
const ganache = require('ganache-cli'); //Use for testing because code can run instantly, unlike when actually on the block chain which takes time.
const Web3 = require('web3'); //the capital first letter means constructor

const web3 = new Web3(ganache.provider()); //create instance of web3
const {interface,bytecode} = require('../compile');

let accounts; //hold instance of the 10 accounts generated
let lottery; //hold instance of contract

beforeEach(async ()=>{
    //Get a list of all accounts
    accounts = await web3.eth.getAccounts();

    //Use one of those accounts to deploy the contract

    //inbox represents the contract, can call functions through it.
    lottery = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode})
        .send({from: accounts[0], gas:'1000000'})

});

describe("Lottery Test", ()=>{

    it('deploys a contract', ()=>{
        assert.ok(lottery.options.address); //if address exists, contract deployed. 'ok' check for existance of value.
    });

    it('allow one account to enter', async ()=>{
        await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('0.02', 'ether')});
        
        const players = await lottery.methods.getPlayers().call({
            from: accounts[0] //specify who is calling the function
        });
    
        assert.strictEqual(accounts[0], players[0]);
        assert.strictEqual(1, players.length);
            
    });

    it('allow multiple account to enter', async ()=>{
        await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('0.02', 'ether')});

        await lottery.methods.enter().send({
            from: accounts[1],
            value: web3.utils.toWei('0.02', 'ether')});
        
        await lottery.methods.enter().send({
            from: accounts[2],
            value: web3.utils.toWei('0.02', 'ether')});
            
        
        const players = await lottery.methods.getPlayers().call({
            from: accounts[0] //specify who is calling the function
        });
    
        assert.strictEqual(accounts[0], players[0]);
        assert.strictEqual(accounts[1], players[1]);
        assert.strictEqual(accounts[2], players[2]);
        assert.strictEqual(3, players.length);
            
    });

    it('require a minimum amount of ether to enter', async () => {
        
        try{
            await lottery.methods.enter().send({
                from: accounts[0],
                value: 0
            });
            assert(false); //if error not thrown (suppose to be thrown), assert(false) fails the test
        } catch (err){
            assert(err); //Just to check if this value is present
        }
    });

    it('only manager can call pickWinner', async () => {
        try{
            await lottery.methods.pickWinner().send({from: accounts[1]});
            assert(false);
        } catch (err) {
            assert(err);
        }
    });

    it('send money to the winner and reset the players array', async () => {
        await lottery.methods.enter().send({
            from: accounts[0],
            value: web3.utils.toWei('2', 'ether')
        });

        const initialBalance = await web3.eth.getBalance(accounts[0]);
        await lottery.methods.pickWinner().send({ from: accounts[0] });
        const finalBalance = await web3.eth.getBalance(accounts[0]);

        const difference = finalBalance - initialBalance;
        //console.log(finalBalance-initialBalance); //see how much spent on gas

         //check the balance is in the realm of two but less then two because some ether used on gas for the transaction
        assert(difference > web3.utils.toWei('1.8', 'ether'));

    });

});