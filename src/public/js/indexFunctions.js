
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formContainer');
    const submitButton = document.getElementById('submitButton');
    
    form.addEventListener('input', function() {
      const isFormValid = form.checkValidity();
      console.log(isFormValid)
      submitButton.disabled = !isFormValid;
    });
  });