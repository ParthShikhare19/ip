// form-validation.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission until validation passes

        // Get form values
        const name = document.getElementById("name").value.trim();
        const rollNo = document.getElementById("password").value.trim();
        const dob = document.getElementById("dob").value;
        const gender = document.getElementById("gender").value;
        const department = document.querySelector('input[name="fav_language"]:checked');

        let errors = [];

        // Name validation
        if (name === "") {
            errors.push("Name is required.");
        } else if (!/^[A-Za-z\s]+$/.test(name)) {
            errors.push("Name must contain only letters and spaces.");
        }

        // Department validation
        if (!department) {
            errors.push("Please select a department.");
        }

        // Roll number validation
        if (rollNo === "") {
            errors.push("Roll number is required.");
        } else if (!/^[0-9]+$/.test(rollNo)) {
            errors.push("Roll number must contain only digits.");
        }

        // Date of birth validation
        if (dob === "") {
            errors.push("Date of birth is required.");
        } else {
            const dobDate = new Date(dob);
            const today = new Date();
            if (dobDate > today) {
                errors.push("Date of birth cannot be in the future.");
            }
        }

        // Gender validation
        if (gender === "") {
            errors.push("Please select a gender.");
        }

        // Show errors or submit
        if (errors.length > 0) {
            alert(errors.join("\n"));
        } else {
            alert("Form submitted successfully!");
            form.submit();
        }
    });
});
