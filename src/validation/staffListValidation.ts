import Joi from "joi";

interface IStaff{
  create:Joi.Schema,
  list:Joi.Schema
}

const schema:IStaff = {
  create:Joi.object().keys({
    body:Joi.object().keys({
      firstName:Joi.string().required(),
      lastName:Joi.string().required(),
      middleName:Joi.string().required(),
      branch:Joi.string().required(),
      job:Joi.string().required(),
      addres:Joi.string().required()
    })
  }),
  list:Joi.object().keys({
    query:Joi.object().options({allowUnknown:true})
  })
}

export default schema;