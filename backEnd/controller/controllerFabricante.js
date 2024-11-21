const { Fabricante } = require("../model/associacao");

const cadastrarFabricante = async (req, res) => {
  const dados = req.body;
  try {
    await Fabricante.create(dados, { raw: true });
    res.status(201).json({ message: "Cadastro concluído com sucesso" });
  } catch (err) {
    console.error("Erro ao criar Fabricante", err);
    res.status(500).json({ message: "Erro ao criar Fabricante" });
  }
};

const consultarFabricante = async (req, res) => {
  const dados = req.query;
  try {
    const pesq = await Fabricante.findOne(
      { where: { codFabricante: dados.codFabricante } },
      { raw: true }
    );
    if (pesq === null) {
      console.log("Fabricante não existente");
      res.status(404).json({ message: "Fabricante não existente" });
    } else {
      res.status(200).json(pesq);
    }
  } catch (err) {
    console.error("Erro ao consultar Fabricante", err);
    res.status(500).json({ message: "Erro ao consultar Fabricante" });
  }
};

const listarFabricante = async (req, res) => {
  try {
    const pesq = await Fabricante.findAll();
    res.status(200).json(pesq);
  } catch (err) {
    console.error("Erro ao listar Fabricante", err);
    res.status(500).json({ message: "Erro ao listar Fabricante" });
  }
};

const atualizarFabricante = async (req, res) => {
  const dados = req.body;
  try {
    const pesq = Fabricante.findByPk(dados.id_Fabricante);
    if (pesq === null) {
      console.log("Fabricante não existente");
      res.status(404).json({ message: "Fabricante não existente" });
    } else {
      await Fabricante.update(dados, { where: { id_Fabricante: dados.id_Fabricante } });
      const pesq2 = await Fabricante.findByPk(dados.id_Fabricante);
      res.status(200).json(pesq2);
    }
  } catch (err) {
    console.error("Erro ao atualizar Fabricante", err);
    res.status(500).json({ message: "Erro ao atualizar Fabricante" });
  }
};

const apagarFabricante = async (req, res) => {
  const dados = req.params;
  try {
    const pesq = await Fabricante.findByPk(dados.id);
    if (pesq === null) {
      console.log("Fabricante não existente");
      res.status(404).json({ message: "Fabricante não existente" });
    } else {
      await Fabricante.destroy({ where: { codFabricante: pesq.codFabricante } });
      res.status(200).json({ message: "Usuário deletado com sucesso!" });
    }
  } catch (err) {
    console.error("Erro ao deletar Fabricante", err);
    res.status(500).json({ message: "Erro ao deletar Fabricante" });
  }
};

module.exports = { cadastrarFabricante, consultarFabricante, listarFabricante, apagarFabricante, atualizarFabricante };
