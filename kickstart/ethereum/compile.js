const path = require('path');
const solc = require('solc'); //solidity compiler
const fs = require ('fs-extra'); //file system

const buildPath = path.resolve(__dirname, 'build'); //reference to build directory
fs.removeSync(buildPath); //deletes folder

//read filepath and campaign.sol file
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf-8');
//we only care about the contract property
const output = solc.compile(source, 1).contracts;

//build 'build' folder
fs.ensureDirSync(buildPath);

console.log(output);
//loop through output to write the different contracts
//This is a for-in loop, for looping through key-value pairs, this case has two keys, campaignfactory and campaign
for (let contract in output) {
    //let name = contract.replace(':', '');
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]
    );
}