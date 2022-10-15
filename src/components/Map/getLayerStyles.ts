import type { FillLayer } from "react-map-gl";

export const linearHeatMapColors = [
  "#94f80b",
  "#93ff00",
  "#75e41c",
  "#54c527",
  "#40b02a",
  "#2c9b2a",
  "#198729",
  "#047326",
];

export const getStops = (a: number, b: number): [number, string][] => {
  const diff = (b - a) / 7;
  return Array.from({ length: 8 }, (v, i) => [
    diff * i,
    linearHeatMapColors[i],
  ]);
};

// property -> values on the geojson
const getLayerStyles = (
  property: string,
  min: number,
  max: number
): FillLayer => {
  return {
    id: "data",
    source: "my-data",
    type: "fill",
    paint: {
      "fill-outline-color": "rgb(52,51,50)",
      "fill-color": {
        property,
        stops: getStops(min, max),
      },
    },
  };
};

export default getLayerStyles;
