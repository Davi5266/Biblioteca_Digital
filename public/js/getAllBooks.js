// Função para processar e obter a primeira imagem
function getFirstImage(imagesData) {
    // Se não há dados de imagem
    if (!imagesData) {
        return '/img/icons/erro.png';
    }
    
    let imagePath = '';
    
    // Se for uma string (pode conter múltiplas imagens separadas por vírgula)
    if (typeof imagesData === 'string') {
        if (imagesData.includes(',')) {
            // Múltiplas imagens separadas por vírgula
            const images = imagesData.split(',').map(img => img.trim());
            imagePath = images[0];
        } else {
            // Uma única imagem
            imagePath = imagesData.trim();
        }
    }
    // Se for um array
    else if (Array.isArray(imagesData)) {
        imagePath = imagesData[0] || '';
    }
    // Se for um objeto ou outro tipo
    else {
        imagePath = String(imagesData);
    }
    
    // Se ainda não temos um caminho válido
    if (!imagePath) {
        return '/img/icons/erro.png';
    }
    
    // Corrige o caminho para /img/
    if (imagePath.startsWith('./src/img/')) {
        return imagePath.replace('./src/img/', '/img/');
    } else if (imagePath.startsWith('/img/')) {
        return imagePath;
    } else if (imagePath.startsWith('src/img/')) {
        return '/' + imagePath;
    } else if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
        // Se for uma URL completa, mantém como está
        return imagePath;
    } else {
        // Adiciona o prefixo /img/ se não tiver
        return '/img/' + imagePath;
    }
}

function bookId(id){
  fetch(`/page/${id}`);
}

async function allBooks() {
  try{
    const resposta = await fetch('/teste/all');
    if(!resposta.ok) throw new Error("Erro ao buscar dados da API")
    const livro = await resposta.json()
    
    let slaLivros = livro.books
    let container_livro = document.getElementById('book');
    
    // Limpa o container antes de adicionar os livros
    container_livro.innerHTML = '';
    
    for(const testelivro of slaLivros){
      const div_livro = document.createElement("div");
      
      // Processa a primeira imagem
      const firstImage = getFirstImage(testelivro.images);
      
      div_livro.innerHTML = `
        <img src="${firstImage}" alt="${testelivro.title}" 
             onerror="this.src='/img/icons/erro.png'">
        <p><a href="/page/${testelivro.id}">${testelivro.title}</a></p>
        `;
      
      // Adiciona classe para estilização
      div_livro.className = 'book-card';
      
      container_livro.appendChild(div_livro);
    }

  } catch (error){
    console.error('Erro ao carregar livros:', error);
    document.getElementById('book').innerHTML = `
      <div class="error-message">
        <p>Erro ao carregar dados de livros</p>
        <button onclick="allBooks()">Tentar novamente</button>
      </div>
    `;
  }
}

// Carrega a função allBooks quando todo o conteúdo estiver pronto
window.addEventListener('DOMContentLoaded', allBooks);