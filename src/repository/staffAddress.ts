import StaffAddress from "../models/staffAddress";
import { CreateStaffAddressDTO , StaffAddresItem } from '../dto/StaffAddressDTO';
import {v4 as uuid} from 'uuid'
export default class StaffAddressRepository{

  async create(body:CreateStaffAddressDTO):Promise<StaffAddresItem>{
   try{
      const { state , region} = body;
      const address:StaffAddresItem = await StaffAddress.create({
        _id:uuid(),
        state,
        region
      });
      return address;
   } 
   catch(error){
     throw new Error(`${error}`);
   }   
  }
}