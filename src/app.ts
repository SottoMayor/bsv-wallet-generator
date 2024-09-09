import { bsv } from 'scrypt-ts'

const privKey = bsv.PrivateKey.fromRandom()

console.log(privKey);