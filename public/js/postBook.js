document.getElementById('meuFormulario').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio tradicional do formulário

  const title = document.getElementById('title').value;
  const autor = document.getElementById('autor').value;
  const dtpubli = document.getElementById('dtpubli').value;
  const idioma = document.getElementById('idioma').value;
  const genero = document.getElementById('genero').value;
  const desc = document.getElementById('desc').value;
  const images = document.getElementById('images').value;
    // const title = await req.body.title;
    // const autor = await req.body.autor;
    // const dtpubli = await req.body.dtpubli;
    // const idioma = await req.body.idioma;
    // const genero = await req.body.genero;
    // const desc = await req.body.desc;
    // const images = await req.body.images;
  // Dados que serão enviados
  const dados = {
    title: title,
    autor: autor,
    dtpubli: dtpubli,
    idioma: idioma,
    genero: genero,
    desc: desc,
    images: images
  };

  fetch('/book/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dados)
  })
  .then(response => {
    if (!response.ok) throw new Error('Erro ao enviar os dados');
    return response.json();
  })
  .then(data => {
    console.log('Resposta da API:', data);
    alert('Dados enviados com sucesso!');
  })
  .catch(error => {
    console.error('Erro:', error);
    alert('Falha ao enviar os dados.');
  });
});
