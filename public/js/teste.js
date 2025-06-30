
        async function allBooks() {
          try{
            const resposta = await fetch('/teste/all');
            if(!resposta.ok) throw new Error("Erro ao buscar dados da API")

            const livro = resposta.json()
            console.log(livro.books)
            console.log(livro.name)

            document.getElementById('livro').innerHTML = `<p>${livro}</p>`;
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