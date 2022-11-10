import chai from 'chai';
import { Request, Response } from 'express';
import * as sinon from 'sinon';
const { expect } = chai;

import CarController from '../../../controllers/Cars.controllers';
import CarModel from '../../../models/Cars.model';
import CarService from '../../../services/Cars.services';

import { carMock, carMockId } from '../../mocks/Cars.mocks';

describe('Test car Controller', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(new CarService(new CarModel()));

  const req = {} as Request;
  const res = {} as Response;

  beforeEach(() => {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('Create car', () => {
    beforeEach(async () => {
      sinon
        .stub(carService, 'createCar')
        .resolves(carMockId);

      req.body = carMock;
      await carController.create(req, res);
    });

    describe('On Success', async () => {
      it('status to be 201', async () => {
        const statusStub = res.status as sinon.SinonStub;
        console.log(statusStub);

        expect(statusStub.calledWith(201));
      });

      it('return to be true', async () => {
        const jsonStub = res.json as sinon.SinonStub;

        expect(jsonStub.calledWith(carMockId));
      });
    });
  });
});