import { Document , RefType } from "mongoose";

export interface CreateStaffListDTO{
  firstName:string,
  lastName:string,
  middleName:string,
  branch:string,
  job:string,
  address:RefType
}

export interface StaffListItem extends Document{
  _id:string,
  firstName:string,
  lastName:string,
  middleName:string,
  branch:string,
  job:string,
  address:RefType
}