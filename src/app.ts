import { bsv } from 'scrypt-ts';
import dotenv from 'dotenv';
dotenv.config();
const NETWORK = process.env.NETWORK;

const privKey = bsv.PrivateKey.fromRandom()

console.log(privKey, NETWORK);