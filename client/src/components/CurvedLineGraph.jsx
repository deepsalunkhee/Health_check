import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Heart Rate Over Time',
      },
    },
  };
  
  const generateRandomHeartRateData = () => {
    return Array.from({ length: 24 }, () => Math.floor(Math.random() * (100 - 60) + 60));
  };
  
  const hours = Array.from({ length: 24 }, (_, index) => index); // 0 to 23 hours
  
  const heartRateData = generateRandomHeartRateData();
  
  const data = {
    labels: hours.map(hour => `${hour}:00`),
    datasets: [
      {
        fill: true,
        label: 'Heart Rate',
        data: heartRateData,
        borderColor: 'rgb(255, 0, 0)', // Red color
        backgroundColor: 'rgba(255, 0, 0, 0.5)', // Red color with alpha (transparency)
        cubicInterpolationMode: 'monotone',
      },
    ],
  };
export function CurvedLineGraph() {
  return <Line options={options} data={data} />;
}
