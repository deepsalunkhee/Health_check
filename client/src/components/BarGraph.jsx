import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Blood Pressure and Temperature Chart',
      },
    },
  };
  
  const labels = ['1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Blood Pressure (mmHg)',
        data: labels.map(() => faker.datatype.number({ min: 80, max: 120 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Temperature (°C)',
        data: labels.map(() => faker.datatype.number({ min: 36, max: 37.5 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

export const BarGraph = () => {
  return <Bar options={options} data={data} />;
};
