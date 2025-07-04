function bookId(id){
  fetch(`/page/${id}`);
}

async function allBooks() {
  try{
    const resposta = await fetch('/teste/all');
    if(!resposta.ok) throw new Error("Erro ao buscar dados da API")
    const livro = await resposta.json()
    // console.log(livro.books)
    let slaLivros = livro.books

    let container_livro = document.getElementById('book');
    // container_livro.className = 'div_book';
    for(const testelivro of slaLivros){
      const div_livro = document.createElement("div");

      div_livro.innerHTML = `
        <img src="${testelivro.images}" alt="${testelivro.title}">
        <p><a href="/page/${testelivro.id}">${testelivro.title}</a></p>
        `;
      container_livro.appendChild(div_livro);
    }

  } catch (error){
    console.log(error)
    document.getElementById('book').innerHTML = '<p>Erro ao carregar dados de livros</p>'
  }
}

// Carrega a função allBooks quando todo o conteúdo estiver pronto
window.addEventListener('DOMContentLoaded', allBooks())