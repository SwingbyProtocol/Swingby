const hdkey = require("ethereumjs-wallet/hdkey")
const bip39 = require("bip39");
const Swingby = artifacts.require("./Swingby.sol")

const mnemonic = process.env.MNEMONIC_KEY;

const path = `m/44'/60'/0'/0/${process.env.ACCOUNT}`;

const hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic));
const wallet = hdwallet.derivePath(path).getWallet();

const address = "0x" + wallet.getAddress().toString('hex')
const pubkey = wallet.getPublicKeyString()

console.log(`your address is: ${address}`)
console.log(`pubkey: ${pubkey}`)

module.exports = async function (deployer, net, accounts) {

    let swingby = await Swingby.deployed()

    const ID = process.env.ID
    const txId = "0xa4245a22e809698217cdbaaf18b6c9489559267ad4492cd4bf36a2ecd3b410c8"
    const rs = "0x6304332a6b5bb175a820f4b937bbadbf3d64d6f7ba78672e59790f6047693172616c3d1d4f1bd440f56d8876a914cd5cab7ec76ad300712c02ccc51b464fdf7e5e06670483706b5bb17576a9142f5e9b3a149467d002195d790ad513eac7496aa86888ac"
    const _aOfToken = web3.toWei(3000, 'ether')

    const confirmByLender = await swingby.confirmByLender(ID, txId, rs, _aOfToken, {
        value: 0,
        from: address
    })

    console.log(confirmByLender.logs)
    process.exit()

    // console.log(submitReq.logs)

}