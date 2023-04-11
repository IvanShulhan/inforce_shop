import * as yup from 'yup';

export const productSchema = yup.object({
  imageUrl: yup.string().required(),
  name: yup
    .string()
    .test(
      'len', 'At least 3 characters', (val) => (val ? val.length >= 3 : false),
    )
    .required('Name is required'),
  count: yup.number().default(1),
  width: yup.number().required(),
  height: yup.number().required(),
  weight: yup.string().required(),
  comments: yup.array().default([]),
});
