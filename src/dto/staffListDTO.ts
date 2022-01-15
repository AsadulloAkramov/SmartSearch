import { Document , RefType } from "mongoose";

export interface CreateStaffListDTO{
  fullName:string,
  branch:string,
  job:string,
  address:RefType
}

export interface StaffListItem extends Document{
  _id:string,
  fullName:string,
  branch:string,
  job:string,
  address:RefType
}