import { Schema , Document , model } from "mongoose";
import { v4 as uuid } from "uuid";

interface StaffAddress  extends Document{
  _id:string,
  state:string,
  region:string
}
const StaffAddressSchema = new Schema<StaffAddress>(
  {
    _id:{
      type:String,
      default:uuid()
    },

    state:{
      type:String,
      required:true
    },
    region:{
      type:String,
      required:true
    }
  } ,
  {
    timestamps:true
  }
);

export default model<StaffAddress>('StaffAddress' , StaffAddressSchema)
