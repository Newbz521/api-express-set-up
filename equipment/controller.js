let model = require('./model')

let controller = {
  create(request, response) { 
    // let results = await model.create(request.body)
    // response.json(results)

    model 
      .create(request.body)
      .then(data => reponse.json(data))
      .catch(error => {
        console.error("Error on creatE()")
        response
          .status(500)
          .json({error: "Something went wrong"})
      })
  },

  getById(request, response) { 

  },
  getAll(request, response) { 
    model
      .find()
      .then(data => response.json(data))
      .catch(error => {
        console.error("Error on creatE()")
        response
          .status(500)
          .json({error: "Something went wrong"})
      })
  },
  update(request, response) { 

  },
  delete(request, response) { 

  }
}

module.exports = controller