import React from "react";
import { Doughnut} from "react-chartjs-2";

const Chart = props => {
  const data = {
    labels: [
      "Gemiddeld moeilijk",
      "Gemiddeld leuk"
    ],
    datasets: [
      {
        data: props.dataSet,
        backgroundColor: ["rgba(242,109,61,1)", "rgba(242,148,65,1)"],
        borderWidth: 1,
        borderColor: "rgb(235, 245, 245)",
        hoverBorderWidth: 6,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        labels: {
          color: 'rgb(255, 99, 200)',
          boxHeight: 40,
        }
      },
    },
    cutout: 7,
    animation: {
      duration: 3000,
    }
  };
  return (
    <div >
      <Doughnut data={data} options={options} />
    </div>
  );
};


export default Chart;
