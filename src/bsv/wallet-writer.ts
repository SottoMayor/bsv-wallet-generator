export default class WalletFileWriter {  
    constructor(private filePath: string) {}

     private createHeader(): string {
      const sk = 'secret key'.padEnd(80, ' ');
      const pk = 'public key'.padEnd(66, ' ');
      const address = 'address'.padEnd(35, ' ');
      return `${sk} ${pk} ${address}`;
    }  
}