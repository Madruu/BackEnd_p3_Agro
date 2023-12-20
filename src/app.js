import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"
import dotenv from "dotenv"


const app = express();
dotenv.config();
app.use(express.json());
//console.log(process.env.MONGO_URL)

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('conexão com o banco feita com sucesso');
})

routes(app);

export default app;