import React from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Text } from "react-native";

import { getDataFromAPI } from "./data";

export const Chart = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    getDataFromAPI().then(setData);
  }, []);

  if (data === null) {
    return <Text>Loading...</Text>;
  }

  return (
    <LineChart
      data={{
        labels: data.labels,
        datasets: [
          {
            data: data.values,
          },
        ],
      }}
      width={Dimensions.get("window").width - 20}
      height={220}
      yAxisLabel="Label X"
      yAxisSuffix="Y"
      yAxisInterval={1}
      chartConfig={{
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726",
        },
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  );
};
