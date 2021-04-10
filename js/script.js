
function calculate() {


    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    var dayOfTheWeek = (year() + month() + century() + day()) % 7;

    alert(Math.floor(dayOfTheWeek));

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

    if (date <= 0 || date > 31) {
        alert("Invalid day input.")
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
    }
}

function leapYearCode() {
    var year = document.getElementById("year");
    var birthYear = year.options[year.selectedIndex].text;
    var Y = birthYear.slice(2, 4);
    var leap = parseInt(Y);

}

function name() {

    var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

}