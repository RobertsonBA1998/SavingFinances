import React from "react";

import { Chart } from "react-google-charts";

const Homepage = () => {
 return (
  <div>
   <h1 className="text-center">Welcome to the Homepage</h1>
   <Chart
    chartType="ScatterChart"
    data={[
     ["Age", "Weight"],
     [20, 190],
     [22, 200],
     [24, 219],
     [25, 250],
    ]}
    width="100%"
    height="400px"
    legendToggle
   />
  </div>
 );
};

export default Homepage;
