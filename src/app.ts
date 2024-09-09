import dotenv from 'dotenv';
import BsvApi from './bsv/bsv-api';
import { EnvType, WalletString } from './shared/types';
dotenv.config();
const NETWORK = process.env.NETWORK! as EnvType;
const bsvApi = new BsvApi(NETWORK);

const randomWallet: Array<WalletString> = [];
for(let counter = 0; counter < 4; counter++) {
    const newWallet = bsvApi.randomWallet().serialize('string');
    randomWallet.push(newWallet);
}

console.log(JSON.stringify(randomWallet));