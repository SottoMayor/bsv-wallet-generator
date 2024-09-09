import { bsv } from 'scrypt-ts';

export type EnvType = 'mainnet' | 'testnet';

export type Wallet = { sk: bsv.PrivateKey, pk: bsv.PublicKey, address: bsv.Address }

export type WalletString = { sk: string, pk: string, address: string }