import {
  Button, Card, CardActions, CardContent, CardMedia, Typography,
} from '@mui/material';
import React from 'react';

import { IProduct } from '../models/product.model';

interface IProps {
  product: IProduct;
}

export const ProductItemComponent: React.FC<IProps> = React.memo(
  ({ product }) => {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 200, backgroundSize: 'contain' }}
          image={product.imageUrl}
          title={product.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            sx={{ textAlign: 'center' }}
          >
            {product.name}
          </Typography>
        </CardContent>
        <CardActions sx={{
          display: 'flex', justifyContent: 'center',
        }}
        >
          <Button size="small" variant="outlined" color="error">Delete</Button>
          <Button
            size="small"
            variant="outlined"
            color="success"
          >
            Change
          </Button>
        </CardActions>
      </Card>
    );
  },
);
