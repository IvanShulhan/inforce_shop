import {
  Box, Button, Grid, Typography, Container,
} from '@mui/material';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '../app/hooks';
import { toggleIsOpen } from '../app/slices/modal.slice';

export const HeaderComponent = () => {
  const dispatch = useAppDispatch();

  const handleOpen = () => {
    dispatch(toggleIsOpen());
  };

  return (
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
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 800, color: 'gray' }}
              >
                LOGO
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="error"
              sx={{ color: 'black', fontWeight: 700 }}
              onClick={handleOpen}
            >
              Add new product
            </Button>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};
