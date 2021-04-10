
function calculate() {


    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


    var dayOfTheWeek = Math.floor((year() + month() + century() + day()) % 7);


    if (gender() == 1) {
        if (dayOfTheWeek == 0) {
            alert("Hey there, your Akhan name is " + male[0]);
        } else if (dayOfTheWeek == 1) {
            alert("Hey there, your Akhan name is " + male[1]);
        } else if (dayOfTheWeek == 2) {
            alert("Hey there, your Akhan name is " + male[2]);
        } else if (dayOfTheWeek == 3) {
            alert("Hey there, your Akhan name is " + male[3]);
        } else if (dayOfTheWeek == 4) {
            alert("Hey there, your Akhan name is " + male[4]);
        } else if (dayOfTheWeek == 5) {
            alert("Hey there, your Akhan name is " + male[5]);
        } else {
            alert("Hey there, your Akhan name is " + male[6]);
        }
    } else if(gender()==2) {
        if (dayOfTheWeek == 0) {
            alert("Hey there, your Akhan name is " + female[0]);
        } else if (dayOfTheWeek == 1) {
            alert("Hey there, your Akhan name is " + female[1]);
        } else if (dayOfTheWeek == 2) {
            alert("Hey there, your Akhan name is " + female[2]);
        } else if (dayOfTheWeek == 3) {
            alert("Hey there, your Akhan name is " + female[3]);
        } else if (dayOfTheWeek == 4) {
            alert("Hey there, your Akhan name is " + female[4]);
        } else if (dayOfTheWeek == 5) {
            alert("Hey there, your Akhan name is " + female[5]);
        } else {
            alert("Hey there, your Akhan name is " + female[6]);
        }
    }

}

function gender() {
    var gender = document.getElementById("gender");
    var genderName = parseInt(gender.options[gender.selectedIndex].value);

    if (genderName == 0) {
        alert("Provide all fields first!");
    } else {
        return genderName;
    }
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

function reset(){
    location.reload();
}