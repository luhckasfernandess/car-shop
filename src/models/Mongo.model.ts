import { isValidObjectId, Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public async read(): Promise<T[]> {
    return this._model.find();
  }

  public async readOne(carId: string): Promise<T | null> {
    if (!isValidObjectId(carId)) throw Error('InvalidMongoId');

    return this._model.findById({ carId });
  }
  public async create(car: T): Promise<T> {
    return this._model.create({ ...car });
  }

  public async update(carId: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(carId)) throw Error('InvalidMongoId');

    return this._model.findByIdAndUpdate(carId, obj, { new: true });
  }

  public async delete(carId: string): Promise<T | null> {
    if (!isValidObjectId(carId)) throw Error('InvalidMongoId');

    return this._model.findByIdAndDelete({ carId });
  }
}

export default MongoModel;