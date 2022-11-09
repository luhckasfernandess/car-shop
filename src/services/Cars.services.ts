import { ICar, zodSchemaCar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

class CarService {
  constructor(private _carModel: IModel<ICar>) { }
  
  public async create(item: ICar): Promise<ICar> {
    const parsed = zodSchemaCar.safeParse(item);

    if (!parsed.success) { throw parsed.error; }
    
    return this._carModel.create(parsed.data);
  }
}

export default CarService;