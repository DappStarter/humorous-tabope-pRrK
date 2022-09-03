require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remind method give knee bone gesture'; 
let testAccounts = [
"0xbf1dd0c3010356b2077c70df81df3dd2047d1ce4ec678c04db7e4b0ba8404465",
"0x9a4d22f474687921f6faea4a28b188a2cf8cea8283c42e41e227ae4e18b50b7a",
"0x210289493383123c6f36fe8dbf7cfefd2f83140fc42dd00af7f6465aa8783089",
"0xe34504af03965178bcc2773f3c329e4f2346234f1c9ff464bcd2aa8da9438bec",
"0xc6bc6d75d3fc328d024a6e5786391f59725408f42d3f8db2378b8f46a40b6ebd",
"0xf625391b60afd4a38eaf1a088f4fdab84a4a47243a10199942de9a7bc6047ca3",
"0x10889000f7c6b9827ada2c57bca415e3f53bb440c6f4f2d087d744564ffdee4e",
"0x7f945de781f352fbe9c84f3bbf5525d7d659ddd7b4d96b2030bfdcb6401861aa",
"0xbc0de9cefed5dd2de369ea98cafb5d08a94817ff7f2087bb75cf2bb715835216",
"0xa6fe99c024957ade6dc97890d33c65cbd531ef5ee446913e5eaff5093ae45782"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

