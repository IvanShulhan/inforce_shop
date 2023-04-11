import { Grid } from '@mui/material';

export const ProductListComponent = () => {
  const products = ['ssss', 'ssss'];

  return (
    <Grid container>
      {products.map((product) => (
        <Grid item xs={3}>
          <>{product}</>
        </Grid>
      ))}
    </Grid>
  );
};
