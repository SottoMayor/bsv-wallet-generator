import { bsv, Network } from 'scrypt-ts';
import { EnvType, RandomWallet } from './shared/types';

export default class BsvApi {
    constructor(readonly env: EnvType = 'testnet') {}

    private network(): Network {
        return bsv.Networks.get(this.env);
    }

    public randomSecretKey(): bsv.PrivateKey {
        const privKey = bsv.PrivateKey.fromRandom(this.network());

        return privKey;
    }

    public randomWallet(): RandomWallet {
        const sk =  this.randomSecretKey();
        const pk = sk.toPublicKey();
        const address = sk.toAddress();

        return {sk, pk, address};
    }
}
