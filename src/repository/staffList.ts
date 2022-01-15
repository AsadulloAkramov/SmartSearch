import { CreateStaffListDTO, StaffListItem } from "../dto/staffListDTO";
import StaffList from "../models/staffList";
import Search from "./search";

export default class StaffListRepository {
  private search = new Search();
  async create(body:CreateStaffListDTO):Promise<StaffListItem>{
    try{
        const staffList:StaffListItem = await StaffList.create(body);
        return staffList;
    }
    catch(error){
      throw new Error(`[StaffList Repository]: ${error}`);
    }
  }

  async list(pattern){
    try{
      const searchValues = pattern.split(' ');
      const pipeline = this.search.aggregatePipeline(searchValues);
      const docs = await StaffList.aggregate(pipeline)
      
      return docs;
    }
    catch(error){
      throw new Error( `${error}`);
    }
  }


}