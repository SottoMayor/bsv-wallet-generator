# BSv Wallet Generator

Gerador de carteiras para o protocolo BSv - Bitcoin Satoshi Vision, output no formato de arquivo posicional. Projeto escrito em TypeScript com o submódulo **bsv** do Scrypt

## Requisitos

Para rodar o sistema, é necessário a instalação das ferramentas:

1. **Node.js**

2. **npm**

3. **TypeScript**

## Configuração do Projeto

1. **Clone o Repositório**:
```bash
  git clone https://github.com/your-username/bsv-wallet-generator.git
  cd bsv-wallet-generator
```
2. **Instale as Dependências**:
 ```bash
   npm install
   ```
## Execução de scripts
1. **dev**: Executa o projeto em modo de desenvolvimento.
  ```bash
   npm run dev
   ```
2. **start**: Compila os arquivos TS e executa o projeto.
  ```bash
   npm start
   ```

## Output
O resultado final da execução do script é a geração de uma carteira aleatória, contendo 5 pares de chave, em um arquivo posicional nomeado `wallet.txt`. Nesse arquivo estão informações sobre a chave privada (sk), a chave pública (pk) e o endereço (address).



   
