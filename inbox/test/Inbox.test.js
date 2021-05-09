const assert = require('assert');
const ganache = require('ganache-cli'); //Use for testing because code can run instantly, unlike when actually on the block chain which takes time.
const Web3 = require('web3'); //the capital first letter means constructor

const web3 = new Web3(ganache.provider()); //create instance of web3
const {interface,bytecode} = require('../compile');

let accounts;
let inbox;

beforeEach(async ()=>{
    //Get a list of all accounts
    accounts = await web3.eth.getAccounts();

    //Use one of those accounts to deploy the contract

    //inbox represents the contract, can call functions through it.
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments:['Hi there!']})
        .send({from: accounts[0], gas:'1000000'})

});

describe("Inbox Test", ()=>{
    it('deploys a contract', ()=>{
        assert.ok(inbox.options.address); //if address exists, contract deployed. 'ok' check for existance of value.
    });

    it('has a default message', async () =>{
        const message = await inbox.methods.message().call(); //.message() can take in arguments if function requires. || call() customise how functions get called
        assert.strictEqual(message,'Hi there!')
    });

    //call() vs send() ; call = read only and instantaneous. || send = takes some time for a transaction.

    it('can change the message', async()=>{
       await inbox.methods.setMessage('bye').send({from: accounts[0]}); //first person pay to conduct change in network || if transaction fail error will be thrown

       const message = await inbox.methods.message().call();
       assert.strictEqual(message, 'bye');
    });

});








//===============================================================================//

//Test Code Example

// class Car{
//     park(){
//         return 'stopped';
//     }

//     drive(){
//         return 'vroom';
//     }
// }

// let car; //declare outside beforeEach because of scope

// beforeEach(()=>{
//     car = new Car(); 
// });

// describe('Car Class', ()=>{
//     it('Park Function Test: ', ()=>{
//         //const car = new Car(); Removed due to beforeEach
//         assert.strictEqual(car.park(), 'stopped');
//     });

//     it('Drive Function Test:', ()=>{
//         //const car = new Car(); Removed due to beforeEach
//         assert.strictEqual(car.drive(), 'vroom');
//     });

// });