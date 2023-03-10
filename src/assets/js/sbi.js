
function f1() {
    window.scrollBy(0, 750);
    var isMonth = document.getElementById("month").value;
    var isYear = document.getElementById("yr").value;
    var totalSaving = document.getElementById("totalSaving");

    var Merchantfirst = document.getElementById("Merchantfirst");
    var Merchantsecond = document.getElementById("Merchantsecond");
    var Onlinefirst = document.getElementById("Onlinefirst");
    var Onlinesecond = document.getElementById("Onlinesecond");
    var Moviefirst = document.getElementById("Moviefirst");
    var Moviesecond = document.getElementById("Moviesecond");
    var Fuelfirst = document.getElementById("Fuelfirst");
    var Fuelsecond = document.getElementById("Fuelsecond");
    var Travelfirst = document.getElementById("Travelfirst");
    var Travelsecond = document.getElementById("Travelsecond");
    var Dinningfirst = document.getElementById("Dinningfirst");
    var Dinningsecond = document.getElementById("Dinningsecond");
    var Milestonefirst = document.getElementById("Milestonefirst");
    var Milestonesecond = document.getElementById("Milestonesecond");

    var Merchant_first = document.getElementById("Merchant_first");
    var Merchant_second = document.getElementById("Merchant_second");
    var Online_first = document.getElementById("Online_first");
    var Online_second = document.getElementById("Online_second");
    var Movie_first = document.getElementById("Movie_first");
    var Movie_second = document.getElementById("Movie_second");
    var Fuel_first = document.getElementById("Fuel_first");
    var Fuel_second = document.getElementById("Fuel_second");
    var Travel_first = document.getElementById("Travel_first");
    var Travel_second = document.getElementById("Travel_second");
    var Dinning_first = document.getElementById("Dinning_first");
    var Dinning_second = document.getElementById("Dinning_second");
    var Milestone_first = document.getElementById("Milestone_first");
    var Milestone_second = document.getElementById("Milestone_second");

    var totalSaving_val = 0;

    if (isMonth == "" && isYear == "") {
        alert("Please select saving Month or year");
        return false;
    }
    else if (isMonth != "" && isYear != "") {
        alert("Please enter any one of Month or year");
        return false;
    }
    else if (isMonth != "") {
        // totalSaving(isMonth);
        totalSaving_val = parseInt(isMonth) / 12;
        // return true;
    }
    else if (isYear != "") {
        totalSaving_val = parseInt(isYear) / 12;
        // totalSaving(monthlyIncome);
        // return true;
    
    }
    // totalSaving.value = Math.round((totalSaving_val * 1 / 300 * 12 * .25*2+totalSaving_val * 10 / 1500 * 12 * .25*3));
    Merchantfirst.value = Math.round(totalSaving_val * 3 / 100 );
    Merchantsecond.value = Math.round(Merchantfirst.value * 12 * .20);
    var Merchantsecondtot=Merchantsecond.value;
    Onlinefirst.value = Math.round(totalSaving_val * 10 / 100 );
    Onlinesecond.value =Math.round (Onlinefirst.value * 12 * .20);
    var Onlinesecondtot=Onlinesecond.value;
    Moviefirst.value = (0);
    Moviesecond.value = (0);
    var Moviesecondtot=Moviesecond.value;
    Fuelfirst.value =Math.round(((isMonth>=400 && isMonth<=3000) ||(isYear>=4800 && isYear<=36000))?(totalSaving_val * 1 / 100):"0" );
    Fuelsecond.value = Math.round(Fuelfirst.value * 12 * .20);
    var Fuelsecondtot=Fuelsecond.value;
    Travelfirst.value =Math.round(totalSaving_val * 10 / 100);
    Travelsecond.value = Math.round(totalSaving_val * 10 / 100 * 12 * .20);
    var Travelsecondtot=Travelsecond.value;
    Dinningfirst.value = Math.round(totalSaving_val * 10 / 1500 );
    Dinningsecond.value = Math.round((Dinningfirst.value*12 ) * .20);
    var Dinningsecondtot=Dinningsecond.value;
    Milestonefirst.value = (0);
    Milestonesecond.value = Math.round((isMonth >= 16666 || isYear>=200000)? 2000 :"0");
    var Milestonesecondtot=Milestonesecond.value;


    Merchant_first.value = Math.round(totalSaving_val * 1 / 300 * 12);
    Merchant_second.value = Math.round(totalSaving_val * 1 / 300 * 12 * .20);
    Online_first.value = Math.round(totalSaving_val * 1 / 300 * 12);
    Online_second.value = Math.round(totalSaving_val * 1 / 300 * 12 * .20);
    Movie_first.value = (0);
    Movie_second.value = (0);
    Fuel_first.value = Math.round(((isMonth>=400 && isMonth<=3000) ||(isYear>=4800 && isYear<=36000))?(totalSaving_val * 1 / 100):"0" );
    Fuel_second.value = Math.round(Fuelfirst.value * 12 * .20);
    Travel_first.value =Math.round(totalSaving_val * 10 / 1500);
    Travel_second.value =Math.round(totalSaving_val * 10 / 1500 * 12 * .20);
    Dinning_first.value = Math.round(totalSaving_val * 10 / 1500 );
    Dinning_second.value = Math.round((Dinningfirst.value*12 ) * .20);
    Milestone_first.value = (0);
    Milestone_second.value = (600);
   

    var total = (parseInt(Merchantsecondtot )+ parseInt(Onlinesecondtot)+ parseInt(Moviesecondtot)+parseInt(Fuelsecondtot)+parseInt(Dinningsecondtot) +parseInt(Travelsecondtot)+parseInt(Milestonesecondtot));
    totalSaving.value=Math.round(total);
    console.log("hello");
    
}
