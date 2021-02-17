const
 express = require("express"),
 compression = require("compression"),
 bodyParser = require("body-parser"),
 cors = require("cors"),
 helmet = require('helmet'),
 ImovelController = require("./controllers/imovel.controller")
const app = express()

var corsOptions = {origin: "http://localhost:3000"}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compression())
app.use(helmet())
app.use(cors(corsOptions))
app.enable('trust proxy')

const db = require("./config/database")

// ----------------
// CONECTANDO MYSQL
// ----------------
db.dbMYSQL.sequelize.sync({ force: true })
.then(() => {
  console.log("MYSQL - conectado com sucesso!")
}).catch(err => {
    console.log("Não pode se conectar ao banco de dados MySQL!", err)
    process.exit()
  })
// ----------------
// CONECTANDO MONGODB
// ----------------
db.dbMONGO.mongoose.connect(db.dbMONGO.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
	console.log("MONGO DB - Conectado com sucesso!")
}).catch(err => {
    console.log("Não pode se conectar ao banco de dados MONGODB!", err)
    process.exit()
  })

// ----------------
// ROUTES & CONTROLLERS
// ----------------
app.get("/", (req, res) => {
  res.json({ message: "Seja bem vindo ao MERN APP." })
})
app.post('/api/imoveis', ImovelController.store)
app.get('/api/imoveis', ImovelController.index)
app.get('/api/imoveis/:id', ImovelController.show)
app.put('/api/imoveis/:id', ImovelController.update)
app.delete('/api/imoveis/:id', ImovelController.destroy)
app.delete('/api/imoveis', ImovelController.destroyAll)

// set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})