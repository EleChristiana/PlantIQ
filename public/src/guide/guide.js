
// let toggle = document.getElementById('toggleDark');
// let body = document.querySelector('body');

// toggle.addEventListener('click', function(){
//   this.classList.toggle('fa-moon');
//   if(this.classList.toggle('fa-sun')){
//     body.style.background = 'white';
//     body.style.color = 'black';
//     body.style.transition ='2s';
//     body.style.boxShadow.color = "black"
//   } else{
//     body.style.background = 'black';
//     body.style.color = 'black';
//     body.style.transition ='2s';
//   }


// })




const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach(collapsible => {
    collapsible.addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});

// Download Guidelines as PDF
document.getElementById("download-btn").addEventListener("click", function() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Modernized Home Gardening Guide", 10, 10);

  doc.setFontSize(12);
  let yPosition = 30;

  // Function to add text with page break if necessary
  function addTextWithPageBreak(text, yPos) {
      if (yPos > doc.internal.pageSize.height - 20) { // Check if it's nearing the bottom of the page
          doc.addPage(); // Add a new page
          yPos = 10; // Reset yPosition for the new page
      }
      doc.text(text, 10, yPos);
      return yPos + 10; // Return updated yPosition
  }

  // Planting Fruits in Containers
  yPosition = addTextWithPageBreak("Planting Fruits in Containers", yPosition);
  yPosition = addTextWithPageBreak("- Fruit Types: Choose dwarf varieties like strawberries, tomatoes, and citrus trees.", yPosition);
  yPosition = addTextWithPageBreak("- Soil: Use a well-drained potting mix with added compost.", yPosition);
  yPosition = addTextWithPageBreak("- Watering: Water frequently but avoid waterlogging.", yPosition);
  yPosition = addTextWithPageBreak("- Fertilization: Use slow-release fertilizer every 2-4 weeks.", yPosition);

  yPosition = addTextWithPageBreak("Growing Vegetables in Containers", yPosition);
  yPosition = addTextWithPageBreak("- Vegetable Choices: Ideal vegetables include tomatoes, cucumbers, lettuce, spinach, and radishes.", yPosition);
  yPosition = addTextWithPageBreak("- Container Depth: Use deeper containers for root crops like carrots.", yPosition);
  yPosition = addTextWithPageBreak("- Soil: Use high-quality potting mix with compost.", yPosition);
  yPosition = addTextWithPageBreak("- Watering: Water when the top inch of soil is dry.", yPosition);

  yPosition = addTextWithPageBreak("Planting Lentils in Sacks", yPosition);
  yPosition = addTextWithPageBreak("- Soil: Lentils grow best in well-drained, loamy soil.", yPosition);
  yPosition = addTextWithPageBreak("- Sacks: Use fabric grow bags or sacks with good drainage.", yPosition);
  yPosition = addTextWithPageBreak("- Watering: Water sparingly, keeping the soil moist during flowering.", yPosition);
  yPosition = addTextWithPageBreak("- Support: Use small trellises or stakes for support.", yPosition);

  yPosition = addTextWithPageBreak("Planting Herbs and Seeds in Containers", yPosition);
  yPosition = addTextWithPageBreak("- Herbs: Plant herbs like basil and mint in small containers.", yPosition);
  yPosition = addTextWithPageBreak("- Soil: Use a lightweight potting mix with good drainage.", yPosition);
  yPosition = addTextWithPageBreak("- Watering: Keep the soil moist during germination.", yPosition);

  yPosition = addTextWithPageBreak("Planting Onions in Sacks:", yPosition);
  yPosition = addTextWithPageBreak("- Soil: Loamy soil mixed with organic compost.", yPosition);
  yPosition = addTextWithPageBreak("- Watering: Water lightly, ensuring soil remains moist but not soggy.", yPosition);
  yPosition = addTextWithPageBreak("- Spacing: Maintain a 4-inch gap between plants.", yPosition);
  yPosition = addTextWithPageBreak("- Tips: Ensure sacks have proper drainage to avoid rotting.", yPosition);

  yPosition = addTextWithPageBreak("Planting Tomatoes in Sacks:", yPosition);
  yPosition = addTextWithPageBreak("- Soil: Rich in organic matter, mixed with sand for drainage.", yPosition);
  yPosition = addTextWithPageBreak("- Watering: Deep watering twice a week; avoid wetting leaves.", yPosition);
  yPosition = addTextWithPageBreak("- Support: Use stakes or cages for proper growth.", yPosition);
  yPosition = addTextWithPageBreak("- Tips: Place sacks in full sunlight for at least 6 hours daily.", yPosition);

  yPosition = addTextWithPageBreak("Planting Rice in Sacks:", yPosition);
  yPosition = addTextWithPageBreak("- Soil: Clay or loamy soil with water retention capacity.", yPosition);
  yPosition = addTextWithPageBreak("- Watering: Keep soil submerged in water until grains form.", yPosition);
  yPosition = addTextWithPageBreak("- Spacing: Broadcast seeds evenly over the soil surface.", yPosition);
  yPosition = addTextWithPageBreak("- Tips: Use water-absorbent sacks and ensure drainage holes are minimized.", yPosition);

  yPosition = addTextWithPageBreak("Planting Beans in Sacks:", yPosition);
  yPosition = addTextWithPageBreak("- Soil: Loamy soil with balanced organic nutrients.", yPosition);
  yPosition = addTextWithPageBreak("- Watering: Keep soil moist, especially during germination.", yPosition);
  yPosition = addTextWithPageBreak("- Spacing: Plant seeds 6 inches apart.", yPosition);
  yPosition = addTextWithPageBreak("- Tips: Provide trellises or stakes for climbing varieties.", yPosition);

  // Save PDF
  doc.save("home-gardening-guide.pdf");
});


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}