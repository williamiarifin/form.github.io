document.addEventListener("DOMContentLoaded", () => {
    const dobInput = document.getElementById('dob');
    const ageInput = document.getElementById('age');
    const form = document.getElementById('registrationForm');
    const successMessage = document.getElementById('successMessage');
    const submitBtn = document.getElementById('submitBtn');

    // PASTE YOUR WEB APP URL HERE
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzolqLEeHbAD0nNgbAUe1eEvW2W-1QL7IvKxTK0thtDKFenSwSF2vOxI2wSBBUpNix48Q/exec'; 

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

    // Handle Form Submission
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        
        // Change button text to show it's working
        submitBtn.innerText = "Submitting...";
        submitBtn.disabled = true;

        // Collect all form data
        const formData = new FormData(form);

        // Send data to Google Apps Script
        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => {
                form.style.display = 'none';
                successMessage.classList.remove('hidden');
            })
            .catch(error => {
                console.error('Error!', error.message);
                alert("There was an error submitting the form. Please try again.");
                submitBtn.innerText = "Submit Registration";
                submitBtn.disabled = false;
            });
    });
});
