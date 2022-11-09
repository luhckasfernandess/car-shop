import { IMotorcycle, zodSchemaMotorcycle } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';

export default class MotorcycleService {
  constructor(private _motorcycleModel: IModel<IMotorcycle>) { }

  public async createMoto(carInfo: IMotorcycle): Promise<IMotorcycle> {
    const parsed = zodSchemaMotorcycle.safeParse(carInfo);

    if (!parsed.success) throw parsed.error;

    return this._motorcycleModel.create(parsed.data);
  }

  public async readAllMotors(): Promise<IMotorcycle[]> {
    const cars = await this._motorcycleModel.read();

    return cars;
  }
}