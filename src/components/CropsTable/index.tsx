import { Badge, Table } from "@mantine/core";
import { CropRecord } from "../../constant";

type Props = {
  mockData: CropRecord[];
};

const CropStatsTable = ({ mockData }: Props) => {
  const groupedByYear: { [year: string]: CropRecord[] } = {};
  
  mockData.forEach((record) => {
    const year = record.Year;
    if (!groupedByYear[year]) groupedByYear[year] = [];
    groupedByYear[year].push(record);
  });

  const yearMaxMin: { [year: string]: { max: number; min: number } } = {};

  for (const year in groupedByYear) {
    const productions: number[] = [];
    for (const record of groupedByYear[year]) {
      const production = Number(record["Crop Production (UOM:t(Tonnes))"]) || 0;
      if (production > 0) productions.push(production);
    }
    
    yearMaxMin[year] = {
      max: Math.max(...productions),
      min: productions.length > 0 ? Math.min(...productions) : 0,
    };
  }

  // Map data into table rows
  const rows = mockData.map((record, index) => {
    const year = record.Year;
    const production = Number(record["Crop Production (UOM:t(Tonnes))"]) || 0;

    return (
      <Table.Tr key={index}>
        <Table.Td ta="center">{record.Year}</Table.Td>
        <Table.Td ta="center">{record["Crop Name"]}</Table.Td>
        <Table.Td ta="center">
          {production || "N/A"}
          {production > 0 && (
            production === yearMaxMin[year].max ? (
              <Badge color="green">Max</Badge>
            ) : production === yearMaxMin[year].min ? (
              <Badge color="red">Min</Badge>
            ) : null
          )}
        </Table.Td>
        <Table.Td ta="center">
          {record["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] || "N/A"}
        </Table.Td>
        <Table.Td ta="center">
          {record["Area Under Cultivation (UOM:Ha(Hectares))"] || "N/A"}
        </Table.Td>
      </Table.Tr>
    );
  });

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
