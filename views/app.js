// refernece variable to canvas
const canvasRef = document.getElementById("chart");

// create the chart instance
let myChart = new Chart(canvasRef, {
  type:"bar",
  data: {

    // labels
    labels: ["Kit-Kat", "Hersey's", "Whoppers"],

    // datasets (only need one min)
    datasets: [
      {
        label: "Candy Sold",
        data:[5,12,1],
        //backgroundColor: ["#00000050", "#25fh2850", "#efefef50"]
        backgroundColor: "#53ed3440",
        borderColor: "#efefef",
        barThickness: 75,
        hoverBackgroundColor: "#efefef",
      },
    ],
  },
});


// create an object for storing chart info

const allCharts = {
  
  bar: {
    name: "Bar",
    config: {
      type: "bar",
      data: {
        labels: ["Kit-Kat", "Hersey's", "Whoppers"],
        datasets: [
          {
            label: "Candy Sold",
            data:[5,12,1],
            backgroundColor: "#53ed3440",
            borderColor: "#efefef",
            barThickness: 75,
            hoverBackgroundColor: "#efefef",
          },
        ],
        options: {
          scales: {
            y: {
              min: 0,
              max: 20, 
            }
          }
        }
      },
    }
  },

  pie: {
    name: "Pie",
    config: {
      type: "pie",
      data: {
        labels: ["Kit-Kat", "Hersey's", "Whoppers"],
        datasets: [
          {
            label: "Candy Sold",
            data:[5,12,1],
          },
        ],
      },
    },
  },

  line: {
    name: "Line",
    config: {
      type: "line",
      data: {
        labels: ["Kit-Kat", "Hersey's", "Whoppers"],
        datasets: [
          {
            label: "Candy Sold",
            data:[5,12,1],
          },
        ],
      },
    },
  },

  radar: {
    name: "radar",
    config: {
      type: "radar",
      data: {
        labels: ["Kit-Kat", "Hersey's", "Whoppers"],
        datasets: [
          {
            label: "Candy Sold",
            data:[5,12,1],
          },
        ],
      },
    },
  },

  bubble: {
    name: "bubble",
    config: {
      type: "bubble",
      data: {
        labels: ["Kit-Kat", "Hersey's", "Whoppers"],
        datasets: [
          {
            label: "Candy Sold",
            data:[{
              x: 5,
              y: 12,
              r: 1,
            }, {
              x: 40,
              y: 10,
              r: 10,
            }],
            label: "Candy Bought",
            data:[{
              x: 1,
              y: 35,
              r: 5,
            }, {
              x: 20,
              y: 15,
              r: 4,
            }],
          },
        ],
      },
    },
  },
}

Object.values(allCharts).forEach(function (chart) {
  const newButton = document.createElement("button");
  newButton.innerHTML = `Show ${chart.name} Chart`;
  newButton.onclick = function () {
    console.log(chart.name);
    myChart.destroy();
    myChart = new Chart (canvasRef, chart.config); 
  };
  document.querySelector("#chartButtons").appendChild(newButton);
});

function removeDatapoint() {
  myChart.data.labels.pop();
  myChart.update();
}

function addDatapoint() {
  
  const numValue = document.getElementById("num").value;
  const labelValue = document.getElementById("label").value;

  myChart.data.labels.push(labelValue);
  myChart.data.datasets[0].data.push(numValue);
  myChart.update();
}