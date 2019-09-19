/* Você foi contratada para criar a lógica de um aplicativo que controla pedidos em um bar. Para funcionar sua aplicação precisa ter uma lógica capaz de executar as seguintes operações: 
1) Guardar o nome e o número da mesa do cliente
2) Ter uma função para somar os valores do pedido ao total
3) Ter uma função que permita subtrair do total um valor pago (aquela miga que sempre vai embora antes e deixa uma parte paga)
4) Ter uma função para dividir o valor da conta entre as pessoas da mesa
5) Mostrar na tela o nome, número da mesa, total de pessoas, total da conta e valor que cada um deve pagar
*/

1)  let nomeCliente = prompt('Informe nome do cliente'), mesaCliente = prompt('Qual o número da mesa?'), totalConta = 0
	

2)  function somaTotalConta(pedido){
		totalConta = totalConta + pedido
		return totalConta
   }

3)  function subtraiValorConta(pago){
	 	return somaTotalConta(0) - pago 
   }

4)  function divideContaMesa(){
		let dividePessoas = prompt('Qual a quantidade de pessoas?')
		let valorIndividual = totalConta / dividePessoas
		return ` FECHAMENTO DA CONTA \n .............................. \n Cliente: ${nomeCliente} Mesa: ${mesaCliente} \n
		Total da conta: ${totalConta} \n Valor individual: ${valorIndividual.toFixed(2)}
		 `
   }


//Escreva a função que retorne o resultado apresentado
// ola() -> "Hello, world!"
   function ola(){
	   console.log('Hello world!')
   }
// ola(0) -> "Hello, world!"
	function ola(0){
		console.log('Hello world!')
	}
// ola('Javascript") -> "Hello, world!"
	function ola('Javascript'){
		console.log('Hello world!')
	}


// calcule(5) -> 25
	function calcule(x){
		return x**2
	}
// calcule(2) -> 4
	function calcule(y){
		return y*2
	}


//Calcule o resultado da função a seguir: 
function confusion(a, b) {
	a = 2 * a + b
	return a
}
let x = 2
let y = 5

y = confusion(y, x) 

x = confusion(y, x) 

Assim, temos:
	y -> a = 2 * 5 + 2
	y -> a = 12
	y vale 12.

Para x, temos:
	x -> a = 2 * 12 + 2
	x -> a = 26



// Escreva uma função
// em Javascript que recebe
// um número devolve se ele é maior que um número gerado aleatoriamente
	function randomMaior(a){
		if (a > Math.ceil(Math.random() * 100)){
			console.log('O número é maior que o valor randômico')
		} else {
			return console.log('Não foi maior... Tente novamente')
		}
	}


// Escreva uma função em
// Javascript que recebe um
// número qualquer e retorna
// a representação binaria dele.
	function binario(num){
		if(num > 0){
			return num.toString(2)
		} else{
			return console.log('Digite um valor maior que zero!')
		}
	}


// Escreva uma função em Javascript
// que recebe dois números e retorna o resto da divisão entre eles
	function resto(a, b){
		return a%b
	}


// Escreva uma função em Javascript
// que vai checar se duas ou mais strings
// possuem a mesma quantidade de letras
	function comparaString(texto, texto1){
		return texto.length == texto1.length
	}


// Escreva uma função que recebe um número e retorna true se o número é par e false se for ímpar
	function parEImpar(y){
		if(y % 2 == 0){
			console.log('É par!')
		} else{ 
			console.log('É ímpar!')
		}
	}

// Escreva uma função que receba uma string e retorne o número correspondente à primeira letra considerando a tabela ascii
	function mostraAsc(texto){
		return texto.charCodeAt(0)
	}


// Pesquise uma função (método) que é aplicável à objetos do tipo string e uma aplicável ao típo número 