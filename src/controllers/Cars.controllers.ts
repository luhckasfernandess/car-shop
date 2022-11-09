import { Request, Response } from 'express';
import ErrorMessages from '../interfaces/Errors.enum';
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
        .json({ error: ErrorMessages.INVALID_PARAM });
    }
    
    try {
      const carResult = await this._carService.readCarById(req.params.id as string);

      return res.status(200).json(carResult);
    } catch (error) {
      return res.status(404).json({ error: ErrorMessages.NOT_FOUND });
    }
  }

  public async updateById(req: Request, res: Response): Promise<Response> {
    if (req.params.id.length < 24) {
      return res.status(400)
        .json({ error: ErrorMessages.INVALID_PARAM });
    }
    console.log(Object.values(req.body));
    
    if (!Object.values(req.body).length) {
      return res.status(400).json({ error: ErrorMessages.BODY_REQUIRED });
    }

    try {
      const carResult = await this._carService
        .updateCarById(req.params.id as string, req.body as ICar);

      return res.status(200).json(carResult);
    } catch (error) {
      return res.status(404).json({ error: ErrorMessages.NOT_FOUND });
    }
  }

  public async deleteById(req: Request, res: Response): Promise<Response> {
    if (req.params.id.length < 24) {
      return res.status(400)
        .json({ error: ErrorMessages.INVALID_PARAM });
    }

    try {
      const carResult = await this._carService.deleteCarById(req.params.id as string);

      return res.status(204).json(carResult);
    } catch (error) {
      return res.status(404).json({ error: ErrorMessages.NOT_FOUND });
    }
  }
}