#language: pt

Funcionalidade: Buscar concursos

O usuário deseja buscar um concurso informando uma palavra chave.
Essa palavra chave pode ser o nome do órgão, o número do curso, ano ou a profissão ou tudo.

Cenário: Há concursos com a palavra chave
Dado que o candidato do concurso digite uma palavra chave que identifique o concurso
Quando quando o candidato clicar em buscar
Então o usuario recebe uma lista de concursos com a palavra

Cenário: Não Há concursos com a palavra chave
Dado que o candidato do concurso digite uma palavra chave que identifique o concurso
Quando quando o candidato clicar em buscar
Então o usuário recebe uma mensagem informando que não há concurso com aquele palavra chave

Cenário: Não informar a palavra chave
Dado que o candidato do concurso não digitou nada
Quando quando o candidato clicar em buscar
Então o usuário recebe uma mensagem pedindo a palavra chave.
