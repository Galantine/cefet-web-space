// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let botaoCalcular = document.querySelectorAll('#calcular')[0];

botaoCalcular.addEventListener('click', e => {
	//alert('AAAAAAAAAA')
	let constante = document.querySelectorAll('#constante')[0];
	let massa1 = document.querySelectorAll('#massa1')[0];
	let massa2 = document.querySelectorAll('#massa2')[0];
	let distancia = document.querySelectorAll('#distancia')[0];
	let resultado = document.querySelectorAll('#resultado')[0];
	
	resultado.value = parseFloat((constante.value*massa1.value*massa2.value)/(distancia.value*distancia.value));
});