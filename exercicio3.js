// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let botoes = document.querySelectorAll(".botao-expandir-retrair");
let paragrafos = document.querySelectorAll("#aliens p");

let expandidos = Array(botoes.length).fill(false);

function expandir(e){
	let elemento = e.currentTarget;
	let paragrafo = elemento.parentNode;
	if(paragrafo.classList.contains("expandido")){
		paragrafo.classList.remove("expandido");
		elemento.innerHTML = '+';
	}
	else{
		paragrafo.classList.add("expandido");
		elemento.innerHTML = '-';
	}
}

botoes.forEach((botao, i) => {
	botao.addEventListener('click', expandir);
});
