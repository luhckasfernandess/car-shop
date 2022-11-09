import { ICar, zodSchemaCar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

export default class CarService {
  constructor(private _carModel: IModel<ICar>) { }
  
  public async createCar(carInfo: ICar): Promise<ICar> {
    const parsed = zodSchemaCar.safeParse(carInfo);
    
    if (!parsed.success) throw parsed.error;
    
    return this._carModel.create(parsed.data);
  }

  public async readAllCars(): Promise<ICar[]> {
    return this._carModel.read();
  }
}