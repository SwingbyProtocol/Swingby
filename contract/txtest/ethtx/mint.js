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

    let sw = await Swingby.deployed()

    const balance = await sw.balanceOfETH(address)
    console.log(balance.toNumber() / 1e18)

    let ID = process.env.ID

    const mint = await sw.mint(ID, {
        value: 0,
        from: address
    })

    console.log(mint.logs)
    process.exit()

}