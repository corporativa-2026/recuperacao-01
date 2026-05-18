// # Recuperação dos Trabalhos T1, T2, e T3
// - Esse aquivo representa o index.js;
// - Implementar exatamente conforme a especificação (preserve os nomes, ordem dos parâmetros, etc);
// - Não usar as funções built-in do JavaScript, exceto Math.random() para o shuffle
// - Criar um arquivo de teste para cada módulo, ex.: strings.test.js
//   e escrever assertivas com vitest para cada console.log;
// - Adicionar o eslint e usar a configuração em https://github.com/corporativa-2026/template
// - Warnings baixam a grade;
// - Enviar APENAS os arquivos strings.js, number.js, arrays.js 
//   e os arquivos de teste correspondentes, em único arquivo zipado (.zip, não .rar ou .7z!);
import { ins, del } from './strings.js';

//               01234567890123456789
console.log(ins('informatica internet', 12, 'para ')); // informatica para internet
console.log(ins('ifrs', 2, '-')); // if-rs
console.log(ins('federal', 'instituto ')); // instituto federal
console.log(ins('instituto federal grande do sul', 17, ' do rio')); // instituto federal do rio grande do sul
console.log(ins('nome|cidade|estado', 4, '|sobrenome')); // nome|sobrenome|cidade|estado
console.log(ins('info', 4, 'rmatica')); // informatica
console.log(ins('info', 5, 'ifrs')); // info ifrs
console.log(ins('nome|', 15, '|sobrenome')); // nome|          |sobrenome
// adione casos de teste para situações excepcionais,
// como inserir em posições negativas ou além do comprimento da string,
// ou inserir uma string vazia

//               01234567890123456789
console.log(del('informatica internet', 4, 7)); // info internet
console.log(del('informatica internet', 4)); // info
console.log(del('informatica internet', 0, 12)); // internet
console.log(del('ifrs', 2, 0)); // ifrs
console.log(del('ifrs', 2, 1)); // ifs
console.log(del('ifrs', 2, 2)); // if
console.log(del('ifrs', 2, 3)); // if
console.log(del('ifrs', 2, 30)); // if
console.log(del('ifrs', 1, 2)); // is
console.log(del('ifrs', 1, 3)); // i
console.log(del('ifrs', 1, 5)); // i
// adione casos de teste para situações excepcionais,
// como deletar em posições negativas ou além do comprimento da string
// ou deletar um número negativo de caracteres

import { ceil, floor, round } from './number.js';

console.log(ceil(46.98)); // 47
console.log(typeof ceil(46.98)); // "number"
console.log(ceil(46)); // 46
console.log(ceil(46.1)); // 47
console.log(ceil(46.000001)); // 47
console.log(ceil(-46.98)); // -46
console.log(ceil(-46.99999)); // -46
console.log(ceil(-47.0001)); // -47
console.log(ceil("48")); // undefined
console.log(ceil("abc")); // undefined
console.log(ceil([])); // undefined
console.log(ceil(0)); // 0
console.log(ceil()); // undefined

console.log(floor(46.98)); // 46
console.log(typeof floor(46.98)); // "number"
console.log(floor(46)); // 46
console.log(floor(46.1)); // 46
console.log(floor(46.000001)); // 46
console.log(floor(-46.98)); // -47
console.log(floor(-46.99999)); // -47
console.log(floor(-47.0001)); // -48
console.log(floor("48")); // undefined
console.log(floor("abc")); // undefined
console.log(floor([])); // undefined
console.log(floor(0)); // 0
console.log(floor()); // undefined

console.log(round(46.98)); // 47
console.log(typeof round(46.98)); // "number"
console.log(round(46.5)); // 47
console.log(round(46.4999)); // 46
console.log(round(51.568, 2)); // 51.57
console.log(round(51.568, 1)); // 51.6
console.log(round(51.032, 1)); // 51.0
console.log(round(51.032, 2)); // 51.03
console.log(round(51.032, 3)); // 51.032
console.log(round(51.032, 4)); // 51.032
console.log(round(-67.9546)); // -68
console.log(round(-67.9546, 3)); // -67.955
console.log(round(-67.9546, 2)); // -67.95
console.log(round(-67.9546, 1)); // -68.0
console.log(round(-67.9546, 0)); // -68
console.log(round(-67.9546)); // -68
console.log(round()); // undefined

import { flatten, shuffle } from './arrays.js';

console.log(flatten([1, 2, 3])); // [1, 2, 3]
console.log(flatten([1, [2, 3], 4])); // [1, 2, 3, 4]
console.log(flatten([[1, 2], [3, 4]])); // [1, 2, 3, 4]
console.log(flatten([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]
console.log(flatten([])); // []
console.log(flatten([1, [2, [3, [4, 5]]], 6])); // [1, 2, 3, 4, 5, 6]

// deve usar Math.random() neste
console.log(shuffle([1, 2, 3, 4, 5])); // [3, 1, 5, 2, 4] (exemplo de saída aleatória)
console.log(shuffle(['a', 'b', 'c', 'd'])); // ['c', 'a', 'd', 'b'] (exemplo de saída aleatória)
console.log(shuffle([])); // []
console.log(shuffle([1])); // [1]
console.log(shuffle([1, 2])); // [2, 1] ou [1, 2] (exemplo de saída aleatória)
console.log(shuffle()); // []
console.log(shuffle(10)); // [2, 5, 1, 9, 4, 7, 3, 6, 8, 10] (exemplo de saída aleatória)
console.log(shuffle(1)); // [1]
console.log(shuffle(2)); // [1, 2] ou [2, 1] (exemplo de saída aleatória)
