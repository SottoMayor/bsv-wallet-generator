import { WalletString } from "../shared/types";
import * as fs from 'fs';

export default class WalletFileWriter {  
    constructor(private filePath: string) {}

     private createHeader(): string {
      const sk = 'secret key'.padEnd(80, ' ');
      const pk = 'public key'.padEnd(66, ' ');
      const address = 'address'.padEnd(35, ' ');
      return `${sk} ${pk} ${address}`;
    }
 
    private createRecord(record: WalletString): string {
      const sk = record.sk.padEnd(80, ' '); // sk -> 80 characters
      const pk = record.pk.padEnd(66, ' '); // pk -> 66 characters
      const address = record.address.padEnd(35, ' '); // address -> 35 characters
      return `${sk} ${pk} ${address}`;
    }
  
    public writeWallet(records: WalletString[]): void {
      const stream = fs.createWriteStream(this.filePath);
  
      stream.write(this.createHeader() + '\n');

      records.forEach(singleWallet => {
        stream.write(this.createRecord(singleWallet) + '\n');
      });
  
      stream.end();
    }
}