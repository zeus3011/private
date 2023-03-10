
function f1() {
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
    // totalSaving.value = (totalSaving_val * 9 / 200 * 12*.1 +totalSaving_val * .1 / 10 * 12*.1+5000*12*.1+totalSaving_val*.01*.1*12 );
    Merchantfirst.value =Math.round (((totalSaving_val * 6 )/ 200) );
    Merchantsecond.value =Math.round ((((totalSaving_val * 6) / 200) *12*0.20));
   var Merchantsecondtot=Merchantsecond.value;
    Onlinefirst.value = Math.round (totalSaving_val * 3 / 200 );
    Onlinesecond.value = Math.round ((totalSaving_val * 3 / 200)*12);
    var Onlinesecondtot=Onlinesecond.value;
    Moviefirst.value = Math.round((totalSaving_val<=1000)?0:0 );
    Moviesecond.value =Math.round ((totalSaving_val>=1000)?((totalSaving_val * 25) / 100)*12  :(totalSaving_val<=1000)?0:3000);
    var Moviesecondtot=Moviesecond.value;
    Fuelfirst.value = Math.round((totalSaving_val>=400 && totalSaving_val <=5000)?(totalSaving_val*1)/100:(totalSaving_val<400)?0:50);
    Fuelsecond.value = Math.round((totalSaving_val>=400 && totalSaving_val <=5000)?((totalSaving_val*1)/100)*12* .20:(totalSaving_val<400)?0:600);
    var Fuelsecondtot=Fuelsecond.value;
    Travelfirst.value = ((totalSaving_val>=2500)?((totalSaving_val*12)/200):(totalSaving_val<2500)?0:150);
    Travelsecond.value = ((totalSaving_val>=2500)?((totalSaving_val*12)/200)*12* .20 :(totalSaving_val<2500)?0:1800);
    var Travelsecondtot=Travelsecond.value;
    Dinningfirst.value = (isMonth>=2500 || isYear>=30000)?((totalSaving_val*12)/200):0;
    Dinningsecond.value = (Dinningfirst.value*12* .20);
    Milestonefirst.value = (0);
    Milestonesecond.value = (0);


    Merchant_first.value = (totalSaving_val * 3 / 200 * 12);
    Merchant_second.value = (totalSaving_val * 3 / 200 * 12*.1);
    Online_first.value = (totalSaving_val * 6 / 200 * 12);
    Online_second.value = (totalSaving_val * 6 / 200 * 12*.1);
    Movie_first.value = (totalSaving_val * .1 / 10 * 12);
    Movie_second.value = (totalSaving_val * .1 / 10 * 12*.1);
    Fuel_first.value = (0);
    Fuel_second.value = (totalSaving_val * .1 / 100 * 12);
    Travel_first.value = (0);
    Travel_second.value = (2500*12*1/10);
    Dinning_first.value = (0);
    Dinning_second.value = (2500*12*.1);
    Milestone_first.value = (0);
    Milestone_second.value = (0);
    var total= parseInt(Merchantsecondtot)+parseInt(Onlinesecondtot);
    totalSaving.value=Math.round(total)
    // console.log(totalSaving.value);
    console.log("hello");
    // <button onclick="document.getElementById('totalSaving').innerHTML=totalSaving.value;"></button>
    //document.write(totalSaving);
    //alert("Your total saving is calculated");
    //return false;
}
