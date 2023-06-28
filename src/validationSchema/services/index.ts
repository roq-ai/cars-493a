import * as yup from 'yup';

export const serviceValidationSchema = yup.object().shape({
  type: yup.string().required(),
  cost: yup.number().integer().required(),
  duration: yup.number().integer().required(),
  organization_id: yup.string().nullable(),
});
