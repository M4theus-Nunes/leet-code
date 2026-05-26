# Big O Notation

## O que é

Big O é uma forma de medir **como o número de operações de um algoritmo cresce conforme a entrada cresce**.

Não medimos em segundos — o mesmo código roda em tempos diferentes dependendo da máquina, da carga do sistema, da linguagem. Big O é uma medida universal que independe disso tudo.

---

## A regra principal

Só o que **domina o crescimento** importa. Constantes e termos menores são descartados.

```
n + 2       →  O(n)
3n          →  O(n)
n + n²      →  O(n²)   — n² domina
n² + n³     →  O(n³)   — n³ domina
3           →  O(1)    — constante é constante
```

---

## Os casos mais comuns

Do melhor pro pior:

| Notação | Nome | Exemplo |
|---|---|---|
| O(1) | Constante | Acessar o primeiro elemento de uma lista |
| O(log n) | Logarítmico | Busca binária |
| O(n) | Linear | Percorrer uma lista |
| O(n log n) | Linearítmico | Merge sort |
| O(n²) | Quadrático | Dois loops aninhados |
| O(2ⁿ) | Exponencial | Algoritmos recursivos sem memoização |

```
operações
    |              O(n²)
    |             /
    |            /
    |           /  O(n)
    |          /
    |        /
    |------/____________ O(1)
    |
    +--------------------→ tamanho da entrada
```

---

## O(1) — Constante

Não importa o tamanho da entrada — sempre o mesmo número de operações.

```typescript
function getFirst(arr: number[]): number {
    return arr[0]  // sempre 1 operação
}

function printThree(arr: number[]): void {
    console.log(arr[0])  // 3 operações, mas ainda constante
    console.log(arr[1])  // não cresce com a entrada
    console.log(arr[2])
}
```

---

## O(n) — Linear

Cresce proporcionalmente à entrada. Dobra a entrada, dobra as operações.

```typescript
function printAll(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])  // n operações
    }
}
```

---

## O(n²) — Quadrático

Dois loops aninhados sobre a mesma entrada. Dobra a entrada, quadruplica as operações.

```typescript
function printPairs(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j])  // n * n = n² operações
        }
    }
}
```

---

## Loops sequenciais vs aninhados

Essa distinção é crítica.

**Sequenciais → soma**

```typescript
function example(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {  // n
        console.log(arr[i])
    }

    for (let j = 0; j < arr.length; j++) {  // n
        console.log(arr[j])
    }
}
// n + n = 2n → O(n)
```

**Aninhados → multiplicação**

```typescript
function example(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {      // n
        for (let j = 0; j < arr.length; j++) {  // n para cada i
            console.log(arr[i], arr[j])
        }
    }
}
// n * n = n² → O(n²)
```

---

## Entradas diferentes têm nomes diferentes

Se os loops operam em entradas de tamanhos diferentes, você não pode chamar os dois de `n`.

```typescript
function example(arr1: number[], arr2: number[]): void {
    for (let i = 0; i < arr1.length; i++) {  // n
        console.log(arr1[i])
    }

    for (let j = 0; j < arr2.length; j++) {  // m
        console.log(arr2[j])
    }
}
// Sequenciais com entradas diferentes → O(n + m)


function example(arr1: number[], arr2: number[]): void {
    for (let i = 0; i < arr1.length; i++) {      // n
        for (let j = 0; j < arr2.length; j++) {  // m para cada i
            console.log(arr1[i], arr2[j])
        }
    }
}
// Aninhados com entradas diferentes → O(n * m)
```

---

## Complexidade espacial

Big O também se aplica ao **espaço em memória** — não só ao tempo.

- Criar variáveis de tamanho fixo → O(1)
- Criar uma estrutura que cresce com a entrada → O(n)

```typescript
// O(1) de espaço — variáveis fixas, independente da entrada
function sum(arr: number[]): number {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}

// O(n) de espaço — cria um novo array do mesmo tamanho da entrada
function double(arr: number[]): number[] {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2)
    }
    return result
}
```

## Complexidade de tempo vs espaço
 
Todo algoritmo tem **duas** complexidades — sempre analise as duas separadamente.
 
- **Tempo** — quantas operações o algoritmo executa
- **Espaço** — quanta memória extra o algoritmo consome (além da entrada)
As mesmas regras do Big O se aplicam aos dois.
 
### O que conta como espaço extra?
 
- Variáveis simples (`let x`, `let total`) → **não crescem** com a entrada → O(1)
- Estruturas novas (arrays, listas, objetos) que recebem um elemento por elemento da entrada → **crescem** com a entrada → O(n)
- Reorganizar ponteiros de estruturas que já existem → **não cria nada novo** → O(1)
```typescript
// Tempo: O(n) — percorre o array
// Espaço: O(1) — só cria variáveis fixas, independente da entrada
function sum(arr: number[]): number {
    let total = 0                          // variável fixa
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}
 
// Tempo: O(n) — percorre o array
// Espaço: O(n) — cria um novo array que cresce junto com a entrada
function double(arr: number[]): number[] {
    const result = []                      // estrutura nova que vai crescer
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2)            // +1 elemento por iteração
    }
    return result
}
 
// Tempo: O(n + m) — visita cada nó uma vez
// Espaço: O(1) — só reorganiza ponteiros, não cria estrutura nova
function mergeTwoLists(list1, list2) {
    const dummy = new ListNode(0)          // nó único fixo, não cresce
    let current = dummy                    // variável de ponteiro, fixa
 
    // ... reorganiza os next dos nós que já existiam
}
```

---

## Exemplo real — Merge Two Sorted Lists

```typescript
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0)
    let current = dummy

    while (list1 !== null && list2 !== null) {  // visita cada nó uma vez
        if (list1.val <= list2.val) {
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }

    if (list1) current.next = list1
    if (list2) current.next = list2

    return dummy.next
}
```

- **Tempo: O(n + m)** — cada nó de ambas as listas é visitado uma vez
- **Espaço: O(1)** — nenhuma estrutura nova é criada, só ponteiros são reorganizados

---

### O tradeoff mais comum
 
Muitas vezes você pode **trocar espaço por tempo** — usar mais memória pra ser mais rápido. Isso aparece muito em algoritmos de cache e memoização. Quando isso acontecer, vale a pena avaliar qual dos dois é mais crítico pro seu contexto.