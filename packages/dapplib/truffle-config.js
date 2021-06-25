require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift remember situate come grace drink equal gather'; 
let testAccounts = [
"0x9b80e521f6005f35396ede324d34b231e1d69d80422f177b9ee618054bac89c0",
"0xd85245f29701051af16e085c6e9b1f00c03b7277155ac0c75acc7e8b7ff13568",
"0x2de57f0773ac40df0caadbfa96ea62e72b5b97df72cbe0fc9789b6dfad987317",
"0x6ac85097133bafc5d0e19d03f5b9f306988cd21af4dc1b3ee6334b7d16c39f45",
"0x5ffb33b2eb1475700c121a6d54d636207804dc813a47b89df285b5e221c49460",
"0x45a16a51a61cd83eb635020e0f5855b694e12e23b796db17833150638af03952",
"0x18ada65fb8ef6a45ec081a19b5dd2c98fa8612dcc857ec833ea3a12e0cbb71f9",
"0x6bcb012215b0fb679c2ac1f99c90da818f5b8d64a52d6a482514f52d37efc0c9",
"0xe1fd50f74486177a085a16a5a621ea0cc80c5fd33a8fb077d1aa9e469e66e59a",
"0x5243732a8821d424cb46eea1a9afc03bd1381326f62653a683031c7f7b18af99"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

