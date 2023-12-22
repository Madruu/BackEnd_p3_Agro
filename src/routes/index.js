import express from 'express';
import funcionarios from "./funcionariosRoutes.js";

const routes = (server) => 
{
    server.route('/').get((req, res) => 
    {
        res.status(200).send({titulo: 'login funcionarios'})
    })

    server.use(express.json());
    server.use(funcionarios);
}
    
export default routes;