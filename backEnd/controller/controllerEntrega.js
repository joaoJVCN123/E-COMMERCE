const { Entrega } = require("../model/associacao");

const cadastrarEntrega = async (req, res) => {
  const dados = req.body;
  try {
    await Entrega.create(dados, { raw: true });
    res.status(201).json({ message: "Cadastro concluído com sucesso" });
  } catch (err) {
    console.error("Erro ao criar Entrega", err);
    res.status(500).json({ message: "Erro ao criar Entrega" });
  }
};

const consultarEntrega = async (req, res) => {
  const dados = req.query;
  try {
    const pesq = await Entrega.findOne(
      { where: { codEntrega: dados.codEntrega } },
      { raw: true }
    );
    if (pesq === null) {
      console.log("Entrega não existente");
      res.status(404).json({ message: "Entrega não existente" });
    } else {
      res.status(200).json(pesq);
    }
  } catch (err) {
    console.error("Erro ao consultar Entrega", err);
    res.status(500).json({ message: "Erro ao consultar Entrega" });
  }
};

const listarEntrega = async (req, res) => {
  try {
    const pesq = await Entrega.findAll();
    res.status(200).json(pesq);
  } catch (err) {
    console.error("Erro ao listar Entrega", err);
    res.status(500).json({ message: "Erro ao listar Entrega" });
  }
};

const atualizarEntrega = async (req, res) => {
  const dados = req.body;
  try {
    const pesq = Entrega.findByPk(dados.id_Entrega);
    if (pesq === null) {
      console.log("Entrega não existente");
      res.status(404).json({ message: "Entrega não existente" });
    } else {
      await Entrega.update(dados, { where: { id_Entrega: dados.id_Entrega } });
      const pesq2 = await Entrega.findByPk(dados.id_Entrega);
      res.status(200).json(pesq2);
    }
  } catch (err) {
    console.error("Erro ao atualizar Entrega", err);
    res.status(500).json({ message: "Erro ao atualizar Entrega" });
  }
};

const apagarEntrega = async (req, res) => {
  const dados = req.params;
  try {
    const pesq = await Entrega.findByPk(dados.id);
    if (pesq === null) {
      console.log("Entrega não existente");
      res.status(404).json({ message: "Entrega não existente" });
    } else {
      await Entrega.destroy({ where: { codEntrega: pesq.codEntrega } });
      res.status(200).json({ message: "Usuário deletado com sucesso!" });
    }
  } catch (err) {
    console.error("Erro ao deletar Entrega", err);
    res.status(500).json({ message: "Erro ao deletar Entrega" });
  }
};

module.exports = { cadastrarEntrega, consultarEntrega, listarEntrega, apagarEntrega, atualizarEntrega };
