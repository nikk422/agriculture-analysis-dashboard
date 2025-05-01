import '@mantine/core/styles.css';
import {MantineProvider} from '@mantine/core';
import { theme } from './theme';
import '@mantine/core/styles.css';
import { mockData } from './constant';
import Dashboard from './pages/Dashboard';

const  App = () => {
  return (
    <MantineProvider
      theme={theme}
      defaultColorScheme="light">
      <Dashboard mockData={mockData}/>
    </MantineProvider>
  );
}
export default App