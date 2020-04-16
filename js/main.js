const totalCases = document.getElementById("totalCases");
const newCases = document.getElementById("newCases");
const deaths = document.getElementById("deaths");
const recoved = document.getElementById("recoved");
const updatedTime = document.getElementById("updatedTime");

fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
    "x-rapidapi-key": "e3e3a5511dmshefad89e8918a57fp1accffjsn95215d1a0c73",
  },
})
  .then((resp) => resp.json())
  .then(function (data) {
    updatedTime.innerHTML = "UPDATED IN " + data.statistic_taken_at;
    totalCases.innerHTML = data.world_total.total_cases;
    newCases.innerHTML = data.world_total.new_cases;
    deaths.innerHTML = data.world_total.total_deaths;
    recoved.innerHTML = data.world_total.total_recovered;
  });
