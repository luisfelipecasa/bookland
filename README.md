# 📚 Projeto Livros - Open Library API

https://openlibrary.org/dev/docs/api/search

Este projeto utiliza a **Open Library API** para buscar, exibir e detalhar livros, incluindo título, autores, ano de publicação, capa, sinopse e outros dados relevantes.

## Rotas e Uso

### Subjects API (Gênero / Categoria)
Retorna livros agrupados por tema/gênero ou listas como “populares”.
- Base URL: `https://openlibrary.org/subjects/{subject}.json`
- Parâmetros:
  - `subject` → nome do gênero ou lista (`science_fiction`, `fantasy`, `romance`, `popular`, etc.)
  - `limit` → número de livros retornados
  - `offset` → paginação
- Exemplo: `https://openlibrary.org/subjects/science_fiction.json?limit=10`
- Retorno relevante (por livro em `works`):
```json
{
  "title": "Dune",
  "key": "/works/OL12345W",
  "authors": [{"name": "Frank Herbert"}],
  "cover_id": 123456,
  "cover_edition_key": "OL12345M",
  "edition_count": 45,
  "first_publish_year": 1965
}

Works API (Detalhes de uma obra)

Retorna detalhes completos de um livro ou obra.

Base URL: https://openlibrary.org/works/{work_id}.json

Exemplo: https://openlibrary.org/works/OL138052W.json

Informações retornadas:

title → Título da obra

description → Sinopse/descrição (pode ser string ou objeto {value})

subjects → Gêneros/temas

authors → Lista de autores (cada autor tem key)

first_publish_date → Ano de publicação

covers → Array de IDs de capas

Books / Editions API (Detalhes de uma edição específica)

Retorna detalhes de uma edição específica do livro.

Base URL: https://openlibrary.org/books/{edition_key}.json

Exemplo: https://openlibrary.org/books/OL31754751M.json

Informações retornadas:

title → Título da edição

number_of_pages → Número de páginas

publish_date → Data de publicação

publishers → Editoras

description → Sinopse da edição

Covers API (Capas de livros e autores)

Permite obter imagens das capas dos livros.

Base URL: https://covers.openlibrary.org/b/{key}/{value}-{size}.jpg

Parâmetros:

Parâmetro	O que é
key	Tipo de identificador (id, isbn, olid, oclc, lccn)
value	Valor do identificador (ex: 123456, OL31754751M)
size	S, M ou L (pequena, média ou grande)

Exemplos:

Por cover_id: https://covers.openlibrary.org/b/id/10527843-M.jpg

Por cover_edition_key (OLID): https://covers.openlibrary.org/b/olid/OL31754751M-M.jpg

Observação: Se não houver capa, a API retorna uma imagem padrão (branca). Use ?default=false para não retornar nada.

Como usar no projeto

Buscar livros por gênero → Subjects API (/subjects/{genre}.json)

Buscar livros por título ou autor → Search API (/search.json)

Pegar detalhes e sinopse → Works API (/works/{work_id}.json)

Pegar capa → Covers API (/b/id/{cover_id}-M.jpg ou /b/olid/{cover_edition_key}-M.jpg)

Para informações específicas de edição → Books / Editions API (/books/{edition_key}.json)