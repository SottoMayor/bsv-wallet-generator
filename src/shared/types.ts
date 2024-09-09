import { bsv } from 'scrypt-ts';

export type EnvType = 'mainnet' | 'testnet';

export type RandomWallet = { sk: bsv.PrivateKey, pk: bsv.PublicKey, address: bsv.Address }