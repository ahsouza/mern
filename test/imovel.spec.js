const
 should = require("should"),
 request = require("request"),
 chai = require("chai"),
 expect = chai.expect,
 urlBase = "https://mern-ahsouza.herokuapp.com/api/imoveis";

describe("API REST Imóveis App",()=>{
  it("Retorno de todos imoveis registrados",(done)=>{
    request.get({url: urlBase}, (error, res, body) => {
        var _body = {}
        try{
          _body = JSON.parse(body)
        }
        catch(e){
          _body = {};
        }
        expect(res.statusCode).to.equal(200)

        console.log(_body)
        expect(_body)
        done()
      }
    )
  })
  it("Retorno de imóvel com ano 2021",(done)=>{
    request.get({url: urlBase+"?cidade=serra"}, (error, res, body) => {
        var _body = {}
        try{
          _body = JSON.parse(body)
        }
        catch(e){
          _body = {};
        }
        expect(res.statusCode).to.equal(200)
        console.log(_body)
        expect(_body)
        done()
      }
    )
  })
})