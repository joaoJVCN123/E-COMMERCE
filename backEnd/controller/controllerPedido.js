const { Pedido } = require("../model/associacao");

const cadastrarPedido = async (req, res) => {
  const dados = req.body;
  try {
    await Pedido.create(dados, { raw: true });
    res.status(201).json({ message: "Cadastro concluído com sucesso" });
  } catch (err) {
    console.error("Erro ao criar Pedido", err);
    res.status(500).json({ message: "Erro ao criar Pedido" });
  }
};

const consultarPedido = async (req, res) => {
  const dados = req.query;
  try {
    const pesq = await Pedido.findOne(
      { where: { codPedido: dados.codPedido } },
      { raw: true }
    );
    if (pesq === null) {
      console.log("Pedido não existente");
      res.status(404).json({ message: "Pedido não existente" });
    } else {
      res.status(200).json(pesq);
    }
  } catch (err) {
    console.error("Erro ao consultar Pedido", err);
    res.status(500).json({ message: "Erro ao consultar Pedido" });
  }
};

const listarPedido = async (req, res) => {
  try {
    const pesq = await Pedido.findAll();
    res.status(200).json(pesq);
  } catch (err) {
    console.error("Erro ao listar Pedido", err);
    res.status(500).json({ message: "Erro ao listar Pedido" });
  }
};

const atualizarPedido = async (req, res) => {
  const dados = req.body;
  try {
    const pesq = Pedido.findByPk(dados.id_Pedido);
    if (pesq === null) {
      console.log("Pedido não existente");
      res.status(404).json({ message: "Pedido não existente" });
    } else {
      await Pedido.update(dados, { where: { id_Pedido: dados.id_Pedido } });
      const pesq2 = await Pedido.findByPk(dados.id_Pedido);
      res.status(200).json(pesq2);
    }
  } catch (err) {
    console.error("Erro ao atualizar Pedido", err);
    res.status(500).json({ message: "Erro ao atualizar Pedido" });
  }
};

const apagarPedido = async (req, res) => {
  const dados = req.params;
  try {
    const pesq = await Pedido.findByPk(dados.id);
    if (pesq === null) {
      console.log("Pedido não existente");
      res.status(404).json({ message: "Pedido não existente" });
    } else {
      await Pedido.destroy({ where: { codPedido: pesq.codPedido } });
      res.status(200).json({ message: "Usuário deletado com sucesso!" });
    }
  } catch (err) {
    console.error("Erro ao deletar Pedido", err);
    res.status(500).json({ message: "Erro ao deletar Pedido" });
  }
};

module.exports = { cadastrarPedido, consultarPedido, listarPedido, apagarPedido, atualizarPedido };
