import { ICar } from '../../interfaces/ICar';

export const carMock: ICar = {
  model: "Fiat2 Maranello",
  color: "Blue",
  year: 2000,
  buyValue: 1200,
  seatsQty: 2,
  doorsQty: 4
}

export const carMockId: ICar & { _id: string } = {
  _id: '636c436a2bfb1a09ecd18a46',
  ...carMock,
};