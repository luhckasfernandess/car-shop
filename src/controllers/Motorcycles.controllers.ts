import { Request, Response } from 'express';
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
}