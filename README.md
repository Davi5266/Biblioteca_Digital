# Biblioteca_Digital

Trabalho de programação do 3 período- Profº Eduardo 

O objetivo do trabalho é apresentar os conhecimentos obtidos durante o primeiro bimestre de 2025, para a matéria de introdução ao html, css e javaScript 

### Node.js guia de intalação

node.js
```
https://nodejs.org/pt/download
```

### Após a instalação
usando cmd no diretório da biblioteca
```
npm install
node index.js
```

**caso dê algum erro tente rodar os comandos abaixo**
O verdaccio(http://localhost:4873) é um servidor local que armazena bibliotecas baixadas pelo usuário
```
npm install -g verdaccio
verdaccio

#depois abra outro cmd e execute no diretório da biblioteca

npm set registry http://localhost:4873
npm install
node index.js
```

Guia para adicionar arquivos html, css, js, e etc.
```
Biblioteca_Digital/
├── db/
├── model/
├── public/             # Pasta raiz reconhecida pelo servidor
│   ├── css/            # Arquivos css
│   ├── data/           # Arquivos Json
|   ├── img/            # Arquivos de Imagem
│   ├── js/             # Arquivos js
├── viwer/              # Arquivos html
|
├── index.js

```

Para utilizar os arquivos como js, css ou img, basta citar o diretório principal com o nome do arquivo.
**Não coloque o caminho completo para o arquivo, por que o servidor do nodejs reconhece o diretório public e seus subdiretórios.**

```
<link rel="stylesheet" href="/css/<'nome do arquivo css'>">
<a href="/livro"></a>       # Para acessar um arquivo html basta usar a referência do link da rota
<img href="/img/<'nome da imagem'>"></img>
```