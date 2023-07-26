//Ativar link

const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){

    const url = location.href;
    const href = link.href;

    if(url.includes(href)){
        link.classList.add("ativo");
    }
} 

links.forEach(ativarLink);

//Ativar links do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro){
    const elemento = document.getElementById(parametro);
    if(elemento){
        elemento.checked = true
    } 
}

parametros.forEach(ativarProduto)

//Ativar perguntas

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controle = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controle);

    resposta.classList.toggle('ativa');
    const ativa = resposta.classList.contains('ativa');
    pergunta.setAttribute('aria-expanded', ativa);
    
}

function eventoPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta)
    console.log(pergunta)
}

perguntas.forEach(eventoPerguntas);


//Galeria de bicicletas

const galeria= document.querySelectorAll('.bicicletas-imagens img');

const galeriaContainer = document.querySelector('.bicicletas-imagens');

function trocarImagem(event){

    const img = event.currentTarget
    const media = matchMedia("(min-width:1000px)").matches
    if(media){
        galeriaContainer.prepend(img)
    }
}

function eventosGaleria(img){

    img.addEventListener('click', trocarImagem)

}

galeria.forEach(eventosGaleria);

//Add plugins

if(window.SimpleAnime){
    new SimpleAnime();
}