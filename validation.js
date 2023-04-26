document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const name = document.getElementById("name");
      const nameError = document.getElementById("name-error");
  
      const phone = document.getElementById("phone");
      const phoneError = document.getElementById("phone-error");
  
      const email = document.getElementById("email");
      const emailError = document.getElementById("email-error");
  
      let isValid = true;
  
      if (!name.value.trim()) {
        nameError.style.display = "block";
        isValid = false;
      } else {
        nameError.style.display = "none";
      }
  
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(phone.value)) {
        phoneError.style.display = "block";
        isValid = false;
      } else {
        phoneError.style.display = "none";
      }
  
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email.value)) {
        emailError.style.display = "block";
        isValid = false;
      } else {
        emailError.style.display = "none";
      }
  
      if (isValid) {
        form.submit();
        alert('submit successfully! Thank you for your submission');
      }
    });
  });
  
  
  