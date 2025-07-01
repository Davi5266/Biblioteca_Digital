
        async function allBooks() {
          try{
            const resposta = await fetch('/teste/all');
            if(!resposta.ok) throw new Error("Erro ao buscar dados da API")

            const livro = await resposta.json()
            console.log(livro.books)
            let slaLivros = livro.books
            // console.log(slaLivros)
            let container_livro = document.getElementById('livro');
            container_livro.className = 'div_book';
            for(const testelivro of slaLivros){
              const div_livro = document.createElement("div");
              // document.getElementById('livro').innerHTML = `<p>${testelivro.name}</p>`;
              // console.log(testelivro.name)
              // console.log(testelivro.id)    
              
              div_livro.className = "div_livro";
              div_livro.innerHTML = `
                <h3>${testelivro.title}</h3>
                <img src="${testelivro.images}" alt="${testelivro.title}">
                `;

              container_livro.appendChild(div_livro);
            }

            // document.getElementById('livro').innerHTML = `<p>${livro}</p>`;
          } catch (error){
            console.log(error)
            document.getElementById('livro').innerHTML = '<p>Erro ao carregar dados de livros</p>'
          }
        }


        function requisicao(){
            var xhr = new XMLHttpRequest();

            // Definindo a URL da API
            // var url = 'https://jsonplaceholder.typicode.com/users';
            var url = '/rotateste2'    
            // Configurando o método e a URL
            xhr.open('GET', url, true);

            // Enviando a requisição
            xhr.send();

            // Esperando a resposta
            xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) { // Requisição concluída
                if (xhr.status === 200) {
                //   Convertendo JSON em objeto JS
                  var resposta = JSON.parse(xhr.responseText);
                  console.log(usuarios)
                
                //   Inserindo os dados no HTML
                  var teste_OK = document.getElementById('okteste');

                //   usuarios.forEach(function(usuario) {
                    // var item = document.createElement('li');
                    // item.textContent = usuario.name + ' - ' + usuario.email;
                    // lista.appendChild(item);
                //   });
                } else {
                  console.error('Erro na requisição:', xhr.status);
                }
              }
            };
        }
        // Criando o objeto XMLHttpRequest

        // Carrega a função allBooks quando todo o conteúdo estiver pronto
        window.addEventListener('DOMContentLoaded', allBooks())