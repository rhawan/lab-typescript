// var, let e const


// var
function iniciarTime(iniciaJogoEmUberlandia: boolean) {
    const nome = 'Messi e amigos';
    let cidade = 'em São Paulo';

    if (iniciaJogoEmUberlandia) {
        cidade = 'em Uberlândia';
    }

    console.log(`${nome} vão jogar ${cidade}`);

}

iniciarTime(true);