import { Document, model, RefType , Schema } from "mongoose";
import { v4 as uuid } from "uuid";

interface IStaffList {
  _id:string,
  firstName:string,
  lastName:string,
  middleName:string,
  branch:string,
  job:string,
  address:RefType
}

const StaffListSchema = new Schema<IStaffList>(
  {
    _id:{
      type:String,
      default:uuid()
    },
    firstName:{
      type:String,
      required:true
    },
    lastName:{
      type:String,
      required:true
    },
    middleName:{
      type:String,
      required:true
    },
    branch:{
      type:String,
      required:true
    },
    job:{
      type:String,
      required:true
    },
    address:{
        type:String,
        ref:'StaffAddress',
        required:true    
    }
  },
  {
    timestamps:true
  }
);


export default model<IStaffList>('StaffList' , StaffListSchema);