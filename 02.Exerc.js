// Declare uma variável (minhaVariavel) e atribua à ela um texto qualquer
minhaVariavel = 'um texto qualquer'

let minhaVariavel = "Oi, tudo bem?"

// Mostre no console o tipo da variável e seu respectivo valor

/*typeof minhaVariavel
console.log(minhaVariavel)*/

console.log(typeof minhaVariavel, minhaVariavel)

// Substitua o valor da variável por um número

minhaVariavel = 24

console.log(typeof minhaVariavel,minhaVariável) //Vai retornar string um texto qualquer
// ou
console.log(`Tipo:${typeof minhaVariavel} Valor:${minhaVariavel}`
// -> Importante notar que ao aplicar a propriedade typeof na variável, retornamos o tipo correspontente ao valor que ela guarda
            
// Substitua o valor da variável por um número
minhaVariavel = 10
            
// Mostre no console o tipo da variável e seu respectivo valor
console.log(typeof minhaVariavel,minhaVariável) //Vai retornar number 10 
//-> Note que a mesma variável retorna o tipo diferente porque o valor que era um texto passou a ser um número

/*typeof minhaVariavel
console.log(minhaVariavel)*/

console.log(typeof minhaVariavel, minhaVariavel)

// Substitua o valor da variável pelo número, só que agora escreva o número entre aspas
minhaVariavel = "10" //Números podem ser guardados como string. É importante saber o tipo quandoestamos trabalhando com números 
// uma vez que se eles estiverem em formato string, podemos ter resultados inesperados (ex: "10"+2 = "102") 

minhaVariavel = "24"

// Mostre no console o tipo da variável. Alguma coisa mudou?
console.log(typeof minhaVariavel,minhaVariável) //Vai retornar string 10 //O tipo do número mudou

typeof minhaVariavel

/*Irá alterar de number para string*/

// Agora atribua um valor booleano à variável
minhaVariavel = true

minhaVariavel = true

// Confirme que o tipo da variável é booleano utilizando o console.log()

console.log(minhaVariavel)

console.log(typeof minhaVariavel) // retorna boolean
            
// Crie uma variavel denominada 'numero'
let numero

let numero

// Atribua um valor digitado pelo usuário nesta variável
numero = prompt('Digite um número')

numero = prompt('Digite um valor de 1 a 10:')

numero = parseInt(numero) /*Para transformar a string que foi retornada em tipo número*/

// Mostre o tipo dessa variável no console
console.log(typeof numero) // Vai retornar string

typeof numero

// Essa variável é do tipo número? Se não, converta essa variável para o tipo número
//-> A variável não é do tipo número. 
numero = parseInt(numero) //Converte para inteiro, se o usuário digitar 2.45 ele transforma para 2
//ou
numero = parseFloat(numero) //Converte para número decimal 
//ou 
numero = Number(numero)
// Note que nós guardamos o resultado da conversão (parseInt(numero)) na variável número, pois se só aplicarmos a função à variável
// nós apenas vemos o resultado na tela, porém a variável numero continua sendo um string. É por isso que escrevemos numero = 

numero = 10

/*Ela não retornou uma variavel do tipo 'number', mas sim do tipo 'string'*/

// Agora faça o processo contrário, e converta essa variável para o tipo 'string'
numero = numero.toString() //Note que a forma como aplicamos o método de conversão é diferente

numero = '10'

// Converta a variável número para o tipo booleano
numero = Boolean(numero)
//ou
numero = !!numero //O ! é um operador de negação, contudo, se usado antes de um valor, ele promove a conversão para boleano negando o seu valor,
//entao, se quisermos saber o valor real basta negar novamente e por isso escrevermos duas excamaçes (!!, a primeira nega o valor e a segunda nega essa 
//negação) . Ex. !true = false  logo !(!true) é o mesmo que !(false) = true ...escrevendo sem parenteses !!true = true

numero = false /*Podemos transformar também das seguintes maneiras: Boolean(numero) ou !numero ou !!numero */

// Crie uma variável chamada 'zero' e atribua o número zero à variável
let zero = 0

let zero = 0

// Converta a variável 'zero' para booleano. Por que retornou esse valor?
!!zero //retorna false porque zero é considerado um valor falsy, ou seja, um valor que quando convertido para booleano fica false

zero = true

/*Porque o tipo foi alterado para booleano e esse tipo aceita dois valores: verdadeiro ou falso*/

// Existem outros valores que quando convertidos para booleanos retornem o mesmo resultado?

/*Toda varável pode ser transformada em boolean*/
// Existem outros valores que quando convertidos para booleanos retornem o mesmo resultado?
// Sim são eles: false, null, undefined, 0, NaN e '