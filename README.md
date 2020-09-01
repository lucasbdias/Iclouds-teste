<p align="center">
   <img src="src/assets/images/iclouds_logo.svg" width="250"/>
</p>

# Iclouds Teste Estágio

---

- [Descrição](#Descrição)
- [Tecnologias](#Tecnologias)
- [API Utilizada](#API-Utilizada)
- [🚀 Desafios](#🚀-Desafios)
- [💡 Melhorias](#💡-Melhorias)
- [📦 Arquitetura](#📦-Arquitetura)
- [👨🏽‍🍳 Instalação](#👨🏽‍🍳-Instalação)

# Descrição

App desenvolvido em ReactJS seguindo o layout proposto e preenchendo algumas informações de acordo com a API proposta. O objetivo desse teste é avaliar se estou apto a vaga de estágio, avaliando  minhas habilidades em:
- Organização e documentação do código;
- Facilidade de manutenção posterior;
- Domínio e performance na linguagem;
- Fidelidade ao design, quando se diz sobre o posicionamento dos elementos;
- Domínio de ReactJs
-  Domínio de CSS;
- Estrutura do projeto;

# Tecnologias

- Typescript
- React
- Styled Components
- Commitzen (Padronização de commits)

# API Utilizada

- Google Books API

    Api da Google para busca de livros.

# 🚀 Desafios

- Implementar uma estrutura respeitando os os patterns de services e repositories.
- Tive dificuldade para efetuar as tipagens com as interfaces e uma leve perda de desempenho, mas ao final, obtive um grande auxilio do typescript para passar propriedades para os Componentes.

# 💡 Melhorias

- Acredito que poderia melhorar as funções de manipulaçao de data, utilizando-se mais o date-fns.
- A responsividade pode ser aprimorada.
- Caso implementasse a funcionalidade de adicionar ao carrinho, optaria por utilizar Redux com a Arquitetura Flux.

# 📦 Arquitetura

```shell
src/
|-- assets/ # Contém os arquivos que agregam na interface da aplicação.
|-- components/ # Contém os components globais como Accordion e Header.
|-- config/ # Configurações de conexão a api e serviços externos.
|-- enums/ # Onde ficam todas as listas de constantes.
|-- interfaces/ # Onde são declarados os tipos de dados e funções.
|-- pages/ # Localiza as paginas da aplicação.
|-- repositories/ # Onde é feito a ponte entre a aplicação e a fonte de dados.
|-- routes/ # Todas as rotas da aplicação.
|-- services/ # Onde estão regras de negócio.
|-- styles/ # Diretório dos estilos globais.
|-- utils/ # Onde é abstraido lógicas reutilizaveis.
```

# 👨🏽‍🍳 Instalação

**Você vai necessitar instalar o [Node.js](https://nodejs.org/en/download/) e [Yarn](https://yarnpkg.com/), então clone o repo, utilizando este comando:**

`git clone git@github.com:lucasbdias/Iclouds-teste.git`

**Instale as dependências do projeto:**

`npm install`

ou

`yarn`

Para rodar o projeto em ambiente de desenvolvimento, utilize o comando:

`npm run dev`

ou

`yarn dev`

---

Contato: lucasbrzdias@gmail.com