import { Router } from 'express';
import MotorcycleController from '../controllers/Motorcycles.controllers';
import MotorcycleModel from '../models/Motorcycle.model';
import MotorcycleService from '../services/Motorcycles.services';

const motorsRoute = Router();

const crudMoto = new MotorcycleController(new MotorcycleService(new MotorcycleModel()));

motorsRoute.post('/', (req, res) => crudMoto.create(req, res));

motorsRoute.get('/', (req, res) => crudMoto.readAll(req, res));
motorsRoute.get('/:id', (req, res) => crudMoto.readById(req, res));

motorsRoute.put('/:id', (req, res) => crudMoto.updateById(req, res));

export default motorsRoute;
