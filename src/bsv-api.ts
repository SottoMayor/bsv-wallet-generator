import { bsv } from 'scrypt-ts';

export default class BsvApi {
    constructor(readonly env: string){}

    public randomSecretKey(): string {
        const privKey = bsv.PrivateKey.fromRandom().toString()
        return privKey;
    }
}