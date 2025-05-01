import {  Card, Container, Group, Switch, Title, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { mockData } from "../../constant";
import CropBarChart from "../../components/CropBarChart";
import CropStatsTable from "../../components/CropsTable";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { useEffect } from "react";

const Dashboard = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme();

  const toggleColorScheme = () =>
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");

  const toggleTheme = computedColorScheme === "dark" ? <IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)" /> : <IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-black)" />

  useEffect(()=>{
    setColorScheme("light");
  },[])
  

  return (
    <Container size="lg" p={15}>
    <Group justify="space-between" mb="xl">
      <Title order={1}>🌾 Agriculture Analytics</Title>
      <Switch 
        onClick={toggleColorScheme} 
        size="lg" 
        onLabel={toggleTheme} 
        offLabel={toggleTheme} 
      />
    </Group>
  
    <Card withBorder radius="lg" shadow="sm" p="lg" mb="xl">
      <Title order={2} mb="md">
        📊 Average Crop Production
      </Title>
      <CropBarChart mockData={mockData} />
    </Card>
  
    <Card withBorder radius="lg" shadow="sm" p="lg" mb="xl">
      <Title order={2} mb="md">
        📋 Yearly Crop Statistics
      </Title>
      <CropStatsTable mockData={mockData} />
    </Card>
  </Container>
  
  );
};

export default Dashboard;
