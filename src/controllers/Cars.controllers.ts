import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import CarService from '../services/Cars.services';

export default class CarController {
  constructor(private carService: CarService) { }

  public async create(req: Request, res: Response<ICar>) {
    const results = await this.carService.create(req.body);
    
    return res.status(201).json(results);
  }
}