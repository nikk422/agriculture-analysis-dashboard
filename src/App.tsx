import '@mantine/core/styles.css';
import {MantineProvider} from '@mantine/core';
import { theme } from './theme';
import '@mantine/core/styles.css';
import Dashboard from './pages/Dashboard';

const  App = () => {
  return (
    <MantineProvider
      theme={theme}
      defaultColorScheme="light">
      <Dashboard/>
    </MantineProvider>
  );
}
export default App