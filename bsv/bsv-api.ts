import { bsv, Network } from 'scrypt-ts';
import { EnvType, Wallet } from '../src/shared/types';
import WalletExec from './wallet-exec';

export default class BsvApi {
    constructor(readonly env: EnvType = 'testnet') {}

    private network(): Network {
        return bsv.Networks.get(this.env);
    }

    public randomSecretKey(): bsv.PrivateKey {
        const privKey = bsv.PrivateKey.fromRandom(this.network());

        return privKey;
    }

    public randomWallet() {
        const sk =  this.randomSecretKey();
        const pk = sk.toPublicKey();
        const address = sk.toAddress();

        return new WalletExec(sk, pk, address);
    }
}
