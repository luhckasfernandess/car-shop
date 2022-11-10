import * as sinon from 'sinon';
import chai from 'chai';

import { carMock, carMockId } from '../../mocks/Cars.mocks';

import Cars from '../../../models/Cars.model';
import CarService from '../../../services/Cars.services';
import CarController from '../../../controllers/Cars.controllers';

import { Request, Response } from 'express';
const { expect } = chai;

describe('Test car Services', () => {
  const carModel = new Cars();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);

  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    sinon.stub(carService, 'createCar').resolves(carMockId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore();
  })

  describe('Should create a new car', () => {
    it('Create car successfully', async () => {
      const carCreated = await carService.createCar(carMock);

      expect(carCreated).to.be.deep.equal(carMockId);
    });
  })
});