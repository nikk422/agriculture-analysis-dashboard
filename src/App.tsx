import '@mantine/core/styles.css';
import {Center, Loader, MantineProvider} from '@mantine/core';
import { theme } from './theme';
import '@mantine/core/styles.css';
import { lazy, Suspense } from 'react';
const Dashboard = lazy(() => import('./pages/Dashboard'));


const  App = () => {
  return (
    <MantineProvider
      theme={theme}
      defaultColorScheme="light">
     <Suspense fallback={
        <Center style={{ height: '100vh' }}>
          <Loader size={50} color="blue" />
        </Center>
        }>
      <Dashboard />
    </Suspense>
    </MantineProvider>
  );
}
export default App