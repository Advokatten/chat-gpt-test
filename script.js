
document.addEventListener("DOMContentLoaded", function() {
    const steps = document.querySelectorAll('.step');
    const nextButton = document.getElementById('nextButton');
    let currentStep = 1;
  
    function showStep(stepNumber) {
      steps.forEach(step => {
        step.classList.remove('active');
      });
      steps[stepNumber - 1].classList.add('active');
    }
  
    nextButton.addEventListener('click', function() {
      if (currentStep < steps.length) {
        currentStep++;
        showStep(currentStep);
      }
    });
  });