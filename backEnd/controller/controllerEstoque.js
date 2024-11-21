const { Estoque } = require("../model/associacao");

const cadastrarEstoque = async (req, res) => {
  const dados = req.body;
  try {
    await Estoque.create(dados, { raw: true });
    res.status(201).json({ message: "Cadastro concluído com sucesso" });
  } catch (err) {
    console.error("Erro ao criar Estoque", err);
    res.status(500).json({ message: "Erro ao criar Estoque" });
  }
};

const consultarEstoque = async (req, res) => {
  const dados = req.query;
  try {
    const pesq = await Estoque.findOne(
      { where: { codEstoque: dados.codEstoque } },
      { raw: true }
    );
    if (pesq === null) {
      console.log("Estoque não existente");
      res.status(404).json({ message: "Estoque não existente" });
    } else {
      res.status(200).json(pesq);
    }
  } catch (err) {
    console.error("Erro ao consultar Estoque", err);
    res.status(500).json({ message: "Erro ao consultar Estoque" });
  }
};

const listarEstoque = async (req, res) => {
  try {
    const pesq = await Estoque.findAll();
    res.status(200).json(pesq);
  } catch (err) {
    console.error("Erro ao listar Estoque", err);
    res.status(500).json({ message: "Erro ao listar Estoque" });
  }
};

const atualizarEstoque = async (req, res) => {
  const dados = req.body;
  try {
    const pesq = Estoque.findByPk(dados.id_Estoque);
    if (pesq === null) {
      console.log("Estoque não existente");
      res.status(404).json({ message: "Estoque não existente" });
    } else {
      await Estoque.update(dados, { where: { id_Estoque: dados.id_Estoque } });
      const pesq2 = await Estoque.findByPk(dados.id_Estoque);
      res.status(200).json(pesq2);
    }
  } catch (err) {
    console.error("Erro ao atualizar Estoque", err);
    res.status(500).json({ message: "Erro ao atualizar Estoque" });
  }
};

const apagarEstoque = async (req, res) => {
  const dados = req.params;
  try {
    const pesq = await Estoque.findByPk(dados.id);
    if (pesq === null) {
      console.log("Estoque não existente");
      res.status(404).json({ message: "Estoque não existente" });
    } else {
      await Estoque.destroy({ where: { codEstoque: pesq.codEstoque } });
      res.status(200).json({ message: "Usuário deletado com sucesso!" });
    }
  } catch (err) {
    console.error("Erro ao deletar Estoque", err);
    res.status(500).json({ message: "Erro ao deletar Estoque" });
  }
};

module.exports = { cadastrarEstoque, consultarEstoque, listarEstoque, apagarEstoque, atualizarEstoque };
