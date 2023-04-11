import { Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';

import { productSchema } from '../schemas/product.schema';

export const FormComponent = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      imageUrl: '',
      count: 1,
      width: 0,
      hight: 0,
      weight: '',
      comments: [],
    },
    validationSchema: productSchema,
    validateOnChange: true,
    validateOnMount: true,
    onSubmit: (values) => {
      alert(
        JSON.stringify({
          ...values,
        }),
      );
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
        name="hight"
        variant="filled"
        type="number"
        label="Hight"
        value={formik.values.hight}
        onChange={formik.handleChange}
        error={formik.touched.hight && Boolean(formik.errors.hight)}
        helperText={formik.touched.hight && formik.errors.hight}
      />
      <TextField
        fullWidth
        name="weight"
        variant="filled"
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
