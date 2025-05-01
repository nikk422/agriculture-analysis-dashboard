import { useEffect, useRef } from "react";
import * as echarts from 'echarts';

const  CropBarChart=(props:any)=> {
    const {mockData}=props
    const chartRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const avgData: Record<string, number[]> = {};
      mockData.forEach((yearData: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        Object.entries(yearData).forEach(([key, value]) => {
          if (key !== 'year') {
            if (!avgData[key]) avgData[key] = [];
            avgData[key].push(value as number);
          }
        });
      });
  
      const cropNames = Object.keys(avgData);
      const avgValues = cropNames.map((crop) => {
        const vals = avgData[crop];
        return vals.reduce((a, b) => a + b, 0) / vals.length;
      });
  
      const chart = echarts.init(chartRef.current!);
      chart.setOption({
        xAxis: {
          type: 'category',
          data: cropNames,
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: avgValues,
            type: 'bar',
          },
        ],
      });
  
      return () => {
        chart.dispose();
      };
    }, []);
  
    return <div ref={chartRef} style={{ height: 400, width: '100%' }} />;
  }
  
  export default CropBarChart