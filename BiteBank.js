class Cliente {
    nome;
    sobrenome;
    cpf;
    rg;

} // essa "class" utilizada é como se fosse um molde para os clientes , para usar como linha de repetição
// eeses são os moldes que vão entrar as const e a informação delas 
class ContaCorrente {
    agencia;
    saldo;
    //em classses podemos também criar operações complexas 
    //que podem ser usadas como parametros para fazermos operações de qualquer objeto

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor
        }

    }
    depositar(valor) {
        this.saldo += valor
    }
}




const cliente1 = new Cliente(); // esse "new" é para dar entrada em um novo cliente do molde ""class cliente ""
cliente1.nome = "Ricardo";
cliente1.sobrenome = "Bugan";
cliente1.cpf = 321989788865;
cliente1.rg = 3543580;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.sobrenome = "lina";
cliente2.cpf = 363566544885;
cliente2.rg = 45454458;

const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.saldo = 0;
ContaCorrenteRicardo.agencia = 1001;
console.log(ContaCorrenteRicardo);
ContaCorrenteRicardo.depositar(100);
console.log(ContaCorrenteRicardo.saldo)