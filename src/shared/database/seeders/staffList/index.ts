import fs from 'fs';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function fakeStaffAddresGenerator():Promise<Array<any>>{
  const staffListString:string = fs.readFileSync(
    `${__dirname}/staffList.json`,
    {
      encoding:'utf-8'
    }
  );
  const staffList:Array<any> = JSON.parse(staffListString);
  return staffList;
}