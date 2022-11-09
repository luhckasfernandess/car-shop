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

    return this._model.findOne({ id: carId });
  }

  public async create(car: T): Promise<T> {
    return this._model.create({ ...car });
  }

  public async update(id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(id)) throw Error('InvalidMongoId');

    return this._model.findByIdAndUpdate(id, obj, { new: true });
  }

  public async delete(_id: string): Promise<T | null> {
    console.log(this._model.findByIdAndRemove({ _id }));
    
    return this._model.findByIdAndRemove({ _id });
  }
}

export default MongoModel;