import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {GraphStyle} from "./style";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Project 1', 'Project2'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 10],
      backgroundColor: [
        '#FFC107',
        '#6497B1',
        // '#A259FF',
        // '#F24E1E',
      ],
      borderColor: [
        '#FFC107',
        '#6497B1',
        // '#A259FF',
        // '#F24E1E',
      ],
      borderWidth: 1,
    },
  ],
};

const Graph = () =>{
  return <GraphStyle>
    <Doughnut data={data} />
  </GraphStyle>
}

export default  Graph;
