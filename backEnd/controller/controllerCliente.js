const { Cliente } = require("../model/associacao");

const cadastrarCliente = async (req, res) => {
  const dados = req.body;
  try {
    await Cliente.create(dados, { raw: true });
    res.status(201).json({ message: "Cadastro concluído com sucesso" });
  } catch (err) {
    console.error("Erro ao criar Cliente", err);
    res.status(500).json({ message: "Erro ao criar Cliente" });
  }
};

const consultarCliente = async (req, res) => {
  const dados = req.query;
  try {
    const pesq = await Cliente.findOne(
      { where: { codCliente: dados.codCliente } },
      { raw: true }
    );
    if (pesq === null) {
      console.log("Cliente não existente");
      res.status(404).json({ message: "Cliente não existente" });
    } else {
      res.status(200).json(pesq);
    }
  } catch (err) {
    console.error("Erro ao consultar Cliente", err);
    res.status(500).json({ message: "Erro ao consultar Cliente" });
  }
};

const listarCliente = async (req, res) => {
  try {
    const pesq = await Cliente.findAll();
    res.status(200).json(pesq);
  } catch (err) {
    console.error("Erro ao listar Cliente", err);
    res.status(500).json({ message: "Erro ao listar Cliente" });
  }
};

const atualizarCliente = async (req, res) => {
  const dados = req.body;
  try {
    const pesq = Cliente.findByPk(dados.id_Cliente);
    if (pesq === null) {
      console.log("Cliente não existente");
      res.status(404).json({ message: "Cliente não existente" });
    } else {
      await Cliente.update(dados, { where: { id_Cliente: dados.id_Cliente } });
      const pesq2 = await Cliente.findByPk(dados.id_Cliente);
      res.status(200).json(pesq2);
    }
  } catch (err) {
    console.error("Erro ao atualizar Cliente", err);
    res.status(500).json({ message: "Erro ao atualizar Cliente" });
  }
};

const apagarCliente = async (req, res) => {
  const dados = req.params;
  try {
    const pesq = await Cliente.findByPk(dados.id);
    if (pesq === null) {
      console.log("Cliente não existente");
      res.status(404).json({ message: "Cliente não existente" });
    } else {
      await Cliente.destroy({ where: { codCliente: pesq.codCliente } });
      res.status(200).json({ message: "Usuário deletado com sucesso!" });
    }
  } catch (err) {
    console.error("Erro ao deletar Cliente", err);
    res.status(500).json({ message: "Erro ao deletar Cliente" });
  }
};

module.exports = { cadastrarCliente, consultarCliente, listarCliente, apagarCliente, atualizarCliente };
