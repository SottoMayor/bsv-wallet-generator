import dotenv from 'dotenv';
import BsvApi from './bsv-api';
dotenv.config();
const NETWORK = process.env.NETWORK!;
const bsvApi = new BsvApi(NETWORK);

console.log(bsvApi.randomSecretKey());