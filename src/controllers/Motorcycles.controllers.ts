import { Request, Response } from 'express';
import ErrorMessages from '../interfaces/Errors.enum';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MotorcycleService from '../services/Motorcycles.services';

export default class MotorcycleController {
  constructor(private _motoService: MotorcycleService) { }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const results = await this._motoService.createMoto(req.body as IMotorcycle);

      return res.status(201).json(results);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  public async readAll(req: Request, res: Response): Promise<Response> {
    const allMotors = await this._motoService.readAllMotors();

    return res.status(200).json(allMotors);
  }

  public async readById(req: Request, res: Response): Promise<Response> {
    if (req.params.id.length < 24) {
      return res.status(400)
        .json({ error: ErrorMessages.INVALID_PARAM });
    }

    try {
      const motoResult = await this._motoService.readMotoById(req.params.id as string);

      return res.status(200).json(motoResult);
    } catch (error) {
      return res.status(404).json({ error: ErrorMessages.NOT_FOUND });
    }
  }
}