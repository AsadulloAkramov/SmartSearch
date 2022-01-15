import mockStaffAddres  from './staffAddress';
import mockStaffList  from './staffList';

import StaffAddress from '../../../models/staffAddress';
import StaffList from '../../../models/staffList';

export default async function(){
  try{
    const staffAddress = await mockStaffAddres();
    await StaffAddress.insertMany(staffAddress);
  }
  catch(error){
    throw new Error(`Staff address seeders error: ${error}`);
  }

  try{
    const staffList = await mockStaffList();
    await StaffList.insertMany(staffList)
  }
  catch(error){

  }
}