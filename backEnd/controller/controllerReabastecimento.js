const { Reabastecimento } = require("../model/associacao");

const cadastrarReabastecimento = async (req, res) => {
  const dados = req.body;
  try {
    await Reabastecimento.create(dados, { raw: true });
    res.status(201).json({ message: "Cadastro concluído com sucesso" });
  } catch (err) {
    console.error("Erro ao criar Reabastecimento", err);
    res.status(500).json({ message: "Erro ao criar Reabastecimento" });
  }
};

const consultarReabastecimento = async (req, res) => {
  const dados = req.query;
  try {
    const pesq = await Reabastecimento.findOne(
      { where: { codReabastecimento: dados.codReabastecimento } },
      { raw: true }
    );
    if (pesq === null) {
      console.log("Reabastecimento não existente");
      res.status(404).json({ message: "Reabastecimento não existente" });
    } else {
      res.status(200).json(pesq);
    }
  } catch (err) {
    console.error("Erro ao consultar Reabastecimento", err);
    res.status(500).json({ message: "Erro ao consultar Reabastecimento" });
  }
};

const listarReabastecimento = async (req, res) => {
  try {
    const pesq = await Reabastecimento.findAll();
    res.status(200).json(pesq);
  } catch (err) {
    console.error("Erro ao listar Reabastecimento", err);
    res.status(500).json({ message: "Erro ao listar Reabastecimento" });
  }
};

const atualizarReabastecimento = async (req, res) => {
  const dados = req.body;
  try {
    const pesq = Reabastecimento.findByPk(dados.id_Reabastecimento);
    if (pesq === null) {
      console.log("Reabastecimento não existente");
      res.status(404).json({ message: "Reabastecimento não existente" });
    } else {
      await Reabastecimento.update(dados, { where: { id_Reabastecimento: dados.id_Reabastecimento } });
      const pesq2 = await Reabastecimento.findByPk(dados.id_Reabastecimento);
      res.status(200).json(pesq2);
    }
  } catch (err) {
    console.error("Erro ao atualizar Reabastecimento", err);
    res.status(500).json({ message: "Erro ao atualizar Reabastecimento" });
  }
};

const apagarReabastecimento = async (req, res) => {
  const dados = req.params;
  try {
    const pesq = await Reabastecimento.findByPk(dados.id);
    if (pesq === null) {
      console.log("Reabastecimento não existente");
      res.status(404).json({ message: "Reabastecimento não existente" });
    } else {
      await Reabastecimento.destroy({ where: { codReabastecimento: pesq.codReabastecimento } });
      res.status(200).json({ message: "Usuário deletado com sucesso!" });
    }
  } catch (err) {
    console.error("Erro ao deletar Reabastecimento", err);
    res.status(500).json({ message: "Erro ao deletar Reabastecimento" });
  }
};

module.exports = { cadastrarReabastecimento, consultarReabastecimento, listarReabastecimento, apagarReabastecimento, atualizarReabastecimento };
