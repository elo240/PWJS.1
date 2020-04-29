function checkForm() {
    var error = false;
    if (errorName())
        error = true;
    if (errorEmail())
        error = true;
    if (errorText())
        error = true;
    if (!error) {
        return true;
    } else {
        return false;
    }

}

function errorName() {
    var contactName = document.getElementById("contactName");
    var error = false;
    if (contactName.value == "") {
        document.getElementById('errorName').className = 'alert alertdanger';
        document.getElementById("name").className = " has-error";
        error = true;
    }
    if (!error)
        document.getElementById("errorName").className = "d-none";
    return error;
}

function errorEmail() {
    var contactEmail = document.getElementById("contactEmail");
    var error = false;
    if (contactEmail.value == "") {
        document.getElementById('errorEmail').className = 'alert alertdanger';
        error = true;
    } else {
        var email = contactEmail.value;
        var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
        if (regex.test(email) == false) {
            document.getElementById('errorEmail').innerHTML = "Proszę podać poprawny adres Email";
            document.getElementById('errorEmail').className = 'alert alertdanger';
            error = true;
        }
    }
    if (!error)
        document.getElementById("errorEmail").className = "d-none";
    return error;
}

function errorText() {
    var contactText = document.getElementById("contactText");
    if (contactText.value == "") {
        document.getElementById("errorText").className = "alert alertdanger";
        return true;
    }else{
        document.getElementById("errorText").className = "d-none";
    return false;
    }
}
