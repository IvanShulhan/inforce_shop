import {
  Box, Button, Grid, Typography, Container,
} from '@mui/material';

import { Navigation } from './navigation';
import './app.css';

const App = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ borderBottom: '1px solid gray' }}>
        <Container>
          <Grid
            container
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingY: 1,
            }}
          >
            <Grid item>
              <Typography
                variant="h5"
                sx={{ fontWeight: 800 }}
              >
                LOGO
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="error"
                sx={{ color: 'black', fontWeight: 700 }}
              >
                Add new product
              </Button>
            </Grid>

          </Grid>
        </Container>
      </Box>
      <Navigation />
    </Box>
  );
};

export default App;
