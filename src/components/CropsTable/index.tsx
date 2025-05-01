import { Table } from "@mantine/core";

type CropData = {
    wheat: number;
    rice: number;
    maize: number;
  };
  
const  CropStatsTable= (props:any) => {
    const {mockData}=props
    const rows = mockData.map((row: { [x: string]: any; year: any; }) => {
      const { year, ...crops } = row;
      const entries = Object.entries(crops);
      const maxCrop = entries.reduce((a, b) => (a[1] > b[1] ? a : b))[0];
      const minCrop = entries.reduce((a, b) => (a[1] < b[1] ? a : b))[0];
      return (
        <tr key={year}>
        <td style={{ textAlign: 'center' }}>{year}</td>
        <td style={{ textAlign: 'center' }}>
        {maxCrop}: {crops[maxCrop as keyof CropData]}
        </td>
        <td style={{ textAlign: 'center' }}>
        {minCrop}: {crops[minCrop as keyof CropData]}
        </td>
      </tr>
      );
    });
  
    return (
      <Table striped highlightOnHover withColumnBorders verticalSpacing="md">
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}>Year</th>
            <th style={{ textAlign: 'center' }}>Max Crop</th>
            <th style={{ textAlign: 'center' }}>Min Crop</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    );
  }
  
  export default CropStatsTable