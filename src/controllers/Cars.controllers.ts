import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import CarService from '../services/Cars.services';

export default class CarController {
  constructor(private _carService: CarService) { }

  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const results = await this._carService.createCar(req.body as ICar);

      return res.status(201).json(results);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  public async readAll(req: Request, res: Response): Promise<Response> {
    const allCars = await this._carService.readAllCars();

    return res.status(200).json(allCars);
  }
}