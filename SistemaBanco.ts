class ContaBancaria implements IOperacoesBancarias{
    private numeroConta: string;
    private saldo: number;
    protected titular: string;

    constructor (nConta: string, saldo: number, titular: string) {
        this.numeroConta = nConta;
        this.saldo = saldo;
        this.titular = titular;
    }

    getNumConta() {
        return this.numeroConta
    }

    setNumConta(nConta: string) {
        this.numeroConta = nConta
    }

    getSaldo() {
       return this.saldo
    }

    setSaldo(saldo: number) {
        this.saldo = saldo;
    }

    depositar(deposito: number): void {        
       Logger.logDeposito(this.saldo += deposito)
    }

    sacar(saque: number): void {        
        Logger.logDeposito(this.saldo -= saque)
    }
}

class ContaPoupanca extends ContaBancaria {
    juros: number;

    constructor (nConta: string, saldo: number, titular: string, juros: number) {
        super(nConta, saldo, titular)
        this.juros = juros
    }

    getSaldoJuros(): number {
        return this.getSaldo() + this.juros 
    }

}

interface IOperacoesBancarias {
    depositar(deposito: number): void;
    sacar(saque: number): void;
}

class Logger {  
   public static logDeposito(log: number): void {
      console.log(log); 
   }

   public static logSaque(log: number) : void {
    console.log(log);
   }
}

let contaBanc = new ContaBancaria('123456', 2000, 'Matheus');
let contaPoup = new ContaPoupanca('001002', 4000, 'Vitoria', 100);

console.log(`ANTES: ${contaBanc.getSaldo()}`); 
contaBanc.depositar(30);
contaBanc.sacar(20);
console.log(` DEPOIS: ${contaBanc.getSaldo()}`); 

console.log('====================');

console.log(`ANTES: ${contaPoup.getSaldo()}`); 
console.log(`COM JUROS: ${contaPoup.getSaldoJuros()}`);
contaPoup.depositar(30);
contaPoup.sacar(20);
console.log(` DEPOIS: ${contaPoup.getSaldo()}`); 