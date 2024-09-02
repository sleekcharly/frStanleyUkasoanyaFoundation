import { z } from 'zod';

export const nairaFormSchema = z.object({
  first_name: z.string().min(1, { message: 'First name is required' }),
  last_name: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Invalid Email address' }),
  amount: z.number().min(2000, { message: 'Please enter a minimum of ₦2000' }),
  paymentInterval: z.string(),
  comment: z.string(),
});

export const dollarFormSchema = z.object({
  first_name: z.string().min(1, { message: 'First name is required' }),
  last_name: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Invalid Email address' }),
  amount: z.number().min(10, { message: 'Please enter a minimum of $10' }),
  paymentInterval: z.string(),
  comment: z.string(),
});
