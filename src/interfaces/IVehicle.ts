import { z } from 'zod';

export const zodSchemaVehicle = z.object({
  model: z
    .string({
      required_error: 'Car Model quantity is required!',
      invalid_type_error: 'Car Model quantity must be a string!',
    })
    .min(3, {
      message: 'Car Model must be at least 3 characters!',
    }),
  
  color: z
    .string({
      required_error: 'Color field is required!',
      invalid_type_error: 'Color field must be a string!',
    })
    .min(3, {
      message: 'Color field must be at least 3 characters!',
    }),
  
  status: z
    .boolean({
      invalid_type_error: 'Status field must be a boolean!',
    })
    .optional(),
  
  year: z
    .number({
      required_error: 'Year field is required!',
      invalid_type_error: 'Year field must be a number!',
    })
    .positive({
      message: 'Year field must be a positive number',
    })
    .gte(1900, {
      message: 'Year field must be greater than or equal to 1900',
    })
    .lte(2022, {
      message: 'Year field also must be less or equal to 2022',
    }),
  
  buyValue: z
    .number({
      required_error: 'Buy Value field is required!',
      invalid_type_error: 'Buy Value field must be a number!',
    })
    .positive({
      message: 'Buy Value field must be a positive number',
    }),
});

export type IVehicle = z.infer<typeof zodSchemaVehicle>;
