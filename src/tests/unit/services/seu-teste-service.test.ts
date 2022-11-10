import * as sinon from 'sinon';
import chai from 'chai';

import { carMock, carMockId } from '../../mocks/Cars.mocks';

import Cars from '../../../models/Cars.model';
import CarService from '../../../services/Cars.services';
import CarController from '../../../controllers/Cars.controllers';

import { Response } from 'express';
const { expect } = chai;

describe('Test car Services', () => {
  const carModel = new Cars();
  const carService = new CarService(carModel);

  const res = {} as Response;

  before(async () => {
    sinon.stub(carService, 'createCar').resolves(carMockId);
    sinon.stub(carModel, 'read').resolves([carMockId]);;

    sinon.stub(carModel, 'readOne').onCall(0)
      .resolves(carMockId)
      .onCall(1).resolves(null);
    sinon
      .stub(carModel, 'delete')
      .onCall(0).resolves(carMockId)
      .onCall(1).resolves(null);

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
  });

  describe('Should list all cars', () => {
    it('List cars successfully', async () => {
      const allCars = await carService.readAllCars();

      expect(allCars).to.be.deep.equal([carMockId]);
    });
  });

  describe('Should find car by id', () => {
    it('Find car successfully', async () => {
      const carResult = await carService.readCarById(carMockId._id);

      expect(carResult).to.be.deep.equal(carMockId);
    });
  });

  describe('Delete car', () => {
    it('Success', async () => {
      const carDeleted = await carService.deleteCarById(carMockId._id);

      expect(carDeleted).to.be.deep.equal(carMockId);
    });
  });
});