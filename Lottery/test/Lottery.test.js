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

    

});