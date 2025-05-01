import { Table } from "@mantine/core";
import { CropRecord } from "../../constant";


type Props = {
  mockData: CropRecord[];
};

const CropStatsTable = ({ mockData }: Props) => {
  const rows = mockData.map((record, index) => (
    <Table.Tr key={index}>
      <Table.Td ta="center">{record.Year}</Table.Td>
      <Table.Td ta="center">{record["Crop Name"]}</Table.Td>
      <Table.Td ta="center">{record["Crop Production (UOM:t(Tonnes))"] || "N/A"}</Table.Td>
      <Table.Td ta="center">{record["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] || "N/A"}</Table.Td>
      <Table.Td ta="center">{record["Area Under Cultivation (UOM:Ha(Hectares))"] || "N/A"}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table striped highlightOnHover withColumnBorders verticalSpacing="md">
      <Table.Thead>
        <Table.Tr>
          <Table.Th ta="center">Year</Table.Th>
          <Table.Th ta="center">Crop</Table.Th>
          <Table.Th ta="center">Production (t)</Table.Th>
          <Table.Th ta="center">Yield (Kg/Ha)</Table.Th>
          <Table.Th ta="center">Area (Ha)</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};

export default CropStatsTable;
