const { Produto } = require("../model/associacao");

const cadastrarProduto = async (req, res) => {
  const dados = req.body;
  try {
    await Produto.create(dados, { raw: true });
    res.status(201).json({ message: "Cadastro concluído com sucesso" });
  } catch (err) {
    console.error("Erro ao criar Produto", err);
    res.status(500).json({ message: "Erro ao criar Produto" });
  }
};

const consultarProduto = async (req, res) => {
  const dados = req.query;
  try {
    const pesq = await Produto.findOne(
      { where: { codProduto: dados.codProduto } },
      { raw: true }
    );
    if (pesq === null) {
      console.log("Produto não existente");
      res.status(404).json({ message: "Produto não existente" });
    } else {
      res.status(200).json(pesq);
    }
  } catch (err) {
    console.error("Erro ao consultar Produto", err);
    res.status(500).json({ message: "Erro ao consultar Produto" });
  }
};

const listarProduto = async (req, res) => {
  try {
    const pesq = await Produto.findAll();
    res.status(200).json(pesq);
  } catch (err) {
    console.error("Erro ao listar Produto", err);
    res.status(500).json({ message: "Erro ao listar Produto" });
  }
};

const atualizarProduto = async (req, res) => {
  const dados = req.body;
  try {
    const pesq = Produto.findByPk(dados.id_Produto);
    if (pesq === null) {
      console.log("Produto não existente");
      res.status(404).json({ message: "Produto não existente" });
    } else {
      await Produto.update(dados, { where: { id_Produto: dados.id_Produto } });
      const pesq2 = await Produto.findByPk(dados.id_Produto);
      res.status(200).json(pesq2);
    }
  } catch (err) {
    console.error("Erro ao atualizar Produto", err);
    res.status(500).json({ message: "Erro ao atualizar Produto" });
  }
};

const apagarProduto = async (req, res) => {
  const dados = req.params;
  try {
    const pesq = await Produto.findByPk(dados.id);
    if (pesq === null) {
      console.log("Produto não existente");
      res.status(404).json({ message: "Produto não existente" });
    } else {
      await Produto.destroy({ where: { codProduto: pesq.codProduto } });
      res.status(200).json({ message: "Usuário deletado com sucesso!" });
    }
  } catch (err) {
    console.error("Erro ao deletar Produto", err);
    res.status(500).json({ message: "Erro ao deletar Produto" });
  }
};

module.exports = { cadastrarProduto, consultarProduto, listarProduto, apagarProduto, atualizarProduto };
