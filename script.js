document.addEventListener("DOMContentLoaded", () => {
    const dobInput = document.getElementById('dob');
    const ageInput = document.getElementById('age');
    const form = document.getElementById('registrationForm');
    const submitBtn = document.getElementById('submitBtn');

    // PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE
    const scriptURL = 'YOUR_WEB_APP_URL_HERE'; 

    // Automatically calculate age based on Date of Birth
    dobInput.addEventListener('change', function() {
        const dobValue = this.value;
        if (dobValue) {
            const dobDate = new Date(dobValue);
            const today = new Date();
            let age = today.getFullYear() - dobDate.getFullYear();
            const monthDifference = today.getMonth() - dobDate.getMonth();
            
            if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dobDate.getDate())) {
                age--;
            }
            ageInput.value = age > 0 ? age : 0; 
        } else {
            ageInput.value = '';
        }
    });

    // Handle Form Submission, Send to Sheets, and Redirect
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevents the default page reload
        
        // Change button text to show it's working so they don't click it twice
        submitBtn.innerText = "Submitting...";
        submitBtn.disabled = true;

        // Collect all form data
        const formData = new FormData(form);

        // Send data to Google Apps Script
        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => {
                // SUCCESS! The data is in the sheet. Now, spring the trap:
                window.location.href = "https://youtu.be/BsIa_LKojJI?si=XAAjC3rkaArlBbA2";
            })
            .catch(error => {
                // If the connection fails, show an error and let them try again
                console.error('Error!', error.message);
                alert("There was an error submitting the form. Please try again.");
                submitBtn.innerText = "Submit Registration";
                submitBtn.disabled = false;
            });
    });
});
