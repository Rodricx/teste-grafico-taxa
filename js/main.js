const ctx = document.getElementById('myChart');
  const labels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const data = [12.82, 12.99, 13.26, 13.36, 13.47, 13.52, 13.57, 13.53, 13.42, 13.40, 13.29, 13.12];

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: '# of Votes',
        backgroundColor: 'rgba(75, 192, 192, 0.7)',
        data: data,
        borderWidth: 2
      }]
    },
    options: {
      cales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });