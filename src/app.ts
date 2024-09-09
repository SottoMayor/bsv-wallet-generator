import dotenv from 'dotenv';
import BsvApi from './bsv-api';
import { EnvType } from './shared/types';
dotenv.config();
const NETWORK = process.env.NETWORK! as EnvType;
const bsvApi = new BsvApi(NETWORK);

console.log(bsvApi.randomWallet());