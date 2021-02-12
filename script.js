fetch('https://disease.sh/v3/covid-19/all')
  .then(response => response.json())
  .then(function (data) {
    document.getElementById("totalcases").innerHTML = data.cases;
    document.getElementById("totaldeaths").innerHTML = data.deaths;

    new Chart(document.getElementById("bar-chart1"), {
      type: 'bar',
      data: {
        labels: ["Today confirmed cases","Today confirmed deaths"],
        datasets: [
          {
            backgroundColor: ["#780000", "#A00000"],
            data: [data.todayCases,data.todayDeaths],
            maxBarThickness: 100,
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Today confirmed cases vs Today confirmed deaths'
        },
      }
    });
});

fetch('https://api.apify.com/v2/key-value-stores/yaPbKe9e5Et61bl7W/records/LATEST?disableRedirect=true')
  .then(response => response.json())
  .then(function (data) {
    new Chart(document.getElementById("bar-chart2"), {
      type: 'bar',
      data: {
        labels: ["SG Active Cases"," SG Total Deceased"],
        datasets: [
          {
            backgroundColor: ["#780000", "#A00000"],
            data: [data["activeCases"],data["deceased"]],
            maxBarThickness: 100,
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'SG Active Cases and SG Total Deceased'
        },
      }
    });
});
