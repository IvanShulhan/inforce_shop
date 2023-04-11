import { Box, Typography, Container } from '@mui/material';

import { ProductListComponent } from '../components/product-list.component';

export const HomePage = () => {
  return (
    <Box sx={{ py: 3 }}>
      <Container>
        <Typography
          sx={{ textAlign: 'center', mb: 2 }}
          variant="h2"
        >
          Products
        </Typography>
        <ProductListComponent />
      </Container>
    </Box>
  );
};
