import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  part_name: yup.string().required(),
  quantity: yup.number().integer().required(),
  organization_id: yup.string().nullable(),
});
