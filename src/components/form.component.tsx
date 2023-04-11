import { Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';

import { useAppDispatch } from '../app/hooks';
import { toggleIsOpen } from '../app/slices/modal.slice';
import { createProduct } from '../app/slices/products.slice';
import { productSchema } from '../schemas/product.schema';

export const FormComponent = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      imageUrl: '',
      count: 1,
      width: 1,
      height: 1,
      weight: 1,
      comments: [],
    },
    validationSchema: productSchema,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit: (values) => {
      const {
        width, height, weight, ...dataWithoutSize
      } = values;
      const id = Date.now();

      dispatch(createProduct(
        {
          ...dataWithoutSize, id, size: { width, height }, weight: `${weight}g`,
        },
      ));

      dispatch(toggleIsOpen());
      formik.resetForm();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        width: 320,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 5,
      }}
    >
      <TextField
        fullWidth
        name="name"
        variant="filled"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        fullWidth
        name="imageUrl"
        variant="filled"
        label="Image Url"
        value={formik.values.imageUrl}
        onChange={formik.handleChange}
        error={formik.touched.imageUrl && Boolean(formik.errors.imageUrl)}
        helperText={formik.touched.imageUrl && formik.errors.imageUrl}
      />
      <TextField
        fullWidth
        name="count"
        variant="filled"
        type="number"
        label="Count"
        value={formik.values.count}
        onChange={formik.handleChange}
        error={formik.touched.count && Boolean(formik.errors.count)}
        helperText={formik.touched.count && formik.errors.count}
      />
      <TextField
        fullWidth
        name="width"
        variant="filled"
        type="number"
        label="Width"
        value={formik.values.width}
        onChange={formik.handleChange}
        error={formik.touched.width && Boolean(formik.errors.width)}
        helperText={formik.touched.width && formik.errors.width}
      />
      <TextField
        fullWidth
        name="height"
        variant="filled"
        type="number"
        label="Height"
        value={formik.values.height}
        onChange={formik.handleChange}
        error={formik.touched.height && Boolean(formik.errors.height)}
        helperText={formik.touched.height && formik.errors.height}
      />
      <TextField
        fullWidth
        name="weight"
        variant="filled"
        type="number"
        label="Weight"
        value={formik.values.weight}
        onChange={formik.handleChange}
        error={formik.touched.weight && Boolean(formik.errors.weight)}
        helperText={formik.touched.weight && formik.errors.weight}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          color="error"
          type="button"
          variant="outlined"
          onClick={() => formik.resetForm()}
        >
          Reset
        </Button>
        <Button variant="outlined" color="success" type="submit">Submit</Button>
      </Box>
    </form>
  );
};
