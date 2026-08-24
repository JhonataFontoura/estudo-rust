# Estudo Rust

Repositório de estudos de **Rust**, organizado como um tutorial navegável inspirado na estrutura do W3Schools.

O objetivo deste projeto é centralizar anotações, exemplos práticos, exercícios e ferramentas utilizadas durante o aprendizado da linguagem, mantendo o conteúdo fácil de consultar e preparado para futuras expansões.

## Tutorial web

O arquivo principal é:

```text
index.html
```

Ele contém o material organizado em uma interface com:

- menu lateral por assuntos;
- busca em todo o conteúdo;
- navegação por seções e subseções;
- botão para copiar seções;
- layout responsivo;
- paleta azul e preta;
- área exclusiva para ferramentas de desenvolvimento.

## Conteúdo atual

O tutorial reúne mais de **23 mil linhas de material de estudo**, incluindo:

- fundamentos da linguagem;
- tipos de dados;
- input e controle de fluxo;
- funções e recursividade;
- memória, Stack, Heap e Static;
- Ownership e Borrowing;
- Dereferencing e Reborrowing;
- Strings;
- operadores;
- tuplas, arrays e Vec;
- Structs e Enums;
- Pattern Matching e Destructuring;
- HashMap;
- módulos, `mod`, `use`, `crate`, `super` e namespaces;
- Traits;
- polimorfismo com `impl Trait` e `dyn Trait`;
- Generics e `Display`;
- Lifetimes e dangling pointers;
- aplicações de console e CRUD em memória;
- `Option`, `Result`, `?` e erros customizados;
- macros declarativas e procedurais;
- programação funcional e closures;
- concorrência, Threads, Channels, `Arc`, `Mutex`, Rayon e Tokio;
- persistência em JSON, MySQL, SQLite, Diesel e rusqlite;
- APIs REST com Rocket;
- aplicações web com Rocket, templates e formulários.

## Ferramentas

O material de ferramentas foi separado da trilha principal da linguagem e está disponível em:

```text
estudos/ferramentas.txt
```

Entre os assuntos estão:

- Cargo Watch;
- `rustfmt`;
- WSL;
- Valgrind;
- perf;
- Cargo e crates;
- dependências pelo GitHub;
- publicação no crates.io.

## API de conteúdo

O projeto também possui uma pequena **API JavaScript local** em:

```text
api/study-api.js
```

Ela serve como uma camada de acesso ao conteúdo do tutorial para futuras funcionalidades de busca, navegação, filtros ou integração com outras interfaces.

Exemplo no navegador:

```html
<script src="api/study-api.js"></script>
<script>
  console.log(RustStudyAPI.listTopics());
  console.log(RustStudyAPI.search('ownership'));
</script>
```

Principais métodos:

```text
RustStudyAPI.listTopics()
RustStudyAPI.getTopic(id)
RustStudyAPI.search(term)
RustStudyAPI.getStats()
```

## Estrutura do repositório

```text
estudo-rust/
├── index.html
├── README.md
├── api/
│   └── study-api.js
└── estudos/
    ├── Codigo_base.txt
    ├── Codigo_novo.txt
    └── ferramentas.txt
```

## Como usar

Clone o repositório:

```bash
git clone https://github.com/JhonataFontoura/estudo-rust.git
```

Entre na pasta:

```bash
cd estudo-rust
```

Depois abra o arquivo `index.html` no navegador.

Não é necessário instalar dependências para consultar o tutorial.

## Objetivo do projeto

Este repositório funciona como uma base de conhecimento pessoal e evolutiva sobre Rust. O conteúdo é atualizado à medida que novos assuntos são estudados, priorizando exemplos, explicações diretas e organização modular.
