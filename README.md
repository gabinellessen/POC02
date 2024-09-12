# POC02
# Danilo Gigliotti e Gabriela Nellessen #
1. **sort**:
   - O método `sort` ordena os elementos de um array de acordo com uma função de comparação opcional.
   - Exemplo:
     ```javascript
     const numeros = [4, 2, 5, 1, 3];
     numeros.sort((a, b) => a - b); // [1, 2, 3, 4, 5]
     ```

2. **map**:
   - O método `map` cria um novo array com os resultados da chamada de uma função para cada elemento do array original.
   - Exemplo:
     ```javascript
     const numeros = [1, 2, 3, 4];
     const dobrados = numeros.map(num => num * 2); // [2, 4, 6, 8]
     ```

3. **reduce**:
   - O método `reduce` aplica uma função a um acumulador e a cada valor do array (da esquerda para a direita) para reduzi-lo a um único valor.
   - Exemplo:
     ```javascript
     const numeros = [1, 2, 3, 4];
     const soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0); // 10
     ```

4. **filter**:
   - O método `filter` cria um novo array com todos os elementos que passam no teste implementado pela função fornecida.
   - Exemplo:
     ```javascript
     const numeros = [1, 2, 3, 4];
     const pares = numeros.filter(num => num % 2 === 0); // [2, 4]
     ```

5. **spread**:
   - O operador `spread` (`...`) permite que um array ou objeto seja expandido em locais onde zero ou mais argumentos (para chamadas de função) ou elementos (para arrays literais) são esperados.
   - Exemplo:
     ```javascript
     const numeros = [1, 2, 3];
     const maisNumeros = [...numeros, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]
     ```

Esses métodos são muito úteis para manipulação de arrays e tornam o código mais conciso e legível¹².
Exemplos desses métodos:

![image](https://github.com/user-attachments/assets/8405e0a0-493d-4f3e-ab65-a5dc1067074d)

(1) JavaScript Array methods: Filter, Map, Reduce, and Sort. https://dev.to/ivanadokic/javascript-array-methods-filter-map-reduce-and-sort-32m5.

(2) JS Array Methods: Filter, Map, Reduce, and Sort - DEV Community. https://dev.to/lberge17/js-array-methods-filter-map-reduce-and-sort-2gcn.

(3) How to Sort a Map in JavaScript? - GeeksforGeeks. https://www.geeksforgeeks.org/how-to-sort-a-map-in-javascript/.
