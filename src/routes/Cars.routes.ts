import { Router } from 'express';
import CarController from '../controllers/Cars.controllers';
import CarModel from '../models/Cars.model';
import CarService from '../services/Cars.services';

const carsRoute = Router();

const crudCar = new CarController(new CarService(new CarModel()));

carsRoute.post('/', (req, res) => crudCar.create(req, res));

export default carsRoute;