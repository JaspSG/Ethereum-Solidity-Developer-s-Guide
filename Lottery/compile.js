const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');

//console.log(solc.compile(source,1).contracts[':Inbox']);
//Extract contracts property 'Inbox', with assembly code & bytecode
module.exports = solc.compile(source ,1).contracts[':Lottery'];
