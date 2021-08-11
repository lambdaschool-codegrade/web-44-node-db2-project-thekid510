const Car = require('./cars-model')
const checkCarId =  async (req, res, next) => {
  try{
    const car = await Car.getById(req.params.id)
    if (!car){

    } else{
      next()
    }
  } catch(err){
    next(err)
  }
  // DO YOUR MAGIC
 
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}
module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid
}