import express from "express";
import funcionariosController from "../controllers/funcionariosController.js";

const router = express.Router();

router 
    .get("/funcionarios", funcionariosController.getTodosFuncionarios)
    .post("/login", funcionariosController.loginFuncionario)



export default router;