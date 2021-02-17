module.exports = mongoose => {
  var schema = mongoose.Schema(
      {
        nome: { type: String, required: true, index: {unique: true} },
        descricao: { type: String },
        imagem: { data: Buffer, contentType: String },
        metro_cubico: String,
        preco: String,
        quartos: { type: Number, default: 0, minimum: 0, maximum: 100 },
        garagem: { type: Number, default: 0, minimum: 0, maximum: 1000 },
        sala: { type: Number, default: 0, minimum: 0, maximum: 100 },
        banheiros: { type: Number, default: 0, minimum: 0, maximum: 100 },
        cep: { type: Number, required: true },
        endereco: String,
        estado: String,
        cidade: String,
        published: Boolean
      },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id;
    return object;
  })

  const Imovel = mongoose.model("imovel", schema)
  return Imovel;
};