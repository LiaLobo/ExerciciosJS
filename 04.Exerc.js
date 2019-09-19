// Considerando os valores de x = 2, y = 5 e z = 15 informe o resultado das seguintes operações:

// x + y - z
let x = 2
let y = 5
let z = 15
let conta = x + y - z

R: -8
-8

// x/y
0.4

conta = x/y

R: 0.4

// y*z
75

conta = y*z

R: 75

// x**y+z/y
35

conta = x**y+z/y

R: 35

// z//y
Anulada, o operador // não existe em JS 

conta = z/y

R: 3

// z%y
0

conta = z%y

R: 0

// z//x
Anulada, o operador // não existe em JS

conta = z/x

R: 7.5

// z%x
1

conta = z%x

R: 1

// (x+y)*(z-x)/8
11.375

conta = (x+y)*(z-x)/8

R: 11.375

// 3*x + 5*y + 0.5*4
33

conta = 3*x + 5*y + 0.5*4

R: 33

// x=y+z
20

conta = x=y+z

R: 20

// 7*x

conta = 7*x

R: 140
140

// Seja 2*pi*raio a fórmula que calcula a medida de uma circunferencia, calcule a  circunferência correspondente aos seguintes raios

// r1 = 58
let c1 = 2*Math.PI*r1
364.424747816416

conta = 2* Math.PI*58

R: 364.424747816416

// r2 = 18/5
let c2 = 2*Math.PI*r2
22.61946710584651

//Ou...você pode criar uma função
function circunferencia(raio){
    return 2*Math.PI*raio
}
// E chamar as funções com os respectivos valores

conta = 2* Math.PI*18/5

R: 22.61946710584651
c1 = circunferencia(r1)
c2 = circunferencia(r2)

// Retorne o resultado das seguintes operações, considerando
// let a = 1, b = 2, c = 3

//(18 < 2 * 5) 
RESULTADO: false

// a > b && a > c
RESULTADO: false

// a < c
RESULTADO: true

// a == c-b
RESULTADO: true

// b /=8
RESULTADO: 0.25

// a === c-b
RESULTADO: false

// a >= b
RESULTADO: true

// b**a > b*c
RESULTADO: false

// a++
RESULTADO: a + 1 -> 2

// ++a
RESULTADO: 4

// a+=2
RESULTADO: 6

// a++ > b++ || a-- > 0
RESULTADO: true

// b + a + "nana" + c + b
RESULTADO: "8.25nana31.25"

// "Ana" > "ana"
RESULTADO: false

// "ANA" > "Ana"
RESULTADO: false

// "zeca" > "ana"
RESULTADO: true

// "ANA" != "Ana"
RESULTADO: true

// 3*'Ana'
RESULTADO: NaN

// '5' === 5
RESULTADO: false

// '5'== 5
RESULTADO: true

// 5 === 25/5
RESULTADO: true

// 4 != 3
RESULTADO: true

// "4" !== 3
RESULTADO: true

// true == 0
RESULTADO: false

// false == 0
RESULTADO: true

// !!5
RESULTADO: true

// !0
RESULTADO: true

// !""
RESULTADO: true

// "Come"+ " " + "Abacate!"
RESULTADO: "Come Abacate!"
false

// a > b && a > c
false

// a < c
true

// a == c-b
true

// b /=8 //Esse operador é o mesmo que b = b /8
0.25 

// a === c-b
false

// a >= b
true

// b**a > b*c
false

// a++ (pós incremento, mesmo que a=a+1)
1 // Ele adiciona 1, mas mostra o valor atual de a (2).Se você der um console.log(a) vai ver!

// ++a (pré incremento, mesmo que a=a+1) 
3 //mostra o valor já incrementado

// a+=2 //mesmo que a = a+2
5

// a++ > b++ || a-- > 0
true 
// -> a++ > b++ -> true 
// ->  a-- > 0  -> true
// -> true || (ou) true -> true

// b + a + "nana" + c + b
'8.25nana32.25'

// "Ana" > "ana"
false

// "ANA" > "Ana"
false

// "zeca" > "ana"
true

// "ANA" != "Ana"
true

// 3*'Ana'
NaN

// '5' === 5 //Igualdade restrita - compara os valores e os tipos - valores iguais, mas tipos diferentes (string e number)
false

// '5'== 5 //Igualdade - compara somente os valores
true

// 5 === 25/5
true

// 4 != 3
true

// "4" !== 3
true

// true == 0
false

// false == 0
true

// !!5
true

// !0
true

// !""
true

// "Come"+ " " + "Abacate!"
'Come Abacate!'
