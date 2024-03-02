function validateForm(event) {
    const elements = document.querySelectorAll("#fname, #lname, #position, #email, #phone, #business");
    const radioInputs = document.querySelectorAll('input[type="radio"][name="membership"]');
    let isValid = true;

    elements.forEach((input) => {
        if (input.value.trim() === "") {
            showError();
            isValid = false;
        }
    });
    // Check if any radio option is selected
    let radioSelected = false;
    radioInputs.forEach((input) => {
        if (input.checked) {
            radioSelected = true;
        }
    });
    if (!radioSelected) {
        showError();
        isValid = false;
    }

    if (isValid) {
        // Form is valid, submit it
        setTimestamp()
    } else {
        event.preventDefault(); // Prevent form submission
    }
}

function showSuccess() {
    const success = document.getElementById("submitmessage");
    success.textContent = "Success! Your request has been sent!";
    success.classList.remove("hide");
    success.classList.add("success", "show");
    // Reset the display property after 3 seconds
    setTimeout(function () {
        success.classList.remove("success", "show");
        success.classList.add("hide");
    }, 3000); // Hide the message after 3 seconds
}

function showError() {
    const error = document.getElementById("submitmessage");
    error.textContent = "Error! Please correctly fill out the request!";
    error.classList.remove("hide");
    error.classList.add("error", "show");
    // Reset the display property after 3 seconds
    setTimeout(function () {
        error.classList.remove("error", "show");
        error.classList.add("hide");
    }, 3000); // Hide the message after 3 seconds
}
