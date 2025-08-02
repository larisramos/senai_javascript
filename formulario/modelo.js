// Declaração de variáveis

/*
tipo nomeVariavel = valor;

Exemplo:
let nome = "Larissa";

--------------------------
tipagem estatica 
tipagem dinamica
tipagem forte
tipagem fraca
--------------------------

= -> atribuição de valor
== -> comparação de valor
=== -> comparação de valor e tipo
!= -> diferente de valor    
!== -> diferente de valor e tipo
< -> menor que
> -> maior que
<= -> menor ou igual que
>= -> maior ou igual que
// Variáveis são espaços na memória que armazenam valores.
// Em JavaScript, as variáveis podem ser declaradas usando let, const ou var.
// let: permite declarar variáveis que podem ser reatribuídas.
// const: permite declarar variáveis que não podem ser reatribuídas.
// var: é uma forma antiga de declarar variáveis, mas seu uso é desencorajado em favor de let e const.
// Tipos de dados primitivos em JavaScript incluem: number, string, boolean, null
// e undefined. Objetos e arrays são tipos de dados mais complexos.
// A tipagem em JavaScript é dinâmica, o que significa que você pode mudar o tipo
// de uma variável ao longo do tempo. JavaScript é uma linguagem de tipagem fraca,
// o que significa que não é necessário declarar o tipo de uma variável ao criá-la.
// Abaixo estão alguns exemplos de declaração de variáveis e operações básicas

*/

// EXEMPLO DE DECLARAÇÃO DE VARIÁVEIS
// let x = 10; // variável do tipo number

// Exemplo de concatenação 
// alert("A nota digitada foi: " + x);

// let x;
// x = prompt("Digite seu nome: ");
// alert("Seja bem vindo(a) "+ x + " ao nosso site!");

/*Exemplo de operação aritmética
let valor1 = 8;
let valor2 = 7;
let resultado = valor1 + valor2;
alert("Resultado: " + resultado);
*/
// conversão explicita de tipos 
let valor1 = Number(prompt("Digite o primeiro valor: "));
let valor2 = Number(prompt("Digite o segundo valor: "));
let resultado = valor1 + valor2;
alert("Resultado: " + resultado);