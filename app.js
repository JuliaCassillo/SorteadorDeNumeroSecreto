//Declarar as variáveis

let ListaNumSorteado=[];
let i=0;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function sortear(){
    //Pegar o valor presente no campo Qtde de Numero
    //o Comando document.getElementById procura no HTML o que foi informado dentro da caixa de texto
    //parse.Int indica que se trata de uma variavel inteira
    let QtdeNumeros =parseInt(document.getElementById("QtdeNumeros").value);
    let DoNumero = parseInt(document.getElementById("DoNumero").value);
    let AteONumero = parseInt(document.getElementById("AteONumero").value);
    let Num;
    let sorteados=[];
    let SubNum=AteONumero-DoNumero;

    if(DoNumero>=AteONumero){
        alert(`Reveja se os dados foram inseridos de forma correta \nO Campo do Numero é um Número Maior do que Até o Numero`);
    }
    if(SubNum<QtdeNumeros){
        alert(`Reveja se os dados foram inseridos de forma correta \n O Campo Qtde de Numeros é maior do que a variação DoNumero AtéONumero`);
    }
    else{
        for(i=0;i<=QtdeNumeros;i++){
            //Chamar a função GerarNumeroAleatorio
            Num = GerarNumeroAleatorio(DoNumero,AteONumero);
            //o Alerta vai fazer com que retorne o Número que foi sorteado
            sorteados.push(Num);
        }
        //Código no HTML:
        //<label class="texto__paragrafo">Números sorteados: nenhum ate agora </label>
        //Utilizado a palavra resultado por conta de ser o que esta no HTML
        let resultado = document.getElementById("resultado");
        resultado.innerHTML=`<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    
        //altera o Status do Botão pois ele inicia desabilitado
        alterarStatusBotao();
    }
}

//Gera um numero aleatorio de tal numero ate tal numero
function GerarNumeroAleatorio(min,max){

    //Gera um numero aleatorio inteiro que vai de 0 a 10 (função)
    //Como desejamos que ele va AteONumero , ele será o intervalo final considerado
    let numeroEscolhido=parseInt(Math.random()*(max-min+1))+min;
    //Quantidade de Elementos da Lista baseado no campo AteONumero
    let quantidadeDeElementosNaLista=ListaNumSorteado.length;

    if(quantidadeDeElementosNaLista==QtdeNumeros){
        ListaNumSorteado=[];
    }
    //Se a lista ja tiver o numero Sorteado Incluso
    if(ListaNumSorteado.includes(numeroEscolhido)){
        return GerarNumeroAleatorio(min,max);
    }else{
        //Sorteia um novo numero
        ListaNumSorteado.push(numeroEscolhido);
        console.log(ListaNumSorteado);
        return numeroEscolhido;
    }    
}

function alterarStatusBotao(){
    //Vai no HTML e procura pela pelo elemento btn-reiniciar
    let botao=document.getElementById("btn-reiniciar");
    //Elemento HTML pode vir a ter multiplas classes
    //toda a tag do HTML
    //Comando ClassList me da a  lista de classes de um dado elemento
    if(botao.classList.contains("container__botao-desabilitado")){
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    }else{
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function reiniciar(){

    //substituio o valor por uma String Vazia
    document.getElementById("QtdeNumeros").value="";
    document.getElementById("DoNumero").value="";
    document.getElementById("AteONumero").value="";
    document.getElementById("resultado").innerHTML=`<label class="texto__paragrafo">Números sorteados: nenhum ate agora </label>`;
    alterarStatusBotao();
}
