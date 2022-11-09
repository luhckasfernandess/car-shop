import { z } from 'zod';
import { zodSchemaVehicle } from './IVehicle';

export const zodSchemaCar = zodSchemaVehicle.extend({
  doorsQty: z
    .number({
      required_error: 'Doors quantity is required!',
      invalid_type_error: 'Doors quantity must be a number!',
    })
    .int({
      message: 'Doors quantity must be a interger number',
    })
    .positive({
      message: 'Doors quantity must be a positive number',
    })
    .gte(2, {
      message: 'Doors quantity must be greater than or equal to two',
    })
    .lte(4, {
      message: 'Doors quantity also must be less or equal  to four',
    }),
  
  seatsQty: z
    .number({
      required_error: 'Seats quantity is required!',
      invalid_type_error: 'Seats quantity must be a number!',
    })
    .int({
      message: 'Seats quantity must be a interger number',
    })
    .positive({
      message: 'Seats quantity must be a positive number',
    })
    .gte(2, {
      message: 'Seats quantity must be greater than or equal to two',
    })
    .lte(7, {
      message: 'Seats quantity also must be less or equal  to seven',
    }),
});

export type ICar = z.infer<typeof zodSchemaCar>;
