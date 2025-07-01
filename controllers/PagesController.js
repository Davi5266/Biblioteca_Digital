const path = require('path');

module.exports = class PagesController{
    static async recomendados(req, res) {
        res.sendFile(path.join(__dirname,'..', 'viwer', 'recomendados.html'));
    }
    static async sobre(req,res){
        res.sendFile(path.join(__dirname,'..', 'viwer', 'sobre.html'));
    }
}