// Function to update soil types based on selected region
function updateSoilTypes() {
  const region = document.getElementById("regionSelect").value;
  const soilTypeSelect = document.getElementById("soilTypeSelect");
  soilTypeSelect.innerHTML = '<option value="">Choose soil type</option>'; // Reset options

  const soilTypesByRegion = {
    "Northern Nigeria": ["Sandy", "Clay", "Loam", "Laterite", "Alluvial", "Lithosols"],
    "Southern Nigeria": ["Loam", "Clay", "Silty", "Peaty", "Alluvial", "Humus-rich"],
    "Western Nigeria": ["Sandy", "Loamy", "Clay", "Laterite", "Gravelly", "Marshy"],
    "Eastern Nigeria": ["Silty", "Loamy", "Peaty", "Alluvial", "Clay-loam", "Humus-rich"]
  };

  if (soilTypesByRegion[region]) {
    soilTypesByRegion[region].forEach((soil) => {
      const option = document.createElement("option");
      option.value = soil;
      option.textContent = soil;
      soilTypeSelect.appendChild(option);
    });
  }
}

// Function to recommend crops based on selected soil type
function recommendCrops() {
  const soilType = document.getElementById("soilTypeSelect").value;
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ""; // Clear previous results

  if (!soilType) {
    resultDiv.textContent = "Please select a soil type to get recommendations.";
    return;
  }

  // Expanded crop recommendations based on soil type
  const cropRecommendations = {
    Sandy: [
      "Maize", "Millet", "Peanuts", "Cotton", "Sorghum", "Watermelon",
      "Carrots", "Sweet Potatoes", "Cowpeas"
    ],
    Clay: [
      "Rice", "Soybeans", "Wheat", "Sugarcane", "Paddy Rice", "Sunflowers",
      "Sugar Beet", "Sesame", "Tomatoes"
    ],
    Loam: [
      "Tomatoes", "Cabbage", "Pepper", "Yams", "Cassava", "Vegetables",
      "Maize", "Melons", "Beans"
    ],
    Laterite: [
      "Millet", "Sorghum", "Peas", "Cotton", "Groundnuts", "Shea Nut",
      "Maize", "Cassava", "Guava"
    ],
    Alluvial: [
      "Rice", "Sugarcane", "Plantains", "Bananas", "Maize", "Pineapple",
      "Oil Palm", "Vegetables", "Sweet Potatoes"
    ],
    Lithosols: [
      "Groundnuts", "Cowpeas", "Millet", "Cucumber", "Pumpkins",
      "Cotton", "Drought-resistant Plants"
    ],
    Silty: [
      "Wheat", "Sugarcane", "Rice", "Barley", "Vegetables", "Potatoes",
      "Beets", "Fruit Trees", "Bananas"
    ],
    Peaty: [
      "Carrots", "Lettuce", "Onions", "Celery", "Blueberries", "Cranberries",
      "Mushrooms", "Rhubarb", "Cabbage"
    ],
    Gravelly: [
      "Vineyards", "Olives", "Lavender", "Wildflowers", "Herbs",
      "Millet", "Sorghum", "Barley"
    ],
    Marshy: [
      "Rice", "Cranberries", "Lotus", "Watercress", "Marsh Grasses",
      "Water Spinach", "Taro"
    ],
    Humusrich: [
      "Tomatoes", "Pepper", "Onions", "Carrots", "Cabbage", "Kale",
      "Spinach", "Beans", "Eggplant"
    ]
  };

  const crops = cropRecommendations[soilType] || [];
  resultDiv.innerHTML = `<h3>Recommended Crops for ${soilType} Soil:</h3>`;
  const cropList = document.createElement("ul");
  crops.forEach((crop) => {
    const listItem = document.createElement("li");
    listItem.textContent = crop;
    cropList.appendChild(listItem);
  });
  resultDiv.appendChild(cropList);
}

// Function to download crop recommendation as a PDF
function downloadPDF() {
  const resultDiv = document.getElementById("result");
  if (resultDiv.innerHTML.trim() === "") {
    alert("Please get the recommended crops first.");
    return;
  }

  html2pdf()
    .from(resultDiv)
    .set({
      margin: 1,
      filename: 'crop_recommendations.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { orientation: 'portrait' }
    })
    .save();
}



function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
