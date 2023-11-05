 function checkAge() {
     let age = parseInt(document.getElementById("ageInput").value);

     if (isNaN(age)) {
         document.getElementById("result").textContent = "Please enter a valid number.";
     } else {
         if (age >= 18) {
             document.getElementById("result").textContent = "You are an adult.";
         } else {
             document.getElementById("result").textContent = "You are a minor.";
         }
     }
}

