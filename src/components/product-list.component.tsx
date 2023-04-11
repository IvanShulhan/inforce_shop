import { Grid } from '@mui/material';
import { useEffect } from 'react';

import { ProductItemComponent } from './product-item.component';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getProducts, selectProducts } from '../app/slices/products.slice';

export const ProductListComponent = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={3}>
          <ProductItemComponent product={product} />
        </Grid>
      ))}
    </Grid>
  );
};
