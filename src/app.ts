import dotenv from 'dotenv';
import BsvApi from './bsv/bsv-api';
import { EnvType, WalletString } from './shared/types';
import WalletFileWriter from './bsv/wallet-writer';
dotenv.config();
const NETWORK = process.env.NETWORK! as EnvType;
const bsvApi = new BsvApi(NETWORK);


// Generating the random wallet
const randomWallet: Array<WalletString> = [];
for(let counter = 0; counter < 5; counter++) {
    const newWallet = bsvApi.randomWallet().serialize('string');
    randomWallet.push(newWallet);
}
console.log(JSON.stringify(randomWallet));

// Record in Positional File
const writer = new WalletFileWriter('wallet.txt');
writer.writeWallet(randomWallet);