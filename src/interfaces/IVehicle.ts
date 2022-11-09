import { z } from 'zod';

const zodSchemaVehicle = z.object({
  model: z.string().min(3),
  color: z.string().min(3),
  status: z.boolean().optional(),
  year: z.number().positive().gte(1900).lte(2022),
  buyValue: z.number().positive(),
});

export type IVehicle = z.infer<typeof zodSchemaVehicle>;
