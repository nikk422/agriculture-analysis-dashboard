// components/AggregatedCropTable.tsx
import { Table } from "@mantine/core";
import { CropRecord } from "../../constant";

type Props = {
  mockData: CropRecord[];
};

type AggregatedRow = {
  year: string;
  maxCrop: string;
  minCrop: string;
};

const AggregatedCropTable = ({ mockData }: Props) => {
  const yearlyGroups = new Map<string, CropRecord[]>();

  mockData.forEach((record) => {
    const year = record.Year;
    if (!yearlyGroups.has(year)) {
      yearlyGroups.set(year, []);
    }

    // Only consider crops with numeric production
    if (record["Crop Production (UOM:t(Tonnes))"] !== "") {
      yearlyGroups.get(year)!.push(record);
    }
  });

  const aggregatedData: AggregatedRow[] = Array.from(yearlyGroups.entries()).map(([year, records]) => {
    let maxCrop = "";
    let minCrop = "";
    let maxProduction = -Infinity;
    let minProduction = Infinity;

    records.forEach((record) => {
      const production = record["Crop Production (UOM:t(Tonnes))"] as number;

      if (production > maxProduction) {
        maxProduction = production;
        maxCrop = record["Crop Name"];
      }

      if (production < minProduction) {
        minProduction = production;
        minCrop = record["Crop Name"];
      }
    });

    return { year, maxCrop, minCrop };
  });

  const rows = aggregatedData.map(({ year, maxCrop, minCrop }) => (
    <Table.Tr key={year}>
      <Table.Td ta="center">{year}</Table.Td>
      <Table.Td ta="center">{maxCrop}</Table.Td>
      <Table.Td ta="center">{minCrop}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table striped highlightOnHover withColumnBorders verticalSpacing="md">
      <Table.Thead>
        <Table.Tr>
          <Table.Th ta="center">Year</Table.Th>
          <Table.Th ta="center">Crop with Maximum Production</Table.Th>
          <Table.Th ta="center">Crop with Minimum Production</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};

export default AggregatedCropTable;
