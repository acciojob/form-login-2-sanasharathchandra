//your JS code here. If required.
document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var email = document.getElementById('email').value;
    var formInfo = "First Name: " + firstName + "\nLast Name: " + lastName + "\nPhone Number: " + phoneNumber + "\nEmail ID: " + email;
    alert(formInfo);