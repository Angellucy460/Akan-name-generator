function getAkanName(dateOfBirth, gender) {
    // Define Akan names for each day and gender
    const akanNames = {
        Sunday: { male: "Kwasi", female: "Akosua" },
        Monday: { male: "Kwadwo", female: "Adwoa" },
        Tuesday: { male: "Kwabena", female: "Abenaa" },
        Wednesday: { male: "Kwaku", female: "Akua" },
        Thursday: { male: "Yaw", female: "Yaa" },
        Friday: { male: "Kofi", female: "Afua" },
        Saturday: { male: "Kwame", female: "Ama" },
    };

    // Get the day of the week from the date of birth
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayIndex = new Date(dateOfBirth).getDay();
    const dayOfWeek = daysOfWeek[dayIndex];

    // Return the corresponding Akan name
    return akanNames[dayOfWeek]?.[gender.toLowerCase()] || "Unknown";
}

// Example usage
const dateOfBirth = "1990-04-19"; // Replace with user-provided date
const gender = "male"; // Replace with user-provided gender
const akanName = getAkanName(dateOfBirth, gender);

document.getElementById("result").textContent = `Your Akan name is ${akanName}`;
