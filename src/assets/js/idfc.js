
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
        totalSaving_val = parseInt(isMonth);
        // return true;
    }
    else if (isYear != "") {
        totalSaving_val = parseInt(isYear) / 12;
        // totalSaving(monthlyIncome);
        // return true;
    }
    // totalSaving.value = (totalSaving_val / 800 * 156 );
    Merchantfirst.value =Math.round (totalSaving_val * 3 / 200 );
    Merchantsecond.value = Math.round(totalSaving_val * 3 / 200 * .20 * 12);
    var Merchantsecondtot=Merchantsecond.value;
    Onlinefirst.value = Math.round(((totalSaving_val * 1) / 100 ));
    Onlinesecond.value =Math.round ((Onlinefirst.value * 0.20 *12) );
    var Onlinesecondtot=Onlinesecond.value;
    Moviefirst.value =Math.round ((totalSaving_val>=100 || totalSaving_val<=15000)?(((totalSaving_val*2)/100)):0);
    Moviesecond.value = Math.round(Moviefirst.value*12 * .20);
    var Moviesecondtot=Moviesecond.value;
    Fuelfirst.value = Math.round((totalSaving_val*1)/100);
    Fuelsecond.value = Math.round(((totalSaving_val*1)/100)*12* .20);
    var Fuelsecondtot=Fuelsecond.value;
    Travelfirst.value = (0);
    Travelsecond.value = (0);
    var Travelsecondtot=Travelsecond.value;
    Dinningfirst.value =Math.round (((totalSaving_val*20/100)* 0.2));
    Dinningsecond.value = Math.round((Dinningfirst.value*0.20));
    var Dinningsecondtot=Dinningsecond.value;
    Milestonefirst.value =Math.round ((isMonth >= 10000 || isYear >= 120000 )? 50:"0");
    Milestonesecond.value =Math.round ((isMonth >= 10000 || isYear >= 120000 )? 600:"0");
    var Milestonesecondtot=Milestonesecond.value;


    Merchant_first.value = Math.round (totalSaving_val * 3 / 200 );
    Merchant_second.value =Math.round(totalSaving_val * 3 / 200 * .20 * 12);
    Online_first.value = Math.round(((totalSaving_val * 1) / 100 ));
    Online_second.value =Math.round (totalSaving_val * 10 / 200 * .20 * 12);
    Movie_first.value =Math.round ((totalSaving_val>=100 || totalSaving_val<=15000)?(((totalSaving_val*2)/100)):0);
    Movie_second.value = Math.round(Moviefirst.value*12 * .20);
    Fuel_first.value =Math.round((totalSaving_val*1)/100);
    Fuel_second.value = Math.round(((totalSaving_val*1)/100)*12* .20);
    Travel_first.value = (0);
    Travel_second.value = (0);
    Dinning_first.value =Math.round (((totalSaving_val*20/100)* 0.2));
    Dinning_second.value = Math.round((Dinningfirst.value*0.20));
    Milestone_first.value =Math.round ((isMonth >= 10000 || isYear >= 120000 )? 50:"0");
    Milestone_second.value = Math.round ((isMonth >= 10000 || isYear >= 120000 )? 600:"0");
    console.log("hello");
    var total = (parseInt(Merchantsecondtot )+ parseInt(Onlinesecondtot)+ parseInt(Moviesecondtot)+parseInt(Fuelsecondtot)+parseInt(Dinningsecondtot) +parseInt(Travelsecondtot)+parseInt(Milestonesecondtot));
    totalSaving.value=Math.round(total);
}
