const mapa = new Map();

console.log('===== SET =====');
// // Adiciona um par chave-valor
mapa.set('cor', 'azul');
mapa.set('tamanho', 'grande');
mapa.set(1, 'número um');
console.log(mapa); // Map(3) { 'cor' => 'azul', 'tamanho' => 'grande', 1 => 'número um' }

console.log('\n===== GET =====');

// Recupera o valor de uma chave
console.log(mapa.get('cor')); // 'azul'
console.log(mapa.get(1)); // 'número um'
console.log(mapa.get('inexistente')); // undefined


console.log('\n===== HAS =====');
// Verifica se uma chave existe
console.log(mapa.has('cor')); // true
console.log(mapa.has('peso')); // false
console.log(mapa.has(1)); // true


console.log('\n===== SIZE =====');
// Retorna a quantidade de elementos
console.log(mapa.size); // 3
mapa.set('peso', '5kg');
console.log(mapa.size); // 4


console.log('\n===== DELETE =====');
// Remove um par chave-valor específico
mapa.delete('tamanho');
console.log(mapa.size); // 3
console.log(mapa.has('tamanho')); // false


console.log('\n===== KEYS =====');
// Retorna um iterador com todas as chaves
const chaves = mapa.keys();
console.log(chaves)
for (let chave of chaves) {
  console.log(chave); // 'cor', 1, 'peso'
}


console.log('\n===== VALUES =====');
// Retorna um iterador com todos os valores
const valores = mapa.values();
console.log(valores)
for (let valor of valores) {
  console.log(valor); // 'azul', 'número um', '5kg'
}


console.log('\n===== ENTRIES =====');
// Retorna um iterador com [chave, valor]
const pares = mapa.entries();
console.log(pares)
for (let [chave, valor] of pares) {
  console.log(`${chave} => ${valor}`);
}
// cor => azul
// 1 => número um
// peso => 5kg


console.log('\n===== FOR EACH =====');
// Executa uma função para cada elemento
mapa.forEach((valor, chave, mapaDeNovo) => {
  console.log(`Chave: ${chave}, Valor: ${valor}`);
});
// Chave: cor, Valor: azul
// Chave: 1, Valor: número um
// Chave: peso, Valor: 5kg


console.log('\n===== CLEAR =====');
// Remove todos os elementos
mapa.clear();
console.log(mapa.size); // 0
console.log(mapa.has('cor')); // false