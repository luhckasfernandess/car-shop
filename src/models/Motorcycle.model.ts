import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './Mongo.model';

const mongoModelSchemaMotorcycle = new Schema<IMotorcycle>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  engineCapacity: Number,
  category: String,
}, { versionKey: false });

class MotorcycleModel extends MongoModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('Motorcycle', mongoModelSchemaMotorcycle)) {
    super(model);
  }
}

export default MotorcycleModel;