const
 db = require("../config/database"),
 ImovelSQL = db.dbMYSQL.imoveis,
 ImovelNOSQL = db.dbMONGO.imoveis,
 Op = db.dbMYSQL.Sequelize.Op;

class ImovelSQLController {
  async index(req, res) {
    try {
      const imoveis = await ImovelSQL.findAll();

      return res.json(imoveis);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const imovel = await ImovelSQL.findByPk(req.params.id);

      return res.json(imovel);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const imovel = await ImovelSQL.create(req.body)

      return res.json(imovel);
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }

  async update(req, res) {
    try {
      const imovel = await ImovelSQL.findByPk(req.params.id)

      await imovel.update(req.body)

      return res.json({ imovel })
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }

  async destroy(req, res) {
    try {
      const imovel = await ImovelSQL.findByPk(req.params.id)

      await imovel.destroy()

      return res.json()
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }

  async destroyAll(req, res) {
    try {
      await ImovelSQL.destroy({where: {},truncate: true})

      return res.json({message: 'Todos veículos foram excluídos com sucesso'})
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }
}


class ImovelNOSQLController {
  async index(req, res) {
    try {
      const imoveis = await ImovelSQL.findAll();

      return res.json(imoveis);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const imovel = await ImovelSQL.findByPk(req.params.id);

      return res.json(imovel);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const imovel = await ImovelSQL.create(req.body)

      return res.json(imovel);
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }

  async update(req, res) {
    try {
      const imovel = await ImovelSQL.findByPk(req.params.id)

      await imovel.update(req.body)

      return res.json({ imovel })
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }

  async destroy(req, res) {
    try {
      const imovel = await ImovelSQL.findByPk(req.params.id)

      await imovel.destroy()

      return res.json()
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }

  async destroyAll(req, res) {
    try {
      await ImovelSQL.destroy({where: {},truncate: true})

      return res.json({message: 'Todos veículos foram excluídos com sucesso'})
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
  }
}

module.exports = new ImovelSQLController();