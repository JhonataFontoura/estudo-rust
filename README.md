# Estudo Rust — Rust Tutorial W3

Projeto pessoal de estudo de **Rust**, organizado como um tutorial navegável inspirado na estrutura do W3Schools, com interface em azul e preto, busca integrada e separação entre conteúdo da linguagem e ferramentas de desenvolvimento.

O material foi consolidado a partir das anotações de estudo e organizado em **34 seções**. Os arquivos extensos foram divididos em partes menores para manter o repositório fácil de versionar e navegar, sem perder o conteúdo original.

## O que existe no projeto

A trilha principal cobre fundamentos, tipos de dados, input e controle de fluxo, funções, memória, Ownership, Borrowing, Dereferencing, Reborrowing, Strings, operadores, tuplas, arrays, `Vec`, Structs, Enums, Pattern Matching, Destructuring, `HashMap`, módulos, Traits, polimorfismo, Generics, Lifetimes, tratamento de erros, macros, programação funcional, concorrência, persistência e desenvolvimento web/API com Rocket.

A área **Ferramentas** fica separada da trilha da linguagem e inclui Cargo Watch, formatação, WSL, Valgrind, `perf`, crates, GitHub, crates.io e namespacing.

## Estrutura

```text
estudo-rust/
├── index.html
├── README.md
├── manifest.json
├── reconstruir.py
├── api/
│   └── study-api.js
└── estudos/
    ├── Codigo_base.txt
    ├── Codigo_novo.txt
    ├── ferramentas.txt
    ├── base/
    │   ├── parte-00.txt
    │   └── ... parte-08.txt
    ├── novo/
    │   ├── parte-00.txt
    │   └── ... parte-14.txt
    └── ferramentas/
        ├── parte-00.txt
        └── parte-01.txt
```

## Como abrir o tutorial

O `index.html` carrega os arquivos de estudo com `fetch()`. Por isso, abra o projeto por um servidor HTTP local em vez de usar apenas `file://`.

Com Python:

```bash
python -m http.server 8000
```

Depois acesse no navegador:

```text
http://localhost:8000
```

Também é possível usar uma extensão como **Live Server** no VS Code.

## GitHub Pages

O projeto está preparado para publicação estática. No GitHub, abra **Settings → Pages**, escolha **Deploy from a branch**, selecione a branch `main` e a pasta `/ (root)`.

## API do tutorial

O arquivo `api/study-api.js` expõe uma API JavaScript no navegador através de `RustStudyAPI`:

```javascript
RustStudyAPI.listTopics();
RustStudyAPI.getTopic("novo-generics");
RustStudyAPI.search("ownership");
RustStudyAPI.getStats();
```

### Métodos

- `listTopics()` — lista todas as seções carregadas.
- `getTopic(id)` — retorna uma seção pelo identificador.
- `search(term)` — busca um termo no conteúdo carregado.
- `getStats()` — retorna quantidade de tópicos e distribuição por origem.

## Reconstruindo os TXT completos

Os arquivos grandes foram divididos em partes. Para reconstruir os três arquivos completos localmente:

```bash
python reconstruir.py
```

O script lê `manifest.json` e gera:

```text
estudos/Codigo_base_completo.txt
estudos/Codigo_novo_completo.txt
estudos/ferramentas_completo.txt
```

## Organização do conteúdo

```text
BASE DO CURSO
├── Fundamentos
├── Tipos de Dados
├── Input e Controle de Fluxo
├── Funções
├── Memória: Static, Stack e Heap
├── Ownership e Borrowing
├── Dereferencing
├── Reborrowing
├── Strings
├── Operadores
├── Tuplas
├── Arrays e Vec
└── Structs — Base

CONTEÚDO NOVO
├── Structs — Exemplos Práticos
├── Enums
├── Pattern Matching
├── Destructuring
├── HashMap
├── Módulos, Arquivos e Namespaces
├── Traits
├── Polimorfismo: impl Trait vs dyn Trait
├── Generics
├── Lifetimes e Dangling Pointers
├── Aplicação Console / CRUD em Memória
├── Tratamento de Erros
├── Macros
├── Programação Funcional
├── Concorrência e Paralelismo
├── Persistência de Dados
├── API REST com Rocket
└── App Web com Rocket

FERRAMENTAS
├── Cargo Watch e Formatação
├── Valgrind, perf e WSL
└── Crates, GitHub, crates.io e Namespacing
```

## Objetivo

Este repositório funciona como uma base de consulta e evolução contínua dos estudos em Rust. Novos conteúdos podem ser adicionados às partes de estudo e registrados no `manifest.json`, mantendo a interface navegável sem concentrar todo o material em um único arquivo gigantesco.
