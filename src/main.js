// const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
// const yValues = [55, 49, 44, 24, 15];
const barColors = ["red", "green", "blue", "orange", "brown"], dayColor = "hsl(10, 79%, 65%)", todayColor = "hsl(186, 34%, 60%)";

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

// console.log(dayName(new Date()));

const myChart = async (fn) => {
  const { days, vals } = await fn();
  // const numberDay = new Date().getDate();
  // const today = fecha.getDate();

  // const dayName = date =>days[new Date(date).getDay()];

  console.log(dayName(new Date()));
  console.log(days);

  console.log(dayName(new Date()) ? true : false);

  new Chart("myChart", {
    theme: "light2",
    type: "bar",
    data: {
      labels: days,
      datasets: [{
        backgroundColor: dayName(new Date()) ? todayColor : dayColor,
        // borderColor: 'orange',
        cornerRadius: 40,
        borderWidth: 1,
        borderSkipped: false,
        // backgroundColor: barColors,
        data: vals
      }]
    },
    options: {
      title: {
        display: false,
        // text: "World Wine Production 2018"
      },
      tooltips: {
        yAlign: 'bottom',
        callbacks: {
          labels: function (context) {
            let label = context.dataset.label || '';

            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
            }
            console.log(label);
            return label;
          }
        },
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
            fontSize: 11
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
            stepSize: 10
          }
        }],
      }
    }
  });
}

myChart(getJson);
