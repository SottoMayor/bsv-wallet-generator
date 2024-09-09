import { bsv, Network } from 'scrypt-ts';
import { EnvType } from './shared/types';

export default class BsvApi {
    constructor(readonly env: EnvType = 'testnet') {}

    private network(): Network {
        return bsv.Networks.get(this.env);
    }

    public randomSecretKey(): string {
        const privKey = bsv.PrivateKey.fromRandom(this.network()).toString();
        return privKey;
    }
}
