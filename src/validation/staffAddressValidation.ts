import Joi from "joi";

interface IAddressSchema {
  create:Joi.Schema
}

const schema:IAddressSchema = {
  create:Joi.object().keys({
    body:Joi.object().keys({
      state:Joi.string().required(),
      region:Joi.string().required()
    })
  })
}

export default schema;