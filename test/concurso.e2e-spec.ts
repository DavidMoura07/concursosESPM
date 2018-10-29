import { defineFeature, loadFeature } from 'jest-cucumber';
const feature = loadFeature('./test/features/busca_concurso.feature');

defineFeature(feature, test => {

  test('Há concursos com a palavra chave', ({ given, when, then }) => {
    given('que o candidato do concurso digite uma palavra chave que identifique o concurso', () => {
      pending();
    });
    when('quando o candidato clicar em buscar', async () => {
      pending();
    });
    then('o usuario recebe uma lista de concursos com a palavra', () => {
      pending();
    });
  });

  test('Não Há concursos com a palavra chave', ({ given, when, then, pending }) => {
    given('que o candidato do concurso digite uma palavra chave que identifique o concurso', () => {
        pending();
    });

    when('quando o candidato clicar em buscar', () => {
        pending();
    });

    then('o usuário recebe uma mensagem informando que não há concurso com aquele palavra chave', () => {
        pending();
    });
  });

  test('Não informar a palavra chave', ({ given, when, then }) => {
    given('que o candidato do concurso não digitou nada', () => {
      pending();
    });
    when('quando o candidato clicar em buscar', async () => {
      pending();
    });
    then('o usuário recebe uma mensagem pedindo a palavra chave.', () => {
      pending();
    });
  });

});