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
    
    if (!findCar) throw new Error();

    return findCar;
  }

  public async updateCarById(carId: string, body: ICar): Promise<ICar> {
    const bodyParsed = zodSchemaCar.safeParse(body);

    if (!bodyParsed.success) throw bodyParsed.error;

    const carUpdated = await this._carModel.update(carId, bodyParsed.data);

    if (!carUpdated) throw new Error();

    return carUpdated;
  }

  public async deleteCarById(carId: string): Promise<ICar | null> { 
    const carDeleted = await this._carModel.delete(carId);
    
    if (!carDeleted) throw new Error();

    return carDeleted;
  }
}