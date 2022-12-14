// const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
// const yValues = [55, 49, 44, 24, 15];
const barColors = ["red", "green", "blue", "orange", "brown"], dayColor = "hsl(10, 79%, 65%)", 
todayColor = "hsl(186, 34%, 60%)";

async function getJson() {
  const response = await fetch('data.json');
  const json = await response.json();
  let days = [], vals = [];

  days = json.map(item => item.day);

  json.forEach(item => {
    vals.push(item.amount);
  });

  return {
    days, vals
  }
}

const dayName = date => [
  'sun',
  'mon',
  'tue',
  'wed',
  'thu',
  'fri',
  'sat',
  'sun',
][new Date(date).getDay()];
const dayNameVal = dayName(new Date());

const myChart = async (fn) => {
  const { days, vals } = await fn();
  const backgroundColor = [];

  for (let i = 0; i < days.length; i++) {
    if (days[i] === dayNameVal) {
      backgroundColor.push(todayColor);
    }
    else{
      backgroundColor.push(dayColor);
    }    
  }
  console.log(dayNameVal);

  new Chart("myChart", {
    theme: "light2",
    type: "bar",
    data: {
      labels: days,
      datasets: [{
        backgroundColor: backgroundColor,
        // borderColor: 'orange',
        borderRadius: 40,
        // borderWidth: 1,
        borderSkipped: false,
        data: vals
      }]
    },
    options: {
      legend: {
        display: false
      },
      title: {
        display: false,
        // text: "World Wine Production 2018"
      },
      tooltips: {
        enabled: true,
        mode: 'single',
        yAlign: 'bottom',
        callbacks: {
          title: () => null,
          label: function (tooltipItems) {
            return '$' + tooltipItems.yLabel;
          }
        }
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
            drawBorder: false,
            // color: "black"
          },
          ticks: {
            fontColor: "hsl(28, 10%, 53%)", // <-- Color de labels eje X
            fontSize: 14
          }
          // scaleLabel: {
          //   display: true,
          //   labelString: "Time in Seconds",
          //   fontColor: "red"
          // }
        }],
        yAxes: [{
          gridLines: {
            display: false,
            drawBorder: false,
            // borderDash: [0, 0],
          },
          ticks: {
            display: false,
            beginAtZero: true,
            max: 60,
            stepSize: 5
          }
        }]
      }
    }
  });
}

myChart(getJson);
