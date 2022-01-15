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
      const columns = ['firstName' , 'lastName', 'middleName' , 'job' , 'address_info.state' ,'address_info.region']
      const query = this.search.Builder(searchValues , ['firstName' , 'lastName' , 'job'])
      
      const doc = await StaffList.aggregate([
        {
          $lookup:{
            from:"staffaddresses",
            localField:"address",
            foreignField:"_id",
            as:"address_info"
          }
        },
        {
          $match:{
           $or:[this.search.Builder(searchValues , columns )]
          }
        }
      ])
      // console.log(query)
      return doc;
    }
    catch(error){
      throw new Error( `${error}`);
    }
  }


}