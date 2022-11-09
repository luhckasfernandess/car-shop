import { z } from 'zod';
import { zodSchemaVehicle } from './IVehicle';

export const zodSchemaCar = zodSchemaVehicle.extend({
  doorsQty: z
    .number()
    .int()
    .positive()
    .gte(2)
    .lte(4),
  
  seatsQty: z
    .number()
    .int()
    .positive()
    .gte(2)
    .lte(7),
});

export type ICar = z.infer<typeof zodSchemaCar>;
