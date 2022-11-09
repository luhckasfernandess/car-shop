import { z } from 'zod';
import { zodSchemaVehicle } from './IVehicle';

export const zodSchemaMotorcycle = zodSchemaVehicle.extend({
  category: z
    .enum([
      'Street',
      'Custom',
      'Trail']),
  
  engineCapacity: z
    .number()
    .min(1)
    .lte(2500)
    .int(),
});

export type IMotorcycle = z.infer<typeof zodSchemaMotorcycle>;