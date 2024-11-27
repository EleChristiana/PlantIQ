
// Weather Forecasting Functionality
const api_Keys = "4d56a22b95c73115e60f728630443b59"; 
const api_Url = "http://api.openweathermap.org/data/2.5/weather";

// Elements
const locationInput = document.getElementById("location-input");
const getWeatherBtn = document.getElementById("get-weather-btn");
const weatherDetails = document.getElementById("weather-details");
const plantingRecommendations = document.getElementById("planting-recommendations");

// Crop Recommendations by State
const cropRecommendations = {
  Abia: ["Cassava", "Yam", "Rice", "Palm Oil", "Maize", "Vegetables", "Cocoyam", "Pepper", "Tomatoes", "Melon", "Banana", "Plantain", "Pineapple", "Sugarcane", "Okra"],
  Adamawa: ["Rice", "Groundnut", "Millet", "Maize", "Beans", "Sorghum", "Sesame", "Soybean", "Cotton", "Pepper", "Tomatoes", "Onion", "Garlic", "Cabbage", "Carrot"],
  AkwaIbom: ["Cassava", "Plantain", "Banana", "Oil Palm", "Yam", "Rice", "Vegetables", "Melon", "Tomatoes", "Pepper", "Pineapple", "Okra", "Mango", "Sugarcane", "Cocoyam"],
  Anambra: ["Cassava", "Yam", "Rice", "Palm Oil", "Plantain", "Vegetables", "Tomatoes", "Pepper", "Cocoyam", "Melon", "Banana", "Pineapple", "Okra", "Sugarcane", "Maize"],
  Bauchi: ["Rice", "Groundnut", "Millet", "Sorghum", "Maize", "Tomatoes", "Pepper", "Beans", "Onion", "Garlic", "Cabbage", "Carrot", "Sesame", "Soybean", "Cotton"],
  Bayelsa: ["Cassava", "Plantain", "Banana", "Yam", "Oil Palm", "Rice", "Melon", "Pepper", "Vegetables", "Tomatoes", "Okra", "Pineapple", "Sugarcane", "Cocoyam", "Maize"],
  Benue: ["Yam", "Rice", "Maize", "Sorghum", "Cassava", "Beans", "Groundnut", "Vegetables", "Pepper", "Tomatoes", "Melon", "Okra", "Pineapple", "Plantain", "Banana"],
  Borno: ["Millet", "Sorghum", "Rice", "Groundnut", "Maize", "Beans", "Sesame", "Cotton", "Pepper", "Tomatoes", "Onion", "Garlic", "Carrot", "Cabbage", "Wheat"],
  CrossRiver: ["Cassava", "Yam", "Plantain", "Banana", "Oil Palm", "Rice", "Melon", "Pepper", "Tomatoes", "Vegetables", "Pineapple", "Cocoyam", "Okra", "Maize", "Sugarcane"],
  Delta: ["Cassava", "Yam", "Plantain", "Banana", "Rice", "Palm Oil", "Pepper", "Tomatoes", "Cocoyam", "Vegetables", "Melon", "Okra", "Pineapple", "Maize", "Sugarcane"],
  Ebonyi: ["Rice", "Cassava", "Yam", "Cocoyam", "Maize", "Vegetables", "Tomatoes", "Pepper", "Palm Oil", "Melon", "Plantain", "Banana", "Okra", "Pineapple", "Sugarcane"],
  Edo: ["Cassava", "Yam", "Palm Oil", "Rice", "Plantain", "Banana", "Vegetables", "Pepper", "Tomatoes", "Melon", "Cocoyam", "Okra", "Pineapple", "Maize", "Sugarcane"],
  Ekiti: ["Yam", "Cassava", "Rice", "Palm Oil", "Maize", "Vegetables", "Tomatoes", "Pepper", "Melon", "Cocoyam", "Okra", "Plantain", "Banana", "Pineapple", "Sugarcane"],
  Enugu: ["Cassava", "Yam", "Palm Oil", "Rice", "Maize", "Vegetables", "Tomatoes", "Pepper", "Melon", "Cocoyam", "Okra", "Plantain", "Banana", "Pineapple", "Sugarcane"],
  Gombe: ["Millet", "Sorghum", "Rice", "Groundnut", "Maize", "Beans", "Sesame", "Cotton", "Pepper", "Tomatoes", "Onion", "Garlic", "Carrot", "Cabbage", "Wheat"],
  Imo: ["Cassava", "Yam", "Palm Oil", "Rice", "Maize", "Vegetables", "Tomatoes", "Pepper", "Melon", "Cocoyam", "Okra", "Plantain", "Banana", "Pineapple", "Sugarcane"],
  Jigawa: ["Millet", "Sorghum", "Rice", "Groundnut", "Maize", "Beans", "Sesame", "Cotton", "Pepper", "Tomatoes", "Onion", "Garlic", "Carrot", "Cabbage", "Wheat"],
  Kaduna: ["Maize", "Rice", "Tomatoes", "Pepper", "Beans", "Sorghum", "Millet", "Cassava", "Ginger", "Onion", "Potatoes", "Carrot", "Wheat", "Spinach", "Garlic"],
  Kano: ["Rice", "Groundnut", "Millet", "Sorghum", "Tomatoes", "Pepper", "Cabbage", "Carrot", "Onion", "Garlic", "Wheat", "Sesame", "Soybean", "Cotton", "Spinach"],
  Katsina: ["Millet", "Sorghum", "Rice", "Groundnut", "Maize", "Beans", "Sesame", "Cotton", "Pepper", "Tomatoes", "Onion", "Garlic", "Carrot", "Cabbage", "Wheat"],
  Kebbi: ["Rice", "Millet", "Sorghum", "Maize", "Groundnut", "Tomatoes", "Pepper", "Onion", "Garlic", "Beans", "Cotton", "Sesame", "Cabbage", "Carrot", "Wheat"],
  Kogi: ["Cassava", "Yam", "Rice", "Maize", "Palm Oil", "Vegetables", "Pepper", "Tomatoes", "Melon", "Okra", "Cocoyam", "Plantain", "Banana", "Pineapple", "Sugarcane"],
  Kwara: ["Cassava", "Yam", "Rice", "Palm Oil", "Maize", "Vegetables", "Tomatoes", "Pepper", "Melon", "Cocoyam", "Plantain", "Banana", "Pineapple", "Okra", "Sugarcane"],
  Lagos: ["Tomatoes", "Pepper", "Okra", "Cassava", "Cucumber", "Plantain", "Banana", "Maize", "Cocoyam", "Watermelon", "Pineapple", "Beans", "Spinach", "Pumpkin", "Vegetables"],
  Nasarawa: ["Rice", "Cassava", "Yam", "Maize", "Vegetables", "Beans", "Pepper", "Tomatoes", "Cocoyam", "Melon", "Plantain", "Banana", "Pineapple", "Okra", "Palm Oil"],
  Niger: ["Yam", "Cassava", "Rice", "Maize", "Beans", "Sorghum", "Pepper", "Tomatoes", "Melon", "Cocoyam", "Vegetables", "Plantain", "Banana", "Palm Oil", "Pineapple"],
  Ogun: ["Cassava", "Yam", "Rice", "Maize", "Palm Oil", "Vegetables", "Tomatoes", "Pepper", "Melon", "Cocoyam", "Plantain", "Banana", "Pineapple", "Okra", "Sugarcane"],
  Ondo: ["Cassava", "Yam", "Rice", "Palm Oil", "Cocoa", "Vegetables", "Tomatoes", "Pepper", "Melon", "Cocoyam", "Plantain", "Banana", "Pineapple", "Sugarcane", "Okra"],
  Osun: ["Yam", "Cassava", "Rice", "Palm Oil", "Maize", "Vegetables", "Tomatoes", "Pepper", "Melon", "Cocoyam", "Okra", "Plantain", "Banana", "Pineapple", "Sugarcane"],
   Oyo: ["Cassava", "Yam", "Rice", "Palm Oil", "Maize", "Vegetables", "Tomatoes"],
     Taraba: ["Rice", "Maize", "Yam", "Cassava", "Tomatoes", "Pepper", "Vegetables", "Palm Oil", "Cocoyam", "Okra", "Melon", "Plantain", "Banana"],
     Abuja: [
        "Maize (Corn)",
        "Rice",
        "Cassava",
        "Yam",
        "Soybeans",
        "Groundnuts (Peanuts)",
        "Cowpea (Beans)",
        "Vegetables (e.g., Tomatoes, Peppers)",
        "Okra",
        "Cucumber",
        "Sweet Potatoes",
        "Banana and Plantain",
        "Millet",
        "Melon (Egusi)",
        "Pineapple"
      ]

};

// Fetch Weather Data
async function fetchWeather(location) {
    try {
        const response = await fetch(`${api_Url}?q=${location}&appid=${api_Keys}&units=metric`);
        if (!response.ok) {
            throw new Error("Location not found");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        alert(error.message);
    }
}

// Display Weather Alerts and Recommendations
function displayWeatherInfo(data) {
    const { main, weather, name } = data;
    const temperature = main.temp;
    const condition = weather[0].description;

    // Display Weather Details
    weatherDetails.innerHTML = `
        <h3>Weather in ${name}</h3>
        <p><strong>Temperature:</strong> ${temperature}°C</p>
        <p><strong>Condition:</strong> ${condition}</p>
    `;

    // Provide Planting Recommendations
    const crops = getCropsByState(name, temperature);
    plantingRecommendations.innerHTML = `
        <h3>Planting Recommendations</h3>
        <p>The current weather is suitable for planting:</p>
        <ul>
            ${crops.map(crop => `<li>${crop}</li>`).join("")}
        </ul>
    `;
}

// Get Crops Based on State and Weather Conditions
function getCropsByState(state, temperature) {
    const crops = cropRecommendations[state];
    if (!crops) {
        return ["Crop recommendations are not available for this location."];
    }

    // Adjust crops based on temperature ranges
    if (temperature > 25) {
        return crops.slice(0, 15); // Heat-tolerant crops
    } else if (temperature > 15) {
        return crops.slice(5, 20); // Moderate-weather crops
    } else {
        return ["It's too cold for most crops. Consider using greenhouses or waiting for warmer weather."];
    }
}

// Event Listener for Fetching Weather
getWeatherBtn.addEventListener("click", async () => {
    const location = locationInput.value;
    if (!location) {
        alert("Please enter a location.");
        return;
    }

    const weatherData = await fetchWeather(location);
    if (weatherData) {
        displayWeatherInfo(weatherData);
    }
});



function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }