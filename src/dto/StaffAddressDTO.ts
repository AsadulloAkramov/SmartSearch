import { Document } from 'mongoose';

export interface CreateStaffAddressDTO {
  state:string,
  region:string
}

export interface StaffAddresItem extends Document {
  _id:string,
  state:string,
  region:string
}