/* variavel = var ou let - identificador - ;
 var ou let - identificador - atribuicao = - ;  */
console.log(19.9 * 0.6);

let preco = 19.9;
let desconto = 0.4;
let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

let nome = "Caderno"; // string (texto) -> sequencia de simbolos
let categoria = "Papelaria";
console.log(
  "Produto: " +
    nome +
    ", Categoria: " +
    categoria +
    ", Preco: " +
    preco +
    ", Desconto: " +
    desconto
);

console.log(1 + 1);
console.log("1" + 1);
