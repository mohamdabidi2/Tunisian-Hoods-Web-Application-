import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { withRouter } from "react-router-dom";

const ChartUsers = () => {
  const [chartData, setChartData] = useState({});


  const chart = async() => {
let UserPerDay=[]
let Days=[]
let colors=[]

let date=new Date()
let day=date.toISOString().substr(8,2)
let month=date.toISOString().substr(5,2)
let year=date.toISOString().substr(0,4)
await axios.post("/getChartUsers/"+month+"/"+day+"/"+year).then(res=>UserPerDay=res.data)
for(let i=0;i<day;i++){
  Days.push("DAY : "+(i+1))
colors.push("rgba("+(Math.random()*255|0)+","+ (Math.random()*255|0)+"," +(Math.random()*255|0) +",0.6)")

}


    setTimeout(() => {
      
    }, 3000);
        setChartData({
          labels: Days,
          datasets: [
            {
              label: "Users Per Day",
              data:UserPerDay ,
              backgroundColor: colors.reverse(),
              borderWidth: 4
            },
            {
              label: "WhiteList Application Accepted",
              data:[1,6,3,8,9,4,2,3] ,
              backgroundColor: colors,
              borderWidth: 4
            }
          ]
        });
      
   
    
  };

  useEffect(() => {
    chart();
  }, []);
  return (
    <div className="App">
  
      <div>
        <Line
          data={chartData}
          options={{
            responsive: true,
            title: { text: "Users", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: false,
                    maxTicksLimit: 10,
                    beginAtZero: true
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
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    </div>
  );
};

export default withRouter(ChartUsers) ;