
type andQueryResult = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  $and: {}[];
};

export default class Search {

  public queryBuilder(
    patterns:string[],
    columns:string[]
  ):andQueryResult {
    let finalQuery:any =[];
     for (let pattern of patterns){
        const $orQuery= columns.map((columnName:string)=> {
          const column ={};
          column[columnName] = this.fullTextSearchRegex(pattern);
          return column;
        })
        const sequence ={
          $or:$orQuery
        }

        finalQuery = [...finalQuery , sequence];
      
     }
    return finalQuery;
  }

  public fullTextSearchRegex(pattern: string): RegExp {
    return new RegExp(`.*${pattern}.*`, 'i');
  }


  public aggregatePipeline(patterns: string[]){

    const columns = ['fullName', 'job', 'address_info.state', 'address_info.region'];
                  

    const $lookupAddres ={
      $lookup:{
        from:"staffaddresses",
        localField:"address",
        foreignField:"_id",
        as:"address_info"
      }
    };


    const $match ={
      $match:{
        $and: this.queryBuilder(patterns,columns)
      }
    };

  

    const $pipeline = [
      $lookupAddres,
      $match
    ];

    return $pipeline;
  }


}