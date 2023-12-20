import funcionarios from "../models/funcionario.js"

const cadastraFuncionario = async (req, res) => 
{
    
}


const getTodosFuncionarios = async (req, res) => {
    try {
        const Funcionarios = await funcionarios.find();
        res.status(200).json(Funcionarios);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao buscar funcionários', error: err });
    }
};


const loginFuncionario = async (req, res) => 
{
    const { nome, email, senha } = req.body;

    try {
        // Verifique se o funcionário existe
        const funcionario = await funcionarios.findOne({ nome, email, senha });
        if (!funcionario) {
            return res.status(400).json({ message: 'Funcionário não encontrado' });
        }

        /*// Verifique se a senha está correta
        const senhaCorreta = await funcionario.verificarSenha(senha);
        if (!senhaCorreta) {
            return res.status(400).json({ message: 'Senha incorreta' });
        }*/

        // Se tudo estiver correto, retorne uma mensagem de sucesso
        res.status(200).json({ message: 'Funcionário logado!' });
    } catch (err) {
        res.status(500).json({ message: 'Erro ao fazer login', error: err });
    }
};



export default { loginFuncionario, getTodosFuncionarios }