window.onload = function() {
    // Get the canvas element where the chart will be rendered
    var ctx = document.getElementById("pie-chart").getContext("2d");
    
    // Create a new Pie Chart using Chart.js
    var myPieChart = new Chart(ctx, {
        type: 'pie', // The chart type
        data: {
            labels: ['Success', 'Failure'], // Labels for the pie chart
            datasets: [{
                data: [95, 5], // Success rate (95%) and Failure rate (5%)
                backgroundColor: ['#388e3c', '#d32f2f'], // Colors for success and failure
            }]
        },
        options: {
            responsive: true, // Make the chart responsive to window size
            plugins: {
                legend: {
                    position: 'top', // Position of the legend
                },
                tooltip: {
                    enabled: true, // Enable tooltips for chart data
                }
            }
        }
    });
};
