
function calculate() {
    var fname = document.getElementById("firstname").value;


    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    if (century() == 20) {

    }
    var dayOfTheWeek = Math.floor((year() + month() + century() + day()) % 7);
    if (fname == "" && gender() == 0 && day().day == null) {
        alert("Provide your name, gender and day of birth.")
    } else if (fname == "" && gender() == 0) {
        alert("Provide your name and gender.");
    } else if (fname == "" && day().day == null) {
        alert("Provide your name and day of birth.")
    } else if (gender() == 0 && day().day == null) {
        alert("Select your gender and provide your day of birth.");
    } else if (fname == "") {
        alert("Provide your preferred name")
    } else if (gender() == 0) {
        alert("Select your gender.")
    } else if (day() == 0) {
        alert("Provide your day of birth")
    } else {
        if (day() <= 0 || day() > 31) {
            alert("Invalid day!");
        } else {
            if (gender() == 1) {
                if (dayOfTheWeek == 0) {
                    document.getElementById("output").innerHTML = "Hey " + fname + ", your Akan name is " + male[0] + " because you were born a male on a Sunday.";
                } else if (dayOfTheWeek == 1) {
                    document.getElementById("output").innerHTML = "Hey " + fname + ", your Akan name is " + male[1] + " because you were born a male on a Monday.";
                } else if (dayOfTheWeek == 2) {
                    document.getElementById("output").innerHTML = "Hey " + fname + ", your Akan name is " + male[2] + " because you were born a male on a Tuesday.";
                } else if (dayOfTheWeek == 3) {
                    document.getElementById("output").innerHTML = "Hey " + fname + ", your Akan name is " + male[3] + " because you were born a male on a Wednesday.";
                } else if (dayOfTheWeek == 4) {
                    document.getElementById("output").innerHTML = "Hey " + fname + ", your Akan name is " + male[4] + " because you were born a male on a Thursday.";
                } else if (dayOfTheWeek == 5) {
                    document.getElementById("output").innerHTML = "Hey " + fname + ", your Akan name is " + male[5] + " because you were born a male on a Friday.";
                } else {
                    document.getElementById("output").innerHTML = "Hey " + fname + ", your Akan name is " + male[6] + " because you were born a male on a Saturday.";
                }
            } else if (gender() == 2) {
                if (dayOfTheWeek == 0) {
                    document.getElementById("output").innerHTML = "Hey " + fname + ", your Akan name is " + female[0] + " because you were born a female on a Sunday.";
                } else if (dayOfTheWeek == 1) {
                    document.getElementById("output").innerHTML = "Hey " + fname + ", your Akan name is " + female[1] + " because you were born a female on a Monday.";
                } else if (dayOfTheWeek == 2) {
                    document.getElementById("output").innerHTML = "Hey " + fname + ", your Akan name is " + female[2] + " because you were born a female on a Tuesday.";
                } else if (dayOfTheWeek == 3) {
                    document.getElementById("output").innerHTML = "Hey " + fname + ", your Akan name is " + female[3] + " because you were born on a female a Wednesday.";
                } else if (dayOfTheWeek == 4) {
                    document.getElementById("output").innerHTML = "Hey " + fname + ", your Akan name is " + female[4] + " because you were born a female on a Thursday.";
                } else if (dayOfTheWeek == 5) {
                    document.getElementById("output").innerHTML = "Hey " + fname + ", your Akan name is " + female[5] + " because you were born a female on a Friday.";
                } else {

                } document.getElementById("output").innerHTML = "Hey " + fname + ", your Akan name is " + female[6] + " because you were born a female on a Saturday.";
            }
        }
    }

}

function gender() {
    var gender = document.getElementById("gender");
    var genderName = parseInt(gender.options[gender.selectedIndex].value);

    return genderName;

}

function day() {
    var day = document.getElementById("day").value;
    // var value = parseInt(day.options[day.selectedIndex].value);

    var date = parseInt(day);
    if (day == "") {
        var notANumber = 0;
        return notANumber;
    } else {
        return date;
    }

}

function month() {
    var month = document.getElementById("month");
    var monthValue = parseInt(month.options[month.selectedIndex].value);
    return monthValue;
}

function year() {
    var year = document.getElementById("year");
    var birthYear = year.options[year.selectedIndex].text;
    var Y = birthYear.slice(2, 4);
    var YY = parseInt(Y);
    var yearCode = (YY + (YY / 4)) % 7
    return yearCode;
}

function century() {
    var century = document.getElementById("year");
    var birthCentury = century.options[century.selectedIndex].text;
    var C = birthCentury.slice(0, 2);
    var CC = parseInt(C);
    if (CC == 19) {
        var centuryCode = 0;
        return centuryCode;
    } else {
        var cCentury = 6;
        return cCentury;
    }
}

function leapYearCode() {
    var year = document.getElementById("year");
    var birthYear = year.options[year.selectedIndex].text;
    var Y = birthYear.slice(2, 4);
    var leap = parseInt(Y);

}

function reset() {
    location.reload();
}