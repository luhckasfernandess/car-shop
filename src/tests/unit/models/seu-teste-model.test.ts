import chai from 'chai';
import { Model } from 'mongoose';
import * as sinon from 'sinon';
import ErrorMessages from '../../../interfaces/Errors.enum';

import CarModel from '../../../models/Cars.model';
import { carMock, carMockId } from '../../mocks/Cars.mocks';
const { expect } = chai;

describe('Teste car Model', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockId);
    sinon.stub(Model, 'find').resolves([carMockId]);
    sinon.stub(Model, 'findByIdAndDelete').resolves([]);
  });

  after(() => {
    sinon.restore();
  })

  describe('Should create a new car', () => {
    it('Create car successfully', async () => {
      const carResult = await carModel.create(carMock);

      expect(carResult).to.be.deep.equal(carMockId);
    });
  });

  describe('Should list all cars', () => {
    it('Find car successfull', async () => {
      const cars = await carModel.read();

      expect(cars).to.be.deep.equal([carMockId]);
    });
  });

  describe('Should delet a car', () => {
    it('_id not found to delete', async () => {
      try {
        await carModel.delete('inexistentId1201921092902');
      } catch (err: any) {
        expect(err.message).to.be.eq(err.message);
      }
    });
  });
});