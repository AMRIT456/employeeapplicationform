
function validate() {
    var val=true;
    var email = document.forms["myform"]["email"].value;
    var password = document.forms["myform"]["password"].value;
    var confirmPassword = document.forms["myform"]["confirm-password"].value;
    var securityQuestion = document.forms["myform"]["security-question"].value;
    var address = document.forms["myform"]["address"].value;
    //var university = document.forms["myform"]["university"].value;
    //var highestQualification = document.forms["myform"]["Highest-qualification"].value;
    var gradePoints = document.forms["myform"]["grade-points"].value;
    var firstName = document.forms["myform"]["first-name"].value;
    var lastName = document.forms["myform"]["last-name"].value;
    var country = document.forms["myform"]["country"].value;
    var phoneNumber = document.forms["myform"]["phone-number"].value;
    var dateOfBirth = document.forms["myform"]["date-of-birth"].value;

    // Validate email
    var symbol=/@/;
    if (!email.match(symbol)) {
        alert("Please enter a valid email address.");
        val=false;
    }

    // Validate password
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
      val=false;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      val=false;
    }

    // Validate security question
    if (securityQuestion.trim() === "") {
      alert("Please enter a security question.");
      val=false;
    }

    // Validate address
    if (address.trim() === "") {
      alert("Please enter your address.");
      val=false;
    }

    

    // Validate grade points
    if (isNaN(gradePoints) || gradePoints <= 0) {
      alert("Please enter a valid grade points value.");
      val=false;
    }

    // Validate first name
    if (firstName.trim() === "") {
      alert("Please enter your first name.");
      val=false;
    }

    // Validate last name
    if (lastName.trim() === "") {
      alert("Please enter your last name.");
      val=false;
    }

    // Validate country
    if (country.trim() === "") {
      alert("Please enter your country.");
      val=false;
    }

    // Validate phone number
    if (isNaN(phoneNumber)|| phoneNumber <= 0 || phoneNumber>1000000000) {
      alert("Please enter a valid phone number.");
      val=false;
    }
    var isValidDate = !isNaN(Date.parse(dateOfBirth));

    if (!isValidDate) {
        alert("Please enter a valid date in the format dd-mm-yyyy.");
        val=false;
    }
    
    return val;
  }
