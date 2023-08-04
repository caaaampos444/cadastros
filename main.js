'use strict'
function trocarTitulo(){
    const titulo=document.getElementById('titulo')
    const tituloDigitado=prompt('Digite seu nome')
    if(tituloDigitado==''){
        titulo.textContent='Insira o seu nome'
    }else{
        titulo.textContent=tituloDigitado
    }
    const cidade=document.getElementById('cidade')
    const cidadeDigitada=prompt('Digite a sua cidade')
    if(cidadeDigitada==''){
        cidade.textContent='Insira a sua cidade'
    }else{
        cidade.textContent=cidadeDigitada
    }
    const media=document.getElementById('media')
    const mediaDigitada=prompt('Digite a sua media')
    if(mediaDigitada==''){
        media.textContent='Insira a sua media'
    }else{
        media.textContent=mediaDigitada
    }
    if(mediaDigitada<'7'){
        media.classList.add('vermelho')
    }else{
        media.classList.add('azul')
    }
}
const botaoCadastrar=document.getElementById('cadastrar')
botaoCadastrar.addEventListener('click', trocarTitulo)