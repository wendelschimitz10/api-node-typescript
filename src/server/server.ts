// CÓDIGO BASE DO EXPRESS
// API REST CONSEGUE DISPONIBILIZAR CHAMADAS PARA ELA (ENDPOINTS) ATRAVÉS DO GET, POST, PUT E DELETE
import express from "express";
import "dotenv/config";
// CRIANDO INSTANCIA
import { router } from "./routes";

const server = express();

// IRÁ TRAZER OS DADOS EM JSON
server.use(express.json());

// O SERVIDOR IRÁ UTILIZAR AS ROTAS QUE ESTÃO NO ROUTER
server.use(router);

export { server };
