// Comentário: Efetuado uso da função "toUpperCase" para efetuar formatação do nome.
const geradorDeTagsDeIdentificacao = (nome) => {
  return nome.toUpperCase();
};

/* Comentário: Efetuado uso de operador ternário. 
A lógica foi tirada da minha cabeça, pois não estava explícita a "regra de negócio". */
const verificarSePodeSerAdotado = (idade, porte) => {
  return porte == "P" ||
    (idade >= 1 && porte == "M") ||
    (idade >= 2 && porte == "G")
    ? true
    : false;
};

/* Comentário: Efetuado retorno com multiplicação simples.
A lógica foi tirada da minha cabeça, pois não estava explícita a "regra de negócio".
Também não havia um uso no retorno da função para o nome e a idade. */
const calcularConsumoDeRacao = (nome, idade, peso) => {
  return peso * 300;
};

/* Comentário: Efetuado uso de programação defensiva para formatar a entrada para LowerCase.
Foi usada a estrutura lógica Switch Case.
As demais saídas foram inspiradas em um dos exercícios. */
const decidirTipoDeAtividadePorPorte = (porte) => {
  const porteFormatado = porte.toLowerCase();
  switch (porteFormatado) {
    case "pequeno":
      return "brincar dentro de casa";
    case "médio":
      return "caminhada no quarteirão";
    case "grande":
      return "correr no parque";
    default:
      return 'Porte inválido! Informe "Pequeno", "Médio" ou "Grande"';
  }
};

/* Comentário: Como o retorno esperado era a string "Pipoca", não consegui pensar muito bem em uma lógica pra compor a função.
Até tinha pensado em fazer um fetch pra uma API pra fazer o uso do await de forma apropriada, mas como temos um retorno esperado, entendi que deveria ser dessa forma. */
async function buscarDadoAsync() {
  return await "Pipoca";
}

export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync,
};
