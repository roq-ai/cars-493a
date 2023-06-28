import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  status: yup.string().required(),
  employee_id: yup.string().nullable(),
  order_id: yup.string().nullable(),
});
