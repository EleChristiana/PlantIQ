const form = document.getElementById("cropForm");
const suggestionText = document.getElementById("suggestionText");
const ctx = document.getElementById("growthChart").getContext("2d");

// Example expected growth benchmarks (cm per week) for 10 weeks
const expectedGrowth = [5, 15, 30, 50, 75, 100, 130, 165, 200, 240];

// User-entered data
const userGrowthData = Array(10).fill(0); // Initialize with 0 for 10 weeks
const plantNames = [];
const weeks = [
  "Week 1", "Week 2", "Week 3", "Week 4", "Week 5",
  "Week 6", "Week 7", "Week 8", "Week 9", "Week 10"
];

// Initialize Chart
const growthChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: weeks,
    datasets: [
      {
        label: "Expected Growth (cm)",
        data: expectedGrowth,
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Actual Growth (cm)",
        data: userGrowthData,
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  },
});

// Handle Form Submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get user input
  const plantName = document.getElementById("plantName").value;
  const plantHeight = parseFloat(document.getElementById("plantHeight").value);
  const plantDate = new Date(document.getElementById("plantDate").value);

  // Calculate week number since planting
  const today = new Date();
  const weekNumber = Math.floor((today - plantDate) / (7 * 24 * 60 * 60 * 1000));

  if (weekNumber >= 0 && weekNumber < 10) {
    // Update user data
    userGrowthData[weekNumber] += plantHeight;

    // Update plant names
    if (!plantNames.includes(plantName)) plantNames.push(plantName);

    // Update chart
    growthChart.data.datasets[1].data = userGrowthData;
    growthChart.update();

    // Provide suggestions
    const expected = expectedGrowth[weekNumber];
    const actual = userGrowthData[weekNumber];

    if (actual < expected - 10) {
      suggestionText.textContent = `Your ${plantName} is growing slower than expected. Ensure adequate watering and check for pests.`;
    } else if (actual > expected + 10) {
      suggestionText.textContent = `Your ${plantName} is growing faster than expected! Maintain current practices but monitor for overgrowth.`;
    } else {
      suggestionText.textContent = `Your ${plantName} is growing as expected. Keep up the good work!`;
    }
  } else {
    suggestionText.textContent = "Invalid week for data entry. Ensure the planting date is correct.";
  }

  // Clear form
  form.reset();
});


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}