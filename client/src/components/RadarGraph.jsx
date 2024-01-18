import React from 'react';
import { Radar } from 'react-chartjs-2';
import faker from 'faker';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const generateRandomData = () => {
  return Array.from({ length: 6 }, () => faker.datatype.number({ min: 60, max: 100 }));
};

const data = {
  labels: ['Weight', 'Blood Pressure', 'Heart Rate', 'Oxygen Level', 'Thing 5', 'Thing 6'],
  datasets: [
    {
      label: 'Health Parameters',
      data: generateRandomData(),
      backgroundColor: 'rgba(235, 12, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    r: {
      max: 100,
      min: 0,
      stepSize: 20,
    },
  },
};




export function RadarGraph() {
  return <Radar data={data} options={options} style={{
    marginLeft:"250px"
  }} />;
}
