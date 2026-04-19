document.addEventListener("DOMContentLoaded", () => {
    const dobInput = document.getElementById('dob');
    const ageInput = document.getElementById('age');
    const form = document.getElementById('registrationForm');

    // Automatically calculate age based on Date of Birth
    dobInput.addEventListener('change', function() {
        const dobValue = this.value;
        if (dobValue) {
            const dobDate = new Date(dobValue);
            const today = new Date();
            
            let age = today.getFullYear() - dobDate.getFullYear();
            const monthDifference = today.getMonth() - dobDate.getMonth();
            
            // Adjust age if the birthday hasn't occurred yet this year
            if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dobDate.getDate())) {
                age--;
            }
            
            ageInput.value = age > 0 ? age : 0; // Prevent negative ages if user picks future date
        } else {
            ageInput.value = '';
        }
    });

    // Handle Form Submission and Redirect
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevents the default page reload
        
        // Redirect the user to the specified URL
        window.location.href = "https://youtu.be/BsIa_LKojJI?si=XAAjC3rkaArlBbA2";
    });
});
