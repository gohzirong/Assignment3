let url = 'https://disease.sh/v3/covid-19/all';

fetch(url)
  .then(response => response.json())
  .then(function (data) {
    console.log(data.cases);
    console.log(data.todayCases);
    console.log(data.deaths);
    console.log(data.todayDeaths);
    console.log(data.recovered);
    console.log(data.todayRecovered);
    document.getElementById("totalCases").innerHTML = data.cases;
    document.getElementById("totalDeaths").innerHTML = data.deaths;
    document.getElementById("todayCases").innerHTML = data.todayCases;
    document.getElementById("todayDeaths").innerHTML = data.todayDeaths;
  });