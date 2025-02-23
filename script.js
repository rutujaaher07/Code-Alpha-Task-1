function calculateAge() {
    var birthdate = document.getElementById("birthdate").value;
    var birthDate = new Date(birthdate);
    var today = new Date();

    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById("result").innerText = "Your age is " + age + " years.";
}
