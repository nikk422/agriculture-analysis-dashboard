import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { CropRecord } from "../../constant";

type Props = {
  mockData: CropRecord[];
};

const CropBarChart = ({ mockData }: Props) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cropTotals: Record<string, { sum: number; count: number }> = {};

    mockData.forEach((entry) => {
      const crop = entry["Crop Name"];
      const production = entry["Crop Production (UOM:t(Tonnes))"];

      if (typeof production === "number") {
        if (!cropTotals[crop]) {
          cropTotals[crop] = { sum: 0, count: 0 };
        }
        cropTotals[crop].sum += production;
        cropTotals[crop].count += 1;
      }
    });

    const cropNames = Object.keys(cropTotals);
    const avgProductions = cropNames.map(
      (crop) => cropTotals[crop].sum / cropTotals[crop].count
    );

    const chart = echarts.init(chartRef.current!);
    chart.setOption({
      title: {
        left: "center",
      },
      tooltip: {},
      xAxis: {
        type: "category",
        data: cropNames,
        axisLabel: {
          interval: 0,
          rotate: 20,
        },
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: avgProductions,
          type: "bar",
          itemStyle: {
            color: "#4dabf7",
          },
        },
      ],
    });

    return () => {
      chart.dispose();
    };
  }, [mockData]);

  return <div ref={chartRef} style={{ height: 400, width: "100%" }} />;
};

export default CropBarChart;
