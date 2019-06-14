// require("./web3next.js")
// import { Web3 } from "web3";
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/1b0ad32612f347a69f3bafe7ca08e617'));
console.log(web3.version)