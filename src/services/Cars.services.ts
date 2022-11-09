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
    const cars = await this._carModel.read();

    return cars;
  }

  public async readCarById(id: string): Promise<ICar> { 
    const findCar = await this._carModel.readOne(id);
    
    if (!findCar?.color) throw new Error('Car not found');

    return findCar;
  }
}