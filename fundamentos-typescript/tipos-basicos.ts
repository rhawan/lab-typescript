// boolean
let estaPago: boolean = true;

// number
let idade: number = 20;
let valor: number = 29.99;

// string
let empresa: string = 'AlgaWorks';
// Template Strings
let nome: string = 'João';
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos`);
let concatenacaoTradicional = 'Olá, meu nome é ' + nome + ' e tenho ' + idade + ' anos';

// arrays
let notas: number[] = [8, 6, 7, 9];

// tuple
let alunos: [string, number, string] = ['João', 10, 'Matemática'];
console.log(alunos[0]);
console.log(alunos[1]);

// enum
enum Cor {Verde, Amarelo, Azul, Branco};
let corFundo: Cor = Cor.Verde;

// any
// Biblioteca de terceiros...
// Migração do JavaScript para TypeScript...
// Array com vários tipos de dados
let algumValor: any = 4;
algumValor = 'Agora é uma string';
algumValor = true;
console.log(typeof algumValor);

// void
function alerta(): void {
    // alert('Operação não permitida');
}

// null e undefined
let u: undefined = undefined;
let n: null = null;
// null e undefined são subtipos dos demais tipos

nome = undefined;
nome = null;
