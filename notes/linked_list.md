# Listas Encadeadas (Linked Lists)

## O que é

Uma lista encadeada é uma estrutura de dados onde cada elemento (chamado de **nó**) guarda dois valores:
- `val` — o valor em si
- `next` — uma referência para o próximo nó

Diferente de um array, os nós **não ficam em posições contíguas de memória**. Cada nó pode estar em qualquer lugar — o que os conecta é o ponteiro `next`.

```
Array:  [1][2][4]         → posições fixas, acesso por índice

Lista:  [1|•]──→[2|•]──→[4|null]
         val next  val next  val next
```

O último nó sempre tem `next = null` — é o sinal de fim da lista.

---

## Estrutura do nó em TypeScript

```typescript
class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
```

---

## Como criar uma lista manualmente

Para criar `1 → 2 → 4`, você começa do fim:

```typescript
const node3 = new ListNode(4, null)   // último nó, next = null
const node2 = new ListNode(2, node3)  // aponta para node3
const node1 = new ListNode(1, node2)  // aponta para node2

// node1 é o head — porta de entrada da lista inteira
```

---

## Como percorrer uma lista

Você não tem índice. Só tem o `head`. Anda nó a nó seguindo o `next`:

```typescript
let current = head

while (current !== null) {
    console.log(current.val)
    current = current.next  // avança para o próximo nó
}
```

---

## O nó dummy (nó auxiliar)

Quando você precisa **construir** uma lista nova nó a nó, tem um problema: o primeiro nó precisa de tratamento especial porque ainda não há lista.

A solução é criar um **nó dummy** (falso) só para servir de âncora:

```typescript
const dummy = new ListNode(0)  // nó falso, valor não importa
let current = dummy            // current anda pela lista, dummy fica parado
```

A cada passo você encaixa o próximo nó em `current.next` e avança `current`:

```typescript
current.next = novoNo
current = current.next
```

No final, `dummy.next` é o head real da lista que você construiu — pulando o nó falso.

```
dummy → 1 → 2 → 3 → null
  ↑
sempre parado aqui

retorne dummy.next  →  1 → 2 → 3 → null
```

---

## Diferença entre array e lista encadeada

| | Array | Lista Encadeada |
|---|---|---|
| Acesso por índice | O(1) | O(n) — precisa percorrer |
| Inserção no meio | O(n) — desloca elementos | O(1) — só troca ponteiros |
| Memória | Contígua | Espalhada |
| Tamanho | Fixo (em geral) | Dinâmico |

---

## Complexidade do algoritmo de merge

Dado `list1` com `n` nós e `list2` com `m` nós:

- **Tempo: O(n + m)** — cada nó é visitado uma vez
- **Espaço: O(1)** — nenhuma estrutura nova é criada, só ponteiros são reorganizados

---

## Exemplo completo — Merge Two Sorted Lists

```typescript
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0)
    let current = dummy
    let currentList1 = list1   // nunca altere os parâmetros originais
    let currentList2 = list2

    // enquanto os dois têm elementos, compara e encaixa o menor
    while (currentList1 !== null && currentList2 !== null) {
        if (currentList1.val <= currentList2.val) {
            current.next = currentList1
            currentList1 = currentList1.next
        } else {
            current.next = currentList2
            currentList2 = currentList2.next
        }
        current = current.next
    }

    // encaixa o resto da lista que sobrou (já está ordenada e conectada)
    if (currentList1) current.next = currentList1
    if (currentList2) current.next = currentList2

    return dummy.next
}
```

**Por que não modificar `list1` e `list2` diretamente?**
Parâmetros de função representam a entrada — quem chamou a função não espera que sejam alterados. Trabalhe sempre em cópias.