export type CropRecord = {
    Country: string;
    Year: string;
    "Crop Name": string;
    "Crop Production (UOM:t(Tonnes))": number | null;
    "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": number | null;
    "Area Under Cultivation (UOM:Ha(Hectares))": number | null;
  };
  
  export const mockData: CropRecord[] = [
    {
      Country: "India",
      Year: "Financial Year (Apr - Mar), 1950",
      "Crop Name": "CoarseCereals",
      "Crop Production (UOM:t(Tonnes))": 154,
      "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": 408,
      "Area Under Cultivation (UOM:Ha(Hectares))": 377,
    },
    {
      Country: "India",
      Year: "Financial Year (Apr - Mar), 1950",
      "Crop Name": "Coffee",
      "Crop Production (UOM:t(Tonnes))": null,
      "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": null,
      "Area Under Cultivation (UOM:Ha(Hectares))": null,
    },
    {
      Country: "India",
      Year: "Financial Year (Apr - Mar), 1950",
      "Crop Name": "CottonLint",
      "Crop Production (UOM:t(Tonnes))": 30,
      "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": 88,
      "Area Under Cultivation (UOM:Ha(Hectares))": 58.8,
    },
    {
      Country: "India",
      Year: "Financial Year (Apr - Mar), 1950",
      "Crop Name": "Groundnut",
      "Crop Production (UOM:t(Tonnes))": 35,
      "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": 775,
      "Area Under Cultivation (UOM:Ha(Hectares))": 44.9,
    },
    {
      Country: "India",
      Year: "Financial Year (Apr - Mar), 1950",
      "Crop Name": "Pulses",
      "Crop Production (UOM:t(Tonnes))": 84,
      "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": 441,
      "Area Under Cultivation (UOM:Ha(Hectares))": 191,
    },
    {
      Country: "India",
      Year: "Financial Year (Apr - Mar), 1950",
      "Crop Name": "RapeseedMustard",
      "Crop Production (UOM:t(Tonnes))": 8,
      "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": 368,
      "Area Under Cultivation (UOM:Ha(Hectares))": 20.7,
    },
    {
      Country: "India",
      Year: "Financial Year (Apr - Mar), 1950",
      "Crop Name": "RawJuteMesta",
      "Crop Production (UOM:t(Tonnes))": 33,
      "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": 1043,
      "Area Under Cultivation (UOM:Ha(Hectares))": 5.7,
    },
    {
      Country: "India",
      Year: "Financial Year (Apr - Mar), 1950",
      "Crop Name": "Rice",
      "Crop Production (UOM:t(Tonnes))": 206,
      "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": 668,
      "Area Under Cultivation (UOM:Ha(Hectares))": 308,
    },
    {
      Country: "India",
      Year: "Financial Year (Apr - Mar), 1950",
      "Crop Name": "Soyabean",
      "Crop Production (UOM:t(Tonnes))": null,
      "Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))": null,
      "Area Under Cultivation (UOM:Ha(Hectares))": null,
    },
  ];
  