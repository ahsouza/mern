module.exports = (sequelize, Sequelize) => {
  const Imovel = sequelize.define("imoveis", {
    nome: { type: Sequelize.TEXT},
    descricao: {type: Sequelize.STRING(82)},
    imagem: {type: Sequelize.STRING.BINARY},
    metro_cubico: {type: Sequelize.FLOAT},
    preco: {type: Sequelize.DOUBLE},
    quartos: {type: Sequelize.INTEGER},
    garagem: {type: Sequelize.INTEGER},
    sala: {type: Sequelize.INTEGER},
    garagem: {type: Sequelize.INTEGER},
    banheiros: {type: Sequelize.INTEGER},
    endereco: {type: Sequelize.STRING},
    cep: {type: Sequelize.INTEGER},
    estado: {type: Sequelize.STRING},
    cidade: {type: Sequelize.STRING}
  });

  return Imovel;
}