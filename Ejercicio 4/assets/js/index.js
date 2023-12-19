console.log("Entro a index.js")

const tbody = document.getElementById('tbody');
fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
.then(response => response.json())
.then(datosApi => {
  console.log(datosApi);
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['cases'],
      datasets: [{
        label: 'Casos COVID-19',
        data: datosApi.cases,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  labels.forEach(label => {
    console.log(label)
    
  });
  
});





