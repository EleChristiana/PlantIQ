let crops = [];
let notificationEnabled = false;
const notificationSound = new Audio('../sound/notification.mp3'); // Path to your sound file
let soundPlaying = false; // Track if sound is playing
let activeAlert = null; // Track active alert

// Function to enable sound notifications (for mobile)
function enableNotifications() {
    // Request permission to show notifications
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            notificationEnabled = true;
            alert("Notifications enabled!");
        } else {
            alert("Notifications permission denied.");
        }
    });

    // Play sound to check if notifications are working
    notificationSound.play().then(() => {
        notificationSound.pause(); // Pause immediately
        notificationEnabled = true; // Enable notifications
        alert("Notifications enabled!");
    }).catch(error => {
        console.log("Notification permission required on mobile. Please click 'Enable Notifications' to allow.");
    });
}

function addCrop() {
    const cropName = document.getElementById('cropName').value;
    const plantingDate = document.getElementById('plantingDate').value;

    if (!cropName || !plantingDate) {
        alert("Please enter both crop name and planting date.");
        return;
    }

    // Parse the date correctly to avoid time zone issues
    const cropDate = new Date(plantingDate + 'T00:00:00'); // Set the time to midnight to avoid time zone offsets

    if (isNaN(cropDate)) {
        alert("Invalid planting date.");
        return;
    }

    const crop = {
        name: cropName,
        plantingDate: cropDate,
        reminders: [],
        notes: []
    };

    crops.push(crop);
    displayCrops();
    document.getElementById('cropName').value = '';
    document.getElementById('plantingDate').value = '';
}

function displayCrops() {
    const cropList = document.getElementById('cropList');
    cropList.innerHTML = '<h2>My Crops</h2>';

    crops.forEach((crop, index) => {
        const cropDiv = document.createElement('div');
        cropDiv.classList.add('crop');

        const daysSincePlanting = Math.floor((new Date() - crop.plantingDate) / (1000 * 60 * 60 * 24));
        const growthStage = daysSincePlanting > 30 ? 'Mature' : daysSincePlanting > 14 ? 'Growing' : 'Seedling';

        cropDiv.innerHTML = `
            <h3>${crop.name}</h3>
            <p>Planted on: ${crop.plantingDate.toLocaleDateString()}</p>  <!-- Use toLocaleDateString() for correct format -->
            <p>Days Since Planting: ${daysSincePlanting} days</p>
            <p>Growth Stage: ${growthStage}</p>
            <button onclick="addReminder(${index})">Add Reminder</button>
            <button onclick="addNotePrompt(${index})">Add Note</button>
            <button onclick="deleteCrop(${index})">Delete Crop</button>
            <ul id="reminders-${index}">
                ${crop.reminders.map((reminder, reminderIndex) => 
                    `<li>${reminder.text} - Due: ${reminder.date.toLocaleDateString()} ${reminder.time} (${reminder.frequency}) 
                    <button onclick="deleteReminder(${index}, ${reminderIndex})">Delete</button></li>`).join('')}
            </ul>
            <ul id="notes-${index}">${crop.notes.map(note => `<li>${note}</li>`).join('')}</ul>
        `;

        cropList.appendChild(cropDiv);
    });
}

function addReminder(cropIndex) {
    const reminderText = prompt("Enter your reminder (e.g., Water the plant)");
    const reminderDateStr = prompt("Enter reminder date (YYYY-MM-DD)");
    const reminderTime = prompt("Enter reminder time (e.g., 02:30 PM)");
    const reminderFrequency = prompt("Enter frequency: 'once', 'daily', or 'weekly'");

    // Convert date string to Date object correctly
    const reminderDate = new Date(reminderDateStr + 'T00:00:00'); // Set time to midnight to avoid time zone issues

    if (isNaN(reminderDate)) {
        alert("Invalid date format. Please enter a valid date (YYYY-MM-DD).");
        return;
    }

    if (reminderText && reminderDateStr && reminderTime && (reminderFrequency === 'once' || reminderFrequency === 'daily' || reminderFrequency === 'weekly')) {
        const reminder = {
            text: reminderText,
            date: reminderDate,
            time: reminderTime,
            frequency: reminderFrequency
        };
        crops[cropIndex].reminders.push(reminder);
        displayCrops();
    } else {
        alert("Please enter a valid reminder, date, time (e.g., 02:30 PM), and frequency (once, daily, weekly).");
    }
}

function addNotePrompt(cropIndex) {
    const note = prompt("Enter your note about the crop");
    if (note) {
        crops[cropIndex].notes.push(note);
        displayCrops();
    } else {
        alert("Please enter a note to add.");
    }
}

function deleteCrop(cropIndex) {
    if (confirm("Are you sure you want to delete this crop? This will also remove all associated reminders and notes.")) {
        crops.splice(cropIndex, 1); // Remove the crop from the crops array
        displayCrops(); // Re-render the list
    }
}

function deleteReminder(cropIndex, reminderIndex) {
    if (confirm("Are you sure you want to delete this reminder?")) {
        crops[cropIndex].reminders.splice(reminderIndex, 1); // Remove the reminder from the crop
        displayCrops(); // Re-render the list
    }
}

function convertTo24Hour(time12h) {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');

    if (hours === '12') {
        hours = '00';
    }
    if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }

    return `${hours.toString().padStart(2, '0')}:${minutes}`;
}

function checkReminders() {
    if (!notificationEnabled) return;

    const now = new Date();
    const nowDate = now.toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
    const nowTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`; // Get current time

    crops.forEach(crop => {
        crop.reminders.forEach(reminder => {
            const reminderDate = reminder.date.toISOString().split('T')[0]; // Reminder date in YYYY-MM-DD format
            const reminderTime24 = convertTo24Hour(reminder.time); // Convert reminder time to 24-hour format

            if (reminderDate === nowDate && reminderTime24 === nowTime) {
                if (reminder.frequency === 'once' || (reminder.frequency === 'daily' || (reminder.frequency === 'weekly' && reminder.date.getDay() === now.getDay()))) {
                    if (!soundPlaying) { // Ensure sound only plays once
                        if (activeAlert) {
                            clearTimeout(activeAlert);
                        }
                        activeAlert = setTimeout(() => {
                            alert(`Reminder: ${reminder.text} for ${crop.name}`);
                        }, 0);
                        playNotificationSound();
                    }
                }
            }
        });
    });
}

function playNotificationSound() {
    notificationSound.play().then(() => {
        soundPlaying = true;
        document.getElementById('stopSoundButton').style.display = 'inline'; // Show stop button
    }).catch(error => {
        console.log("Audio could not play automatically due to browser restrictions.");
    });
}

function stopNotificationSound() {
    if (soundPlaying) {
        notificationSound.pause();
        notificationSound.currentTime = 0; // Reset sound to beginning
        soundPlaying = false;
        document.getElementById('stopSoundButton').style.display = 'none'; // Hide stop button
        if (activeAlert) {
            clearTimeout(activeAlert); // Stop the alert
        }
    }
}

// Run checkReminders every 10 seconds
setInterval(checkReminders, 10000);

// HTML Button to Enable Notifications and Stop Sound
// Add the button with a container wrapper
document.body.innerHTML += `
    <div id="notification-container" style="display: flex; justify-content: center; align-items: center;">
        <button onclick="enableNotifications()" style="padding: 10px 20px; font-size: 16px; cursor: pointer;">Enable Notifications</button>
    </div>
`;


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}





