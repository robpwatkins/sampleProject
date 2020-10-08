const moment = require('moment');

const day = moment().format('dddd');

console.log(`When you have a party on a ${day} night, it's a ${day} night party.`);