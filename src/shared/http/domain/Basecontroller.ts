import { Response } from 'express';

export abstract class BaseController {

  public static jsonResponse(
    res: Response,
    code: number,
    message: string
  ): Response {
    return res.status(code).json({ message });
  }

  public ok<T>(res: Response, dto?: T): Response {
    if (!dto) {
      return res.sendStatus(200);
    }
    res.type('application/json');
    return res.status(200).json(dto);
  }

  public created<T>(res: Response, data?:T): Response {
    if(!data){
      return res.sendStatus(201)
    }
    return res.status(201).json(data)
  }

  public clientError(res: Response, message?: string): Response {
    return BaseController.jsonResponse(
      res,
      400,
      message ? message : 'Bad Request'
    );
  }

  public notFound(res: Response, message?: string): Response {
    return BaseController.jsonResponse(
      res,
      404,
      message ? message : 'Not found'
    );
  }

  public fail(res: Response, error: Error | string): Response {
    console.log(error);
    return res.status(500).json({
      message: 'Server error'
    });
  }
}
