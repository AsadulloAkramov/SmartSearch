import { Request, Response } from "express";
import { CreateStaffListDTO } from "../dto/staffListDTO";
import StaffListRepository from "../repository/staffList";
import { Validate } from "../shared/http/domain/ValidatorRequest";
import { BaseController } from "../shared/http/domain/Basecontroller";
import StaffListSchema from '../validation/staffListValidation';
import StaffList from "../models/staffList";

export default class StaffListController extends BaseController {
  private repo = new StaffListRepository();

  @Validate(StaffListSchema.create)
  async create(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<any, string>>> {
    const doc: CreateStaffListDTO = req.body;
    const staffList = await this.repo.create(doc);

    return res.send({
      message: "new staff added to staffList successfully",
      status: 201,
      staffList
    })
  }

  @Validate(StaffListSchema.list)
  async list(
    req: Request,
    res: Response
  ): Promise<Response<any, Record<any, string>>> {
    try {
      const patterns = req.query.pattern
      const data = await this.repo.list(patterns)
      return this.ok(res, data)
    }
    catch (error) {
      return this.fail(res, `${error}`)
    }
  }

  async aggregation(req:Request , res:Response){
    const staffs = await StaffList.aggregate([
      {
        $lookup:{
          from:"staffaddresses",
          localField:"address",
          foreignField:"_id",
          as:"address_info"
        }
      }
    ])

    return this.ok(res , staffs);
  }
   
}