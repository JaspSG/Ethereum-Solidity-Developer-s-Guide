import Web3 from 'web3';

window.ethereum.request({method: "eth_requestAccounts"});

const web3 = new Web3(window.ethereum); //Uses current web3 provider from metamask browser extension

export default web3;
