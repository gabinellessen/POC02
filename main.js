  // DADOS //
  const numeros = [9, 7, 23, 5, 45];
  const nomes = ['Maria', 'João', 'Chiquinho', 'Cleitinho'];

  // FILTER //

  const numerosFiltrados = numeros.filter(num => num > 10);
  console.log('Números maiores que 10:', numerosFiltrados);
  document.getElementById('filter-result').textContent = `Números filtrados: ${numerosFiltrados}`;

  // SORT //
  const numerosOrdenados = [...numeros].sort((a, b) => a - b);
  document.getElementById('sort-result').textContent = `Números ordenados: ${numerosOrdenados}`;

  // SPREAD //
  const novosNumeros = [...numeros, 50, 60];
  console.log('Novos números:', novosNumeros);
  document.getElementById('spread-result').textContent = `Números adicionados: ${novosNumeros}`;

  // MAP //
  const numerosDobrados = numeros.map(num => num * 2);
  console.log('Números dobrados:', numerosDobrados);
  document.getElementById('map-result').textContent = `Números dobrados: ${numerosDobrados}`;

  // REDUCE //
  const somaNumeros = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
  console.log('Soma dos números:', somaNumeros);
  document.getElementById('reduce-result').textContent = `Soma dos números: ${somaNumeros}`;
