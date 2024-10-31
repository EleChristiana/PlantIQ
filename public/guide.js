
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


// Collapsible Sections
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
    doc.text("Planting Fruits in Containers", 10, 30);
    doc.text("- Fruit Types: Choose dwarf varieties like strawberries, tomatoes, and citrus trees.", 10, 40);
    doc.text("- Soil: Use a well-drained potting mix with added compost.", 10, 50);
    doc.text("- Watering: Water frequently but avoid waterlogging.", 10, 60);
    doc.text("- Fertilization: Use slow-release fertilizer every 2-4 weeks.", 10, 70);

    doc.text("Growing Vegetables in Containers", 10, 90);
    doc.text("- Vegetable Choices: Ideal vegetables include tomatoes, cucumbers, lettuce, spinach, and radishes.", 10, 100);
    doc.text("- Container Depth: Use deeper containers for root crops like carrots.", 10, 110);
    doc.text("- Soil: Use high-quality potting mix with compost.", 10, 120);
    doc.text("- Watering: Water when the top inch of soil is dry.", 10, 130);

    doc.text("Planting Lentils in Sacks", 10, 150);
    doc.text("- Soil: Lentils grow best in well-drained, loamy soil.", 10, 160);
    doc.text("- Sacks: Use fabric grow bags or sacks with good drainage.", 10, 170);
    doc.text("- Watering: Water sparingly, keeping the soil moist during flowering.", 10, 180);
    doc.text("- Support: Use small trellises or stakes for support.", 10, 190);

    doc.text("Planting Herbs and Seeds in Containers", 10, 210);
    doc.text("- Herbs: Plant herbs like basil and mint in small containers.", 10, 220);
    doc.text("- Soil: Use a lightweight potting mix with good drainage.", 10, 230);
    doc.text("- Watering: Keep the soil moist during germination.", 10, 240);

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