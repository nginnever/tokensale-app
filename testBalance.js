'use strict'

var Web3 = require('web3')

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

var saleAddress = "0x97CA8108064eB2a90428ED6f407AE583eE7C3fd8"
var tokenAddress = "0x0AF44e2784637218dD1D32A322D44e603A8f0c6A"
var abis = require('./abi').sale
var abit = require('./abi').token

var sale = web3.eth.contract(abis).at(saleAddress)
var token = web3.eth.contract(abit).at(tokenAddress)
token.balanceOf("0x785AB48048639F1520ad9c3B26bB38F1065D7E7B", function(err, res) {
	console.log(web3.fromWei(res.toNumber()))
})

* * * * * /var/www/devdaily.com/bin/check-apache.sh

#!/bin/sh

killall -9 poolrestapi
parity --jsonrpc-apis "web3,eth,net,parity,traces,rpc,personal" --jsonrpc-cors "*" --jsonrpc-hosts all

* * * * * /home/user/startParity.sh