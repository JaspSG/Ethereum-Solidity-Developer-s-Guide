const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //constructor for web 3 (note the capital first letter)
const web3 = new Web3(ganache.provider()); //create instance of web3

