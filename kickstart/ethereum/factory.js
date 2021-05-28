//access deployed instance of contract

import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xbe0b5c51A0065b4345B332F8c502a162b8FDf725' //address of factory location
);

export default instance;