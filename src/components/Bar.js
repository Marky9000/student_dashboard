
import React from "react";
import { Bar } from "react-chartjs-2";

const Chart = ({ chartTitle, xLabels, set1Data, set2Data }) => {
  const data = {
    labels: xLabels,
    datasets: [
      {
        label: "Moeilijk",
        data: set1Data,
        backgroundColor: "rgba(122,191,191,1)",
        borderWidth: 1,
        hoverBorderWidth: 3,
        hoverBorderColor: "rgba(242,148,65,1)",
      },
      {
        label: "Leuk",
        data: set2Data,
        backgroundColor: "rgba(31,78,140,1)",
        borderWidth:1 ,
        hoverBorderWidth: 3,
        hoverBorderColor: "rgba(242,148,65,1)",
       
      },
    ],
  };

  const options = {

    plugins: {
      title: {
        display: true,
        text: chartTitle,
        color: "rgba(242,148,65,1)",
        font: {
          size: 20
        },
        padding: {
          top: 10,
          bottom: 30
      }
       
    },
      legend: {
     
        display: true,
          labels: {
            color:"rgba(242,148,65,1)",
            boxHeight: 40,   font: {
          size: 15
        },
    
          }
      }
  },

    scales: {
      yAxes: [
        {gridLines: {
          display: false
       },
          ticks: {
            beginAtZero: true,
            max: 5,
          },
        },
      ],
     
    },
  };


  return (<div >
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
