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

  public async readById(req: Request, res: Response): Promise<Response> {
    if (req.params.id.length < 24) {
      return res.status(400)
        .json({ error: 'Id must have 24 hexadecimal characters' });
    }
    
    try {
      const carResult = await this._carService.readCarById(req.params.id as string);

      return res.status(200).json(carResult);
    } catch (error) {
      return res.status(404).json({ error: 'Object not found' });
    }
  }

  public async updateById(req: Request, res: Response): Promise<Response> {
    if (req.params.id.length < 24) {
      return res.status(400)
        .json({ error: 'Id must have 24 hexadecimal characters' });
    }
    console.log(Object.values(req.body));
    
    if (!Object.values(req.body).length) {
      return res.status(400).json({ error: 'Body required' });
    }

    try {
      const carResult = await this._carService
        .updateCarById(req.params.id as string, req.body as ICar);

      return res.status(200).json(carResult);
    } catch (error) {
      return res.status(404).json({ error: 'Object not found' });
    }
  }
}