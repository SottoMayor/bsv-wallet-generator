import { bsv } from 'scrypt-ts';
import { Wallet, WalletString } from '../shared/types';

export default class WalletExec {
    constructor(
        public sk: bsv.PrivateKey,
        public pk: bsv.PublicKey,
        public address: bsv.Address
    ) {}

    public serialize(format: string): Wallet | WalletString {
        if (format === 'string') {
            return {
                sk: this.sk.bn.toString(),
                pk: this.pk.toString(),
                address: this.address.toString()
            }
        }

        return {
            sk: this.sk,
            pk: this.pk,
            address: this.address
        }
    }
}