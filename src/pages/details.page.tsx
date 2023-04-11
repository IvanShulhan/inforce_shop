import { Box, Typography, Container } from '@mui/material';

export const DetailsPage = () => {
  return (
    <Box sx={{ py: 3 }}>
      <Container>
        <Typography
          sx={{ textAlign: 'center', mb: 2 }}
          variant="h2"
        >
          Details
        </Typography>
      </Container>
    </Box>
  );
};
