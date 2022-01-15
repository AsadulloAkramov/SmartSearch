import { FilterQuery , Model } from 'mongoose'
type orQueryResult = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  $or: {}[];
};


export default class Search {

  public Builder(
    patterns:string[],
    columns:string[]
  ):orQueryResult {
    let finalQuery:any =[];
     for(let columnName of columns){
       for(let pattern of patterns){
         const column={};
         column[columnName]={
           $regex:this.fullTextSearchRegex(pattern)
         }
         finalQuery.push(column)
       }  
     }
    return {
      $or:finalQuery
    };
  }

  public fullTextSearchRegex(pattern: string): RegExp {
    return new RegExp(`.*${pattern}.*`, 'i');
  }

  public findAll<T>(model:Model<T> ,patterns:string[], columns:string[]){
    return model.find({
      $match:{
        $or:this.Builder(patterns , columns)
      }
    })
  }


}