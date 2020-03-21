---
title: TypeScript Visão Geral (wip)
category: TypeScript
created-at: 2020-03-21T12:05:00.857+00:00
---

Work in Progress...

(img aqui)

# TypeScript Visão Geral

"Uma longa caminhada começa com o primeiro passo". Mas antes de dar o primeiro passo, estando preparado para a caminhada,
tudo se torna mais fácil. Esse post é sobre entender TypeScript de uma forma mais profunda, porque num momento ou outro,
virão perguntas como:
 
- porque TypeScript?
- porque TypeScript é a melhor opção p/ esse projeto?
- é mais rápido?
- quais são os tipos?
- o que TypeScript oferece que JavaScript não?

e muitas outras perguntas que se sabidas, irão lhe dar conhecimento sólido e mais segurança p/ desenvolver o nosso trabalho.

## O que é TypeScript

`TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.`

"superset", aposto que derrapou nessa palavra e ela faz toda a diferença em entender o que exatamente é o TypeScript.
Superset é um Super Conjunto, typed superset significa que um conjunto de tipos é aplicado em cima do JavaScript.

"compiles", COMPILA, e não "transpile". O código escrito em TypeScript é compilado para JavaScript. Uma informação legal
é que pode-se compilar para várias versões do JavaScript.

## Benefícios

Os três principais benefícios são:

1. Static Type

Uma variável JavaScript aceita qualquer tipo de valor, uma declaração de String pode ser transformada em Number e depois
um Array e depois um undefined e depois um null e terminar novamente como uma String.

```js
let food = 'tasty';

food = 1

food = [1]

food = undefined

food = null

food = 'tasty'

console.log(food)
```

Por essa característica, bugs podem ser gerados e difíceis de serem encontrados.

2. Organização

...

 



