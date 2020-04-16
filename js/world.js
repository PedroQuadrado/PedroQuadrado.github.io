const updatedTime = document.getElementById("updatedTime");
const table = document.getElementById("table");
let count = 0;
fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
    "x-rapidapi-key": "e3e3a5511dmshefad89e8918a57fp1accffjsn95215d1a0c73",
  },
})
  .then((resp) => resp.json())
  .then(function (data) {
    data.countries_stat.forEach((element) => {
      var row = table.insertRow(count);
      var cell0 = row.insertCell(0);
      var cell1 = row.insertCell(1);
      var cell2 = row.insertCell(2);
      var cell3 = row.insertCell(3);
      var cell4 = row.insertCell(4);
      var cell5 = row.insertCell(5);
      var cell6 = row.insertCell(6);
      cell0.innerHTML = element.country_name;
      cell1.innerHTML = element.cases;
      cell2.innerHTML = "+" + element.new_cases;
      cell3.innerHTML = element.active_cases;
      cell4.innerHTML = element.deaths;
      cell5.innerHTML = "+" + element.new_deaths;
      cell6.innerHTML = element.total_recovered;
      count++;
    });
    updatedTime.innerHTML = "UPDATED IN " + data.statistic_taken_at;
  });
