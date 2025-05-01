import { Badge, Table } from "@mantine/core";
import { CropRecord } from "../../constant";

type Props = {
  mockData: CropRecord[];
};

const CropStatsTable = ({ mockData }: Props) => {
  const productionKey = "Crop Production (UOM:t(Tonnes))";

  // Calculate max and min production per year
  const yearStats: Record<string, { max: number; min: number }> = {};

  mockData.forEach((item) => {
    const year = item.Year;
    const value = Number(item[productionKey]) || 0;

    if (!yearStats[year]) {
      yearStats[year] = { max: value, min: value };
    } else {
      yearStats[year].max = Math.max(yearStats[year].max, value);
      if (value > 0) {
        yearStats[year].min =
          yearStats[year].min === 0
            ? value
            : Math.min(yearStats[year].min, value);
      }
    }
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


      <Table.Tbody>
        {mockData.map((record, index) => {
          const year = record.Year;
          const production = Number(record[productionKey]) || 0;
          const { max, min } = yearStats[year] || { max: 0, min: 0 };

          return (
            <Table.Tr key={index}>
              <Table.Td ta="center">{year}</Table.Td>
              <Table.Td ta="center">{record["Crop Name"]}</Table.Td>
              <Table.Td ta="center">
                {production || "N/A"}{" "}
                {production === max && <Badge color="green">Max</Badge>}
                {production === min && <Badge color="red">Min</Badge>}
              </Table.Td>
              <Table.Td ta="center">
                {record["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] ||
                  "N/A"}
              </Table.Td>
              <Table.Td ta="center">
                {record["Area Under Cultivation (UOM:Ha(Hectares))"] || "N/A"}
              </Table.Td>
            </Table.Tr>
          );
        })}
      </Table.Tbody>

    </Table>
  );
};

export default CropStatsTable;
