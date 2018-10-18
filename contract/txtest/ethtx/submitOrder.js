const bitcoin = require('bitcoinjs-lib')
const getAddress = require('../utils/getAddress')

const Swingby = artifacts.require('./Swingby.sol')
const Token = artifacts.require('./Token.sol')

const address = getAddress()

module.exports = async function (callback) {
    let sw = await Swingby.deployed()

    const balance = await sw.balanceOfETH(address)
    console.log(balance.toNumber() / 1e18)

    let _amountOfSat = 0.02 * 1e18
    let _amountOfWei = 1 * 1e18
    let _pubkey = pubkey
    let _interest = 1000
    // console.log(Math.floor(Date.now() / 1000))
    let _period = Math.floor(Date.now() / 1000) + 1200

    let _sR = "f0f9862aeb53fb6bd587fa22d9e6705ca5c5c0ab2af67bba5042f2dc16d536e5"

    let buf = new Buffer(_sR, 'hex');

    let _rHash = bitcoin.crypto.sha256(buf)

    console.log(_rHash.toString('hex'), pubkey)

    const submitOrder = await sw.submitOrder(
        _amountOfSat,
        _amountOfWei,
        _interest,
        _period,
        '0x' + _rHash.toString('hex'),
        _pubkey, {
            value: 0,
            from: address
        })

    console.log(submitOrder.logs)
    callback() // end process
}
