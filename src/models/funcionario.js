import mongoose from "mongoose"

const funcionarioSchema = new mongoose.Schema(
    {
        id: {type: Number, required: false},
        nome: {type: String, required: true},
        email: {type: String, required: true},
        senha: {type: String, required: true}
    }
);

const funcionarios = mongoose.model('funcionarios', funcionarioSchema);

export default funcionarios;    