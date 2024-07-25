function sorteio()
{
    let quantidadeDeNumerosSorteados = parseInt(document.getElementById('quantidade').value);
    let numeroInicial = parseInt(document.getElementById('de').value);
    let numeroFinal = parseInt(document.getElementById('ate').value);
    let sorteados = [];
    verificar()
    for(let i = 0; i < quantidadeDeNumerosSorteados; i++)
    {    
        let numero = numeroAleatorio(numeroInicial, numeroFinal);
           
        while(sorteados.includes(numero))
        {
            let numero = numeroAleatorio(numeroInicial, numeroFinal);
        }
        sorteados.push(numero);
        console.log(sorteados);    
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}  </label>`;
    alterarBotaoReset()
}
function alterarBotaoReset()
{
    let botao = document.getElementById('btn-reiniciar')
    if(botao.classList.contains('container__botao-desabilitado'))
    {
        botao.classList.remove('container__botao-desabilitado')
        botao.classList.add('container__botao')
    }
    else{
        botao.classList.remove('container__botao')
        botao.classList.add('container__botao-desabilitado')
    }
}
function verificar()
{
    let teste = numeroFinal - numeroInicial + 1
    if(quantidadeDeNumerosSorteados > teste)
    {
        alert("Impossivel")
        reiniciar()
    }
    else{alert('tudo okk')}
}
function numeroAleatorio(min , max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar()
{
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarBotaoReset();
}