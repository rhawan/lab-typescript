var quantidade = 20;
// console.log(quantidade = 'teste'); -> Não Compila!
// Assume automaticamente que é number[]
var x = [1, 2, null];
// x[0] = true; -> Não compila!
// Contextual Typing
window.onmousedown = function (evento) {
    console.log(evento.button); // OK
    // console.log(evento.buton); -> Não Compila!
};
