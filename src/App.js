import React from 'react';
import Sidebar from './components/Sidebar';
import { Box } from '@chakra-ui/react';
import { AllRoutes } from './pages/AllRoutes';

function App() {
  return (
    <Box
      backgroundColor={'black'}
      color={'white'}
      pl={['12px', '22px', '22px']}
      pr={['12px', '22px', '22px']}
    >
      <Sidebar />
      < AllRoutes />
    </Box>
  );
}
export default App;
