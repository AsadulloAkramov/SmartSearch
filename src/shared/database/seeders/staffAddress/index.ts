import fs from 'fs';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function fakeStaffAddresGenerator():Promise<Array<any>>{
  const staffAddressString:string = fs.readFileSync(
    `${__dirname}/staffAddress.json`,
    {
      encoding:'utf-8'
    }
  );
  const staffAddressList:Array<any> = JSON.parse(staffAddressString);
  return staffAddressList;
}