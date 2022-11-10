import chai from 'chai';
import { Model } from 'mongoose';
import * as sinon from 'sinon';

import CarModel from '../../../models/Cars.model';
import { carMock, carMockId } from '../../mocks/Cars.mocks';
const { expect } = chai;

describe('Teste car Model', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockId)
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

});