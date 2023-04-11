import { Box } from '@mui/material';

import { HeaderComponent } from './components/header.component';
import { ModalComponent } from './components/modal.component';
import { Navigation } from './navigation';
import './app.css';

const App = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <HeaderComponent />
      <Navigation />
      <ModalComponent />
    </Box>
  );
};

export default App;
