function comprar () {
    //recuparar tipo de ingresso e quantidade
    let tipo = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (tipo.value == 'pista') {
        comprarPista(quantidade);
    } else if (tipo.value == 'superior') {
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }
}

//comprar ingressos da pista
function comprarPista(quantidade) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > quantidadePista) {
        alert('Quantidade indisponível para pista.');
    } else {
        quantidadePista = quantidadePista - quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Compra realizada com sucesso!');
    }
}

//comprar ingressos da superior 
function comprarSuperior(quantidade) {
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > quantidadeSuperior) {
        alert('Quantidade indisponível para superior.');
    } else {
        quantidadeSuperior = quantidadeSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert ('Compra realizada com sucesso!');
    }

}

//comprar ingressos da inferior
function comprarInferior(quantidade) {
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > quantidadeInferior) {
        alert('Quantidade indisponível para inferior.');
    } else {
        quantidadeInferior = quantidadeInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert ('Compra realizada com sucesso!');
    }

}


//<li>Cadeira inferior<span id="qtd-inferior">400</span></li