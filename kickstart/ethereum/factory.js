//access deployed instance of contract

import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x04D2F4Fae22b8DB840999cef7412D9300630Ba0d'
);

export default instance;