// boolean
var estaPago = true;
// number
var idade = 20;
var valor = 29.99;
// string
var empresa = 'AlgaWorks';
// Template Strings
var nome = 'João';
console.log("Ol\u00E1, meu nome \u00E9 " + nome + " e tenho " + idade + " anos");
var concatenacaoTradicional = 'Olá, meu nome é ' + nome + ' e tenho ' + idade + ' anos';
// arrays
var notas = [8, 6, 7, 9];
// tuple
var alunos = ['João', 10, 'Matemática'];
console.log(alunos[0]);
console.log(alunos[1]);
// enum
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Branco"] = 3] = "Branco";
})(Cor || (Cor = {}));
;
var corFundo = Cor.Verde;
// any
// Biblioteca de terceiros...
// Migração do JavaScript para TypeScript...
// Array com vários tipos de dados
var algumValor = 4;
algumValor = 'Agora é uma string';
algumValor = true;
console.log(typeof algumValor);
// void
function alerta() {
    // alert('Operação não permitida');
}
// null e undefined
var u = undefined;
var n = null;
// null e undefined são subtipos dos demais tipos
nome = undefined;
nome = null;
