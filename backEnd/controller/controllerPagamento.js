const { Pagamento } = require("../model/associacao");

const cadastrarPagamento = async (req, res) => {
  const dados = req.body;
  try {
    await Pagamento.create(dados, { raw: true });
    res.status(201).json({ message: "Cadastro concluído com sucesso" });
  } catch (err) {
    console.error("Erro ao criar Pagamento", err);
    res.status(500).json({ message: "Erro ao criar Pagamento" });
  }
};

const consultarPagamento = async (req, res) => {
  const dados = req.query;
  try {
    const pesq = await Pagamento.findOne(
      { where: { codPagamento: dados.codPagamento } },
      { raw: true }
    );
    if (pesq === null) {
      console.log("Pagamento não existente");
      res.status(404).json({ message: "Pagamento não existente" });
    } else {
      res.status(200).json(pesq);
    }
  } catch (err) {
    console.error("Erro ao consultar Pagamento", err);
    res.status(500).json({ message: "Erro ao consultar Pagamento" });
  }
};

const listarPagamento = async (req, res) => {
  try {
    const pesq = await Pagamento.findAll();
    res.status(200).json(pesq);
  } catch (err) {
    console.error("Erro ao listar Pagamento", err);
    res.status(500).json({ message: "Erro ao listar Pagamento" });
  }
};

const atualizarPagamento = async (req, res) => {
  const dados = req.body;
  try {
    const pesq = Pagamento.findByPk(dados.id_Pagamento);
    if (pesq === null) {
      console.log("Pagamento não existente");
      res.status(404).json({ message: "Pagamento não existente" });
    } else {
      await Pagamento.update(dados, { where: { id_Pagamento: dados.id_Pagamento } });
      const pesq2 = await Pagamento.findByPk(dados.id_Pagamento);
      res.status(200).json(pesq2);
    }
  } catch (err) {
    console.error("Erro ao atualizar Pagamento", err);
    res.status(500).json({ message: "Erro ao atualizar Pagamento" });
  }
};

const apagarPagamento = async (req, res) => {
  const dados = req.params;
  try {
    const pesq = await Pagamento.findByPk(dados.id);
    if (pesq === null) {
      console.log("Pagamento não existente");
      res.status(404).json({ message: "Pagamento não existente" });
    } else {
      await Pagamento.destroy({ where: { codPagamento: pesq.codPagamento } });
      res.status(200).json({ message: "Usuário deletado com sucesso!" });
    }
  } catch (err) {
    console.error("Erro ao deletar Pagamento", err);
    res.status(500).json({ message: "Erro ao deletar Pagamento" });
  }
};

module.exports = { cadastrarPagamento, consultarPagamento, listarPagamento, apagarPagamento, atualizarPagamento };
