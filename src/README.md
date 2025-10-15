# Pokédex Angular

Aplicação Angular para consumir a API do Pokédex e exibir informações dos Pokémon.

## Funcionalidades

- Lista os primeiros 20 Pokémon da API
- Exibe informações detalhadas de cada Pokémon
- Mostra imagem, nome, ID, tipos, altura, peso e experiência base
- Interface responsiva e moderna
- Tratamento de erros e estados de carregamento

## Tecnologias Utilizadas

- Angular 17
- TypeScript
- RxJS
- HttpClient
- Signals (Angular 16+)
- Standalone Components

## Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   └── pokemon-list/
│   │       ├── pokemon-list.component.ts
│   │       ├── pokemon-list.component.html
│   │       └── pokemon-list.component.css
│   ├── models/
│   │   └── pokemon.model.ts
│   ├── services/
│   │   └── pokemon.service.ts
│   ├── app.config.ts
│   ├── app.routes.ts
│   ├── app.ts
│   ├── app.html
│   └── app.css
├── index.html
├── main.ts
└── styles.css
```

## Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm start
```

3. Abra o navegador em `http://localhost:4200`

### Comandos Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run watch` - Compila e observa mudanças
- `npm test` - Executa os testes

## API Utilizada

A aplicação consome a [PokéAPI](https://pokeapi.co/), uma API REST gratuita que fornece dados detalhados sobre Pokémon.

### Endpoints utilizados:
- `GET https://pokeapi.co/api/v2/pokemon` - Lista de Pokémon
- `GET https://pokeapi.co/api/v2/pokemon/{id}` - Detalhes de um Pokémon específico

## Funcionamento

1. **PokemonService**: Gerencia as requisições HTTP para a API
2. **PokemonListComponent**: Exibe a lista de Pokémon com suas informações
3. **Signals**: Gerenciam o estado reativo da aplicação
4. **Standalone Components**: Componentes independentes sem necessidade de módulos

## Características Técnicas

- **Signals**: Sistema reativo moderno do Angular para gerenciamento de estado
- **Standalone Components**: Componentes independentes que não precisam de NgModule
- **HttpClient**: Cliente HTTP nativo do Angular para requisições
- **RxJS**: Biblioteca para programação reativa com Observables
- **TypeScript**: Tipagem estática para maior segurança no código
