# Map

## O que é

`Map` é uma estrutura de dados que armazena pares **chave-valor**. Diferente de um objeto comum, a chave pode ser **qualquer tipo** — string, número, objeto, etc.

```typescript
const mapa = new Map()
```

---

## Métodos principais

### set — adiciona ou atualiza um par chave-valor

```typescript
mapa.set('cor', 'azul')
mapa.set('tamanho', 'grande')
mapa.set(1, 'número um')

console.log(mapa) // Map(3) { 'cor' => 'azul', 'tamanho' => 'grande', 1 => 'número um' }
```

---

### get — recupera o valor de uma chave

```typescript
mapa.get('cor')        // 'azul'
mapa.get(1)            // 'número um'
mapa.get('inexistente') // undefined
```

---

### has — verifica se uma chave existe

```typescript
mapa.has('cor')   // true
mapa.has('peso')  // false
mapa.has(1)       // true
```

---

### size — quantidade de elementos

```typescript
console.log(mapa.size) // 3

mapa.set('peso', '5kg')
console.log(mapa.size) // 4
```

---

### delete — remove um par chave-valor específico

```typescript
mapa.delete('tamanho')
console.log(mapa.size)          // 3
console.log(mapa.has('tamanho')) // false
```

---

### clear — remove todos os elementos

```typescript
mapa.clear()
console.log(mapa.size)     // 0
console.log(mapa.has('cor')) // false
```

---

## Iteração

### keys — itera sobre as chaves

```typescript
for (let chave of mapa.keys()) {
    console.log(chave) // 'cor', 1, 'peso'
}
```

---

### values — itera sobre os valores

```typescript
for (let valor of mapa.values()) {
    console.log(valor) // 'azul', 'número um', '5kg'
}
```

---

### entries — itera sobre os pares [chave, valor]

```typescript
for (let [chave, valor] of mapa.entries()) {
    console.log(`${chave} => ${valor}`)
}
// cor => azul
// 1 => número um
// peso => 5kg
```

---

### forEach — executa uma função para cada elemento

```typescript
mapa.forEach((valor, chave) => {
    console.log(`Chave: ${chave}, Valor: ${valor}`)
})
// Chave: cor, Valor: azul
// Chave: 1, Valor: número um
// Chave: peso, Valor: 5kg
```

> **Atenção:** no `forEach` do Map a ordem dos parâmetros é `(valor, chave)` — o contrário do que parece intuitivo.

---

## Map vs Objeto

| | Map | Objeto |
|---|---|---|
| Tipo da chave | Qualquer tipo | Só string ou symbol |
| Ordem de inserção | Garantida | Não garantida |
| Tamanho | `.size` | `Object.keys(obj).length` |
| Iteração | Nativa | Precisa de `Object.entries()` |

Use `Map` quando precisar de chaves que não sejam string, ou quando a ordem de inserção importar.