const assert = require('assert');
const ganache = require('ganache-cli'); //Use for testing because code can run instantly, unlike when actually on the block chain which takes time.
const Web3 = require('web3'); //the capital first letter means constructor

const web3 = new Web3(ganache.provider()); //create instance of web3


const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts; //hold instance of the 10 accounts generated
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    //Deploy new version of contract
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: "1000000" });

    //100 minimum contribution | send() to modify contract on block chain
    campaign = await factory.methods.createCampaign('100').send(
        {from: accounts[0],
        gas: '1000000'}
    )

    //Get campaign deployed at that address
    const addresses = await factory.methods.getDeployedCampaigns().call(); //call() to retrieve information, 'view' keyword in contract
    campaignAddress = addresses[0];
    //ES 2016 Syntax for first element of array: [campaignAddress];

    //Get already deployed campaign at a particular address (notice the difference from factory)
    campaign = await new web3.eth.Contract(JSON.parse(compiledCampaign.interface),
    campaignAddress);
});

//Test for existance of contracts
describe("Campaigns", () => {
    it("deploys a factory and a campaign", () => {
      assert.ok(factory.options.address);
      assert.ok(campaign.options.address);
    });

    it('marks caller as campaign manager', async () => {
        const manager = await campaign.methods.manager().call(); // get methods are automatically created on public variables
        assert.strictEqual(accounts[0], manager);
    });

    it('allows people to contribute money and marks them as approvers', async () =>{
        await campaign.methods.contribute().send({
            value:'200',
            from: accounts[1]
        });

        const isContributor = await campaign.methods.approvers(accounts[1]).call();

        assert(isContributor);
    });

    it('requires a minimum contribution', async () => {
        try {
            await campaign.methods.contribute().send({
                value: '5',
                from: account[1]
            })
            assert(false); //if line above ever passes, this will make the test fail.
        } catch (error) {
            assert(error);
        }    
    });

    it('allows a manager to make a payment request', async () => {
        await campaign.methods
        .createRequest('Buy Batteries', '100', accounts[1])
        .send({
            from: accounts[0],
            gas: '1000000'
        });

        const request = await campaign.methods.requests(0).call();
        assert.strictEqual('Buy Batteries', request.description);
    });

    it("processes requests", async () => {

        //Send money to campaign
        await campaign.methods.contribute().send({
          from: accounts[0],
          value: web3.utils.toWei("10", "ether"),
        });
    
        //create a request to send money to account 1
        await campaign.methods
          .createRequest("A", web3.utils.toWei("5", "ether"), accounts[1])
          .send({ from: accounts[0], gas: "1000000" });
    
        //vote yes for request
        await campaign.methods.approveRequest(0).send({
          from: accounts[0],
          gas: "1000000",
        });
    
        await campaign.methods.finalizeRequest(0).send({
          from: accounts[0],
          gas: "1000000",
        });

        let balance = await web3.eth.getBalance(accounts[1]); //string format
        balance = web3.utils.fromWei(balance, 'ether');
        console.log(balance);
        balance = parseFloat(balance); //string to float
        

        assert(balance > 104);
    
      });



});


  