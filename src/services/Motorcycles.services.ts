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

  public async readMotoById(id: string): Promise<IMotorcycle> {
    const findMoto = await this._motorcycleModel.readOne(id);

    if (!findMoto) throw new Error();

    return findMoto;
  }

  public async updateMotoById(carId: string, body: IMotorcycle): Promise<IMotorcycle> {
    const bodyParsed = zodSchemaMotorcycle.safeParse(body);

    if (!bodyParsed.success) throw bodyParsed.error;

    const motoUpdated = await this._motorcycleModel.update(carId, bodyParsed.data);

    if (!motoUpdated) throw new Error();

    return motoUpdated;
  }

  public async deleteMotoById(motoId: string): Promise<IMotorcycle | null> {
    const motoDeleted = await this._motorcycleModel.delete(motoId);

    if (!motoDeleted) throw new Error();

    return motoDeleted;
  }
}