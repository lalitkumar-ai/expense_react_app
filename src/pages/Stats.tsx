import React, { useMemo } from 'react';
import { ITransaction } from '../types/ITransaction';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

// Register the components you will use from Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

interface StatsProps {
  transactions: ITransaction[];
}

// Helper function to generate random colors for the chart
const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return {
    background: `rgba(${r}, ${g}, ${b}, 0.2)`,
    border: `rgba(${r}, ${g}, ${b}, 1)`,
  };
};

const Stats: React.FC<StatsProps> = ({ transactions }) => {

  // Memoize chart data calculations to avoid re-computing on every render
  const { doughnutChartData, barChartData } = useMemo(() => {
    const expenseByCategory: { [key: string]: number } = {};
    let totalIncome = 0;
    let totalExpenses = 0;

    transactions.forEach(t => {
      if (t.amount < 0) {
        const expenseAmount = Math.abs(t.amount);
        totalExpenses += expenseAmount;
        expenseByCategory[t.category] = (expenseByCategory[t.category] || 0) + expenseAmount;
      } else {
        totalIncome += t.amount;
      }
    });

    const labels = Object.keys(expenseByCategory);
    const data = Object.values(expenseByCategory);
    const colors = labels.map(() => generateRandomColor());

    // Data for Doughnut Chart (Expense Breakdown)
    const newDoughnutChartData = {
      labels: labels,
      datasets: [
        {
          label: 'Expenses by Category',
          data: data,
          backgroundColor: colors.map(c => c.background),
          borderColor: colors.map(c => c.border),
          borderWidth: 1,
        },
      ],
    };

    // Data for Bar Chart (Income vs. Expense)
    const newBarChartData = {
      labels: ['Financial Flow'],
      datasets: [
        {
          label: 'Income',
          data: [totalIncome],
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
        {
          label: 'Expenses',
          data: [totalExpenses],
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };

    return { doughnutChartData: newDoughnutChartData, barChartData: newBarChartData };
  }, [transactions]);


  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Financial Statistics</h1>
      {transactions.length > 0 ? (
        <div className="row">
          {/* Doughnut Chart Card */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-center">Expense Breakdown</h5>
                 {doughnutChartData.labels.length > 0 ? (
                  <Doughnut data={doughnutChartData} />
                 ) : (
                  <p className="text-center mt-3">No expense data available to display.</p>
                 )}
              </div>
            </div>
          </div>

          {/* Bar Chart Card */}
          <div className="col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-center">Income vs. Expenses</h5>
                <Bar 
                  data={barChartData} 
                  options={{
                    responsive: true,
                    plugins: {
                      legend: { position: 'top' as const },
                      title: { display: true, text: 'Total Income and Expenses' },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center">No transactions to display statistics.</p>
      )}
    </div>
  );
};

export default Stats;