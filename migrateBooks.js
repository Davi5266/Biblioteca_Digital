const fs = require('fs');
const path = require('path');
const sequelize = require('./db/conn');
const Book = require('./model/Book');

// Função para limpar HTML tags dos campos
function cleanHtmlTags(text) {
    if (!text) return '';
    return text.replace(/<[^>]*>/g, '').trim();
}

// Função para processar as imagens
function processImages(images) {
    if (!images || !Array.isArray(images)) return '';
    
    // Converte array de imagens para string separada por vírgula
    // Remove o prefixo "./src/img/" e adiciona "/img/"
    return images.map(img => {
        let processedImg = img.replace('./src/img/', '/img/');
        // Se não começou com /img/, adiciona
        if (!processedImg.startsWith('/img/')) {
            processedImg = '/img/' + processedImg;
        }
        return processedImg;
    }).join(',');
}

// Função para migrar os livros
async function migrateBooks() {
    try {
        console.log('🔄 Iniciando migração dos livros...');
        
        // Sincroniza o modelo com o banco
        await sequelize.sync({ force: false });
        console.log('✅ Banco de dados sincronizado');
        
        // Lê o arquivo JSON
        const jsonPath = path.join(__dirname, 'public', 'data', 'books.json');
        const booksData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
        
        console.log(`📚 Encontrados ${Object.keys(booksData).length} livros para migrar`);
        
        let successCount = 0;
        let errorCount = 0;
        
        // Itera sobre cada livro
        for (const [bookId, bookInfo] of Object.entries(booksData)) {
            try {
                // Verifica se o livro já existe
                const existingBook = await Book.findOne({
                    where: { title: cleanHtmlTags(bookInfo.title) }
                });
                
                if (existingBook) {
                    console.log(`⚠️  Livro "${cleanHtmlTags(bookInfo.title)}" já existe, pulando...`);
                    continue;
                }
                
                // Prepara os dados do livro
                const bookData = {
                    title: cleanHtmlTags(bookInfo.title),
                    autor: cleanHtmlTags(bookInfo.autor),
                    dtpubli: cleanHtmlTags(bookInfo.dtpubli),
                    idioma: cleanHtmlTags(bookInfo.idioma),
                    genero: cleanHtmlTags(bookInfo.genero),
                    desc: cleanHtmlTags(bookInfo.desc),
                    images: processImages(bookInfo.images)
                };
                
                // Cria o livro no banco
                await Book.create(bookData);
                
                console.log(`✅ Livro "${bookData.title}" migrado com sucesso`);
                successCount++;
                
            } catch (error) {
                console.error(`❌ Erro ao migrar livro "${bookInfo.title}":`, error.message);
                errorCount++;
            }
        }
        
        console.log('\n📊 Resumo da migração:');
        console.log(`✅ Livros migrados com sucesso: ${successCount}`);
        console.log(`❌ Erros: ${errorCount}`);
        console.log(`📚 Total processado: ${Object.keys(booksData).length}`);
        
        if (errorCount === 0) {
            console.log('\n🎉 Migração concluída com sucesso!');
        } else {
            console.log('\n⚠️  Migração concluída com alguns erros. Verifique os logs acima.');
        }
        
    } catch (error) {
        console.error('💥 Erro durante a migração:', error);
    } finally {
        // Fecha a conexão com o banco
        await sequelize.close();
        console.log('🔌 Conexão com o banco fechada');
    }
}

// Executa a migração
migrateBooks(); 