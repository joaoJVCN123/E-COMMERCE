const { ItemPedido } = require("../model/associacao");

const cadastrarItemPedido = async (req, res) => {
  const dados = req.body;
  try {
    await ItemPedido.create(dados, { raw: true });
    res.status(201).json({ message: "Cadastro concluído com sucesso" });
  } catch (err) {
    console.error("Erro ao criar ItemPedido", err);
    res.status(500).json({ message: "Erro ao criar ItemPedido" });
  }
};

const consultarItemPedido = async (req, res) => {
  const dados = req.query;
  try {
    const pesq = await ItemPedido.findOne(
      { where: { codItemPedido: dados.codItemPedido } },
      { raw: true }
    );
    if (pesq === null) {
      console.log("ItemPedido não existente");
      res.status(404).json({ message: "ItemPedido não existente" });
    } else {
      res.status(200).json(pesq);
    }
  } catch (err) {
    console.error("Erro ao consultar ItemPedido", err);
    res.status(500).json({ message: "Erro ao consultar ItemPedido" });
  }
};

const listarItemPedido = async (req, res) => {
  try {
    const pesq = await ItemPedido.findAll();
    res.status(200).json(pesq);
  } catch (err) {
    console.error("Erro ao listar ItemPedido", err);
    res.status(500).json({ message: "Erro ao listar ItemPedido" });
  }
};

const atualizarItemPedido = async (req, res) => {
  const dados = req.body;
  try {
    const pesq = ItemPedido.findByPk(dados.id_ItemPedido);
    if (pesq === null) {
      console.log("ItemPedido não existente");
      res.status(404).json({ message: "ItemPedido não existente" });
    } else {
      await ItemPedido.update(dados, { where: { id_ItemPedido: dados.id_ItemPedido } });
      const pesq2 = await ItemPedido.findByPk(dados.id_ItemPedido);
      res.status(200).json(pesq2);
    }
  } catch (err) {
    console.error("Erro ao atualizar ItemPedido", err);
    res.status(500).json({ message: "Erro ao atualizar ItemPedido" });
  }
};

const apagarItemPedido = async (req, res) => {
  const dados = req.params;
  try {
    const pesq = await ItemPedido.findByPk(dados.id);
    if (pesq === null) {
      console.log("ItemPedido não existente");
      res.status(404).json({ message: "ItemPedido não existente" });
    } else {
      await ItemPedido.destroy({ where: { codItemPedido: pesq.codItemPedido } });
      res.status(200).json({ message: "Usuário deletado com sucesso!" });
    }
  } catch (err) {
    console.error("Erro ao deletar ItemPedido", err);
    res.status(500).json({ message: "Erro ao deletar ItemPedido" });
  }
};

module.exports = { cadastrarItemPedido, consultarItemPedido, listarItemPedido, apagarItemPedido, atualizarItemPedido };
