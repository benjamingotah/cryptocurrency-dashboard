// import React, { useEffect, useRef } from 'react';
// import { Chart, registerables } from 'chart.js';
// import './Chart.css';

// Chart.register(...registerables);

// const ChartComponent = ({ data, type }) => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     if (data.length > 0 && chartRef.current) {
//       const ctx = chartRef.current.getContext('2d');
//       const chart = new Chart(ctx, {
//         type: type === 'crypto' ? 'bar' : 'line',
//         data: {
//           labels: data.map(item => item.symbol),
//           datasets: [{
//             label: type === 'crypto' ? 'Price (USD)' : 'Change (%)',
//             data: data.map(item => type === 'crypto' ? item.price : item.change),
//             backgroundColor: type === 'crypto' ? 'rgba(54, 162, 235, 0.6)' : data.map(item => 
//               item.change >= 0 ? 'rgba(75, 192, 192, 0.6)' : 'rgba(255, 99, 132, 0.6)'
//             ),
//             borderColor: type === 'crypto' ? 'rgba(54, 162, 235, 1)' : data.map(item => 
//               item.change >= 0 ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)'
//             ),
//             borderWidth: 1
//           }]
//         },
//         options: {
//           responsive: true,
//           plugins: {
//             title: {
//               display: true,
//               text: type === 'crypto' ? 'Cryptocurrency Prices' : 'Stock Performance'
//             }
//           },
//           scales: {
//             y: {
//               beginAtZero: type === 'crypto' ? false : true
//             }
//           }
//         }
//       });

//       return () => chart.destroy();
//     }
//   }, [data, type]);

//   return <canvas ref={chartRef}></canvas>;
// };

// export default ChartComponent;


import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import './Chart.css';

Chart.register(...registerables);

const ChartComponent = ({ data = [], type = 'crypto', options = {} }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data.length > 0 && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      const chart = new Chart(ctx, {
        type: 'line', // Always use a line chart
        data: {
          labels: data.map(item => item.symbol),
          datasets: [{
            label: type === 'crypto' ? 'Price (USD)' : 'Change (%)',
            data: data.map(item => type === 'crypto' ? item.price : item.change),
            backgroundColor: type === 'crypto' ? 'rgba(54, 162, 235, 0.6)' : data.map(item => 
              item.change >= 0 ? 'rgba(75, 192, 192, 0.6)' : 'rgba(255, 99, 132, 0.6)'
            ),
            borderColor: type === 'crypto' ? 'rgba(54, 162, 235, 1)' : data.map(item => 
              item.change >= 0 ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)'
            ),
            borderWidth: 1,
            fill: false // Ensure the line chart is not filled
          }]
        },
        options: {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: type === 'crypto' ? 'Cryptocurrency Prices' : 'Stock Performance'
            }
          },
          scales: {
            y: {
              beginAtZero: type === 'crypto' ? false : true
            }
          },
          ...options // Allow custom options to override defaults
        }
      });

      return () => chart.destroy();
    }
  }, [data, type, options]);

  if (data.length === 0) {
    return <div>No data available</div>;
  }

  return <canvas ref={chartRef} aria-label={`${type} chart`}></canvas>;
};

export default ChartComponent;