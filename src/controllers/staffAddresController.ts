import { Request, Response } from "express";
import StaffAddressRepository from "../repository/staffAddress";
import { CreateStaffAddressDTO } from "../dto/StaffAddressDTO";
import { Validate } from "../shared/http/domain/ValidatorRequest";
import staffAddresSchema from '../validation/staffAddressValidation'
import { BaseController } from "../shared/http/domain/Basecontroller";

export default class Controller extends BaseController {
  private repo = new StaffAddressRepository();

  @Validate(staffAddresSchema.create)
  async create(
    req:Request,
    res:Response
  ):Promise<Response<any, Record<any, string>>>{
    try{
       const data:CreateStaffAddressDTO = req.body;
       console.log(data);
       const address = await this.repo.create(data);

       return this.created(res , data)
    }
    catch(error){
      throw this.fail(res, `${error}`)
    }
  }
}