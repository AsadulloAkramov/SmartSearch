
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
       const smartSearchResult={
         smartSearchResult: this.fullTextSearchRegex(pattern)
       }
       finalQuery.push(smartSearchResult)
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

    const $unwindAddres ={
      $unwind:{
        path:'$address_info',
        preserveNullAndEmptyArrays:true
      }
    };

    const $addFields= {
      $addFields:{
        smartSearchResult: {
          $concat: ['$fullName', ' ', '$job',
                    '$address_info.state' , ' ', '$address_info.region']
        }
      }
    };

    const $match ={
      $match:{
        $and: this.queryBuilder(patterns,columns)
      }
    };

    const $project ={
      $project:{
        smartSearchResult:0
      }
    };

    const $pipeline = [
      $lookupAddres,
      $unwindAddres,
      $addFields,
      $match,
      $project
    ];

    return $pipeline;
  }


}