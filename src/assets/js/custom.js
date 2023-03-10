
	function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}


  function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      }






// Range Start

  // $(".show-det").hide();
  // $(document).ready(function(){
  //   $(this).click(function(){
  //     $(".show-det").toggle();
  //   });
  // });




// $('#myelement').click(function(){
//      $('#another-element').show("slide", { direction: "right" }, 1000);
// });

// Range Close



// Step Forms Start
  $("#second-step").hide();
      $(".ctn").click(function(){
      $("#first-step").hide();
      $("#second-step").show();
    });


        $("#third-step").hide();
      $(".ctn1").click(function(){
      $("#second-step").hide();
      $("#third-step").show();
    });



// Step Forms Close


window.addEventListener('DOMContentLoaded', (event) => {
  var card = document.querySelector('.card');
  card.classList.add('loaded');
});



  // Calculators Start
         function reset(){
         document.getElementById("value1").value = 0;
         document.getElementById("value2").value = 0;
         document.getElementById("value3").value = 0;
         
         document.getElementById("monthly-interest").innerHTML =" ₹ " +0;
         document.getElementById("monthly-payment").innerHTML =" ₹ " +0;
         document.getElementById("total-repayment").innerHTML =" ₹ " +0;
         document.getElementById("total-interest").innerHTML =" ₹ " +0;
         }
         
         function calculation(){
         
         var loanAmount = document.getElementById("value1").value;
         var interestRate = document.getElementById("value2").value;
         var loanDuration = document.getElementById("value3").value;
         
         //.......... declarations.............
         
         var interestPerYear = (loanAmount * interestRate)/100; 
         var monthlyInterest = interestPerYear/12;
         
         
         var monthlyPayment = monthlyInterest + (loanAmount/loanDuration);
         var totalInterestCost = monthlyInterest * loanDuration;
         var totalRepayment = monthlyPayment * loanDuration;
         
         //----------------monthly interest----------------------
         
         document.getElementById("monthly-interest").innerHTML = " ₹ " +monthlyInterest.toFixed(2);
         
         //-------------Monthly payment------------
         
         document.getElementById("monthly-payment").innerHTML = " ₹ " +monthlyPayment.toFixed(2); 
         
         //-------------Total repayment-----------
         
         document.getElementById("total-repayment").innerHTML =" ₹ " +totalRepayment.toFixed(2);
         
         //--------------Total Interest cost----------------
         
         document.getElementById("total-interest").innerHTML =" ₹ " +totalInterestCost.toFixed(2);
         
         }
         // Calculators Close
         
   








