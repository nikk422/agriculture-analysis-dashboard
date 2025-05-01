import { Button, Container, Group, Title, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import CropStatsTable from "../../components/CropsTable";
import CropBarChart from "../../components/CropBarChart";


const  Dashboard=(props:any)=> {
    const {mockData}=props
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light');
  
    const toggleColorScheme = () =>
      setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
  
    return (
      <Container size="lg" py="xl">
        <Group mb="md">
          <Title>Agriculture Dashboard</Title>
          <Button onClick={toggleColorScheme}>
            Toggle {computedColorScheme === 'dark' ? 'Light' : 'Dark'} Mode
          </Button>
        </Group>
        <CropStatsTable mockData={mockData} />
        <Title mt="xl" mb="md" order={2}>
          Average Crop Production
        </Title>
        <CropBarChart mockData={mockData}/>
      </Container>
    );
  }
  
  export default Dashboard