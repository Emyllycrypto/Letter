const mensagens = [


"Olá 💗\n\nEu fiz essa pequena mensagem para você...",


"Espero que seu dia seja cheio de coisas boas ✨",


"Nunca esqueça o quanto você é especial 💕",


"Fim da carta 💌"


];


let pagina = 0;


let texto = document.getElementById("mensagem");

let teclado = document.getElementById("teclado");

let musica = document.getElementById("musica");


let digitando = false;





function escrever(){


digitando = true;


texto.innerHTML = "";


let i = 0;


let atual = mensagens[pagina];



let efeito = setInterval(()=>{


texto.innerHTML += atual[i];



if(atual[i] !== " " && teclado){


teclado.currentTime = 0;

teclado.play();


}



i++;



if(i >= atual.length){


clearInterval(efeito);


digitando = false;


}



},70);



}





function proximaMensagem(){



// impede clicar enquanto escreve

if(digitando){

return;

}



if(musica){

musica.play();

}



escrever();



pagina++;



if(pagina >= mensagens.length){


pagina = mensagens.length - 1;



let exit = document.querySelector(".exit");


exit.classList.add("aparecer");


}
function mostrarImagem(){


let imagem = document.querySelector(".imagem-final");


imagem.classList.add("aparecer");


}

}

let ultimoClique = 0;


function proximaMensagem(){


let agora = Date.now();


if(agora - ultimoClique < 300){

return;

}


ultimoClique = agora;



if(digitando){

return;

}



escrever();



pagina++;



if(pagina >= mensagens.length){


pagina = mensagens.length - 1;


let exit = document.querySelector(".exit");


exit.classList.add("aparecer");


}


}