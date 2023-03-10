
function f1() {
    window.scrollBy(0, 750);
    var isMonth = document.getElementById("month").value;
    var isYear = document.getElementById("yr").value;
    var totalSaving = document.getElementById("totalSaving");
//  var spend=[isMonth,isYear];
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
//    var milestoneget=document.getElementsByClassName("milestoneget")
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
    // totalSaving.value = (totalSaving_val * 2 / 100 * 12*.25+250*12+2000+3000*2/100);

    Merchantfirst.value = (((totalSaving_val * 4 )/ 100) );
    Merchantsecond.value = ((Merchantfirst.value*12)*0.2);
    var Merchantsecondtot=Merchantsecond.value;
    Onlinefirst.value = (0);
    Onlinesecond.value = (0);
    var Onlinesecondtot=Onlinesecond.value;
    Moviefirst.value = (0);
    Moviesecond.value = (0);
    var Moviesecondtot=Moviesecond.value;
    Fuelfirst.value = ((isMonth >= 400 || isYear >= 4800 )? (totalSaving_val*1)/100:"0");
    Fuelsecond.value =((isMonth >= 400 || isYear >= 4800 )? Fuelfirst.value*12*0.20 :"0");
    var Fuelsecondtot=Fuelsecond.value;
    Travelfirst.value = (0);
    Travelsecond.value = (0);
    var Travelsecondtot=Travelsecond.value;
    // Dinningfirst.value = (0);
    // Dinningsecond.value = (0);
    // milestoneget.value = ((isMonth >= 10000)? 50:"0");
    Milestonefirst.value = ((totalSaving_val >= 10000 || totalSaving_val >= 120000 )? 50:"0");
    // Milestonefirst.value = ((isYear >= 120000 )? 50:"0");
    // Milestonesecond.value = ((isMonth >= 10000)?600:"0");
    Milestonesecond.value = ((isMonth >= 10000 ||isYear >= 120000)? 600:"0");
       var Milestonesecondtot=Milestonesecond.value;
    Merchant_first.value = (((totalSaving_val * 4 )/ 100));
    Merchant_second.value = ((Merchantfirst.value*12)*.2);
    Online_first.value = (0);
    Online_second.value = (0);
    Movie_first.value = (0);
    Movie_second.value = (0);
    Fuel_first.value = ((isMonth >= 400 || isYear >= 4800 )? (totalSaving_val*1)/100:"0");
    Fuel_second.value = ((isMonth >= 400 || isYear >= 4800 )? Fuelfirst.value*12*0.20:"0");
    Travel_first.value = (0);
    Travel_second.value = (0);
    // Dinning_first.value = (0);
    // Dinning_second.value = (0);
    Milestone_first.value = ((totalSaving_val >= 10000 || totalSaving_val >= 120000 )? 50:"0");
    Milestone_second.value = ((isMonth >= 10000 ||isYear >= 120000)? 600:"0");
    console.log("hello");
    var total = (parseInt(Merchantsecondtot )+ parseInt(Onlinesecondtot)+ parseInt(Moviesecondtot)+parseInt(Fuelsecondtot) +parseInt(Travelsecondtot)+parseInt(Milestonesecondtot));
    totalSaving.value=Math.round(total);
    
}
