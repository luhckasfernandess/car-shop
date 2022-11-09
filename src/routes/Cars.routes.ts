import { Router } from 'express';
import CarController from '../controllers/Cars.controllers';
import CarModel from '../models/Cars.model';
import CarService from '../services/Cars.services';

const carsRoute = Router();

const crudCar = new CarController(new CarService(new CarModel()));

carsRoute.post('/', (req, res) => crudCar.create(req, res));

carsRoute.get('/', (req, res) => crudCar.readAll(req, res));
carsRoute.get('/:id', (req, res) => crudCar.readById(req, res));

carsRoute.put('/:id', (req, res) => crudCar.updateById(req, res));

export default carsRoute;