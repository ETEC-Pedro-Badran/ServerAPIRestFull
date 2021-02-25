module.exports = function(application) {
    application.get('/',(req, res)=>{
        application.controllers.index.listar(req, res);
    });
/*    application.get('/:id',(req, res)=>{
        application.controllers.index.get(req, res);
    });
    application.post('/',(req, res)=>{
        application.controllers.index.atualizar(req, res);
    });
    application.put('/',(req, res)=>{
        application.controllers.index.inserir(req, res);
    });
    application.delete('/',(req, res)=>{
        application.controllers.index.excluir(req, res);
    });
    */
}
 