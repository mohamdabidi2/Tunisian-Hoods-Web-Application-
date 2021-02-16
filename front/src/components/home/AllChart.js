import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';


const AllChart = () => {
  const [CharData, setCharData] = useState({})
  const [UserPerDay, setUserPerDay] = useState([])
  useEffect(() => {

    let Days = []
    let users = []
    let date = new Date()
    let day = date.toISOString().substr(8, 2)
    let month = date.toISOString().substr(5, 2)
    let year = date.toISOString().substr(0, 4)
    axios.post("/getChartUsers/" + month + "/" + day + "/" + year).then(res => setUserPerDay(res.data))
    for (let i = 0; i < day; i++) {
      Days.push("day n°: " + (i + 1))
      users = UserPerDay
    }
    setCharData(
      {
        labels: Days,
        datasets: [
          {
            label: 'Users',
            data: users,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)'
            ]
          }
        ]
      }
    )
  }, [])
  return (<div>
    <Line
      data={CharData}
      options={{
        responsive: true,
        title: {
          display: true,
          text: "User Per Day",
          fontSize: 25
        },
        legend: {
          display: true,
          position: "right"
        },
        scales: {
          yAxes: [
            {
              ticks: {
                autoSkip: false,
                maxTicksLimit: 3,
                beginAtZero: false
              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                autoSkip: true,
                maxTicksLimit: 10,
                beginAtZero: false
              },
              gridLines: {
                display: true
              }
            }
          ]
        }
      }}

    />
    <p>1</p>
  </div>);
}

export default AllChart;
