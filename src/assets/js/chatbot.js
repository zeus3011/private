const $document = document;
const $chatbot = $document.querySelector('#chat-circle');
const $chatbotMessageWindow = $document.querySelector('.chatbot__message-window');
const $chatbotHeader = $document.querySelector('.chatbot__header');
const $chatbotMessages = $document.querySelector('.chatbot__messages');
const $chatbotInput = $document.querySelector('.chatbot__input');
const $chatbotSubmit = $document.querySelector('.chatbot__submit');

const botLoadingDelay = 1000;
const botReplyDelay = 2000;


$chatbotHeader.addEventListener('click', () => {
  toggle($chatbot, 'chatbot--closed');
  $chatbotInput.focus();
}, false);
document.getElementById("chat-circle").addEventListener("click", () => {
  var element = document.getElementsByClassName("chatbot");
  element[0].classList.remove("chatbot--closed");
  element[0].style.display = "block";
  $chatbotInput.focus();
  console.log(this);
  document.getElementById("chatbot__header").style.display = "none";
});

$chatbotHeader.addEventListener(
  "click",
  () => {
    // toggle($chatbot, "chatbot--closed");
    // $chatbotInput.focus();
    var element =                 document.getElementsByClassName("chatbot");
      element[0].style.display = "none";
     document.getElementById("chat-circle").style.display="block";
  },
  false
);
var sendForm = document.querySelector('#chatform'),
textInput = document.querySelector('.chatbox'),
chatList = document.querySelector('.chatlist'),
userBubble = document.querySelectorAll('.userInput'),
botBubble = document.querySelectorAll('.bot__output'),
animateBotBubble = document.querySelectorAll('.bot__input--animation'),
overview = document.querySelector('.chatbot__overview'),
hasCorrectInput,
imgLoader = false,
animationCounter = 1,
animationBubbleDelay = 600,
input,
previousInput,
isReaction = false,
unkwnCommReaction = "Apologise I am unable to help",
chatbotButton = document.querySelector(".submit-button");

sendForm.onkeydown = function (e) {
  if (e.keyCode == 13) {
    e.preventDefault();

    //No mix ups with upper and lowercases
    var input = textInput.value.toLowerCase();

    //Empty textarea fix
    if (input.length > 0) {
      createBubble(input);
    }
  }
};

sendForm.addEventListener('submit', function (e) {
  //so form doesnt submit page (no page refresh)
  e.preventDefault();

  //No mix ups with upper and lowercases
  var input = textInput.value.toLowerCase();

  //Empty textarea fix
  if (input.length > 0) {
    createBubble(input);
  }
}); //end of eventlistener

var createBubble = function (input) {
  //create input bubble
  var chatBubble = document.createElement('li');
  chatBubble.classList.add('userInput');

  //adds input of textarea to chatbubble list item
  chatBubble.innerHTML = input;

  //adds chatBubble to chatlist
  chatList.appendChild(chatBubble);

  checkInput(input);
};

var checkInput = function (input) {
  hasCorrectInput = false;
  isReaction = false;
  //Checks all text values in possibleInput
  for (var textVal in possibleInput) {
    //If user reacts with "yes" and the previous input was in textVal
    if (input == "yes" || input.indexOf("yes") >= 0) {
      if (previousInput == textVal) {
        console.log("sausigheid");

        isReaction = true;
        hasCorrectInput = true;
        botResponse(textVal);
      }
    }
    if (input == "no" && previousInput == textVal) {
      unkwnCommReaction = "For a list of commands type: Commands";
      unknownCommand("I'm sorry to hear that :(");
      unknownCommand(unkwnCommReaction);
      hasCorrectInput = true;
    }

    //Is a word of the input also in possibleInput object?
    if (input == textVal || input.indexOf(textVal) >= 0 && isReaction == false) {
      console.log("success");
      hasCorrectInput = true;
      botResponse(textVal);
    }
  }
  //When input is not in possibleInput
  if (hasCorrectInput == false) {
    console.log("failed");
    unknownCommand(unkwnCommReaction);
    hasCorrectInput = true;
  }
};

// debugger;

function botResponse(textVal) {
  //sets previous input to that what was called
  // previousInput = input;

  //create response bubble
  var userBubble = document.createElement('li');
  userBubble.classList.add('bot__output');

  if (isReaction == true) {
    if (typeof reactionInput[textVal] === "function") {
      //adds input of textarea to chatbubble list item
      userBubble.innerHTML = reactionInput[textVal]();
    } else {
      userBubble.innerHTML = reactionInput[textVal];
    }
  }

  if (isReaction == false) {
    //Is the command a function?
    if (typeof possibleInput[textVal] === "function") {
      // console.log(possibleInput[textVal] +" is a function");
      //adds input of textarea to chatbubble list item
      userBubble.innerHTML = possibleInput[textVal]();
    } else {
      userBubble.innerHTML = possibleInput[textVal];
    }
  }
  //add list item to chatlist
  chatList.appendChild(userBubble); //adds chatBubble to chatlist

  // reset text area input
  textInput.value = "";
}

function unknownCommand(unkwnCommReaction) {
  animationCounter = 1;

  //create response bubble
  var failedResponse = document.createElement('li');

  failedResponse.classList.add('bot__output');
  failedResponse.classList.add('bot__output--failed');

  //Add text to failedResponse
  failedResponse.innerHTML = unkwnCommReaction; //adds input of textarea to chatbubble list item

  //add list item to chatlist
  chatList.appendChild(failedResponse); //adds chatBubble to chatlist

  animateBotOutput();

  // reset text area input
  textInput.value = "";

  //Sets chatlist scroll to bottom
  chatList.scrollTop = chatList.scrollHeight;

  animationCounter = 1;
}

function responseText(e) {

  var response = document.createElement('li');

  response.classList.add('bot__output');

  //Adds whatever is given to responseText() to response bubble
  response.innerHTML = e;

  chatList.appendChild(response);

  animateBotOutput();

  console.log(response.clientHeight);

  //Sets chatlist scroll to bottom
  setTimeout(function () {
    chatList.scrollTop = chatList.scrollHeight;
    console.log(response.clientHeight);
  }, 0);
}

function responseImg(e) {
  var image = new Image();

  image.classList.add('bot__output');
  //Custom class for styling
  image.classList.add('bot__outputImage');
  //Gets the image
  image.src = "/images/" + e;
  chatList.appendChild(image);

  animateBotOutput();
  if (image.completed) {
    chatList.scrollTop = chatList.scrollTop + image.scrollHeight;
  } else
  {
    image.addEventListener('load', function () {
      chatList.scrollTop = chatList.scrollTop + image.scrollHeight;
    });
  }
}

//change to SCSS loop
function animateBotOutput() {
  chatList.lastElementChild.style.animationDelay = animationCounter * animationBubbleDelay + "ms";
  animationCounter++;
  chatList.lastElementChild.style.animationPlayState = "running";
}

function commandReset(e) {
  animationCounter = 1;
  previousInput = Object.keys(possibleInput)[e];
}

// hlep

var possibleInput = {
  // "hlep" : this.help(),
  "help": function () {
    responseText("You can type a command in the chatbox");
    responseText("Something like &quot;Avanyta, please show me How to Apply for Loans and CreditCards&quot;");
    commandReset(0);
    return;
  },
  //  Calculator Expenses
  "calculate": function () {
    responseText("Check Your Expenses/Value As you need :");
    responseText("AU CALCULATOR : <span ><a href=''>Check Now</a></span>");
    responseText("IDFC FIRST : <span ><a href='' >Check Now</a></span>");
    responseText("SBI SIMPLY SAVE: <span ><a href=''>Check Now</a></span>");
    responseText("SBI SIMPLY CLICK : <span ><a href=''>Check Now</a></span>");
    responseText("YES CALCULATOR : <span ><a href=''>Check Now</a></span>");
    commandReset(6);
    return;
  },
  "contact": function () {
    responseText("email: <a href='mailto:' target='_top'>send me a message</a>");
    responseText("LinkedIn: <a href=''>Creditklick</a>");
    commandReset(7);
    return;
  },
  "commands": function () {
    responseText("This is a list of commands Navvy knows:");
    responseText("help, best work, about, vision, experience, hobbies / interests, contact, rick roll");
    commandReset(8);
    return;
  },


  // Credit Card Responses
  "au": function () {
    responseText("We offers AU Creadit Cards:<br>");
    responseText("<h3>Altura Card</h3><a href='#animation'>Apply Now</a><br> (i) Rewards: Vouchers worth INR 500 on minimum INR 10,000 retail spends done within 60 days of card setup.<br>(ii) Welcome: 200 rewards Points<br>(iii)Tickets: Get discount on your bookings(Travel,Movies). <br>(iv)Benifits: Get additional benefit every month <br>(v)Cashback : 1.5% Cashback on all POS retail spends done at merchant outlets.");
    responseText("<h3>Altura Plus Card</h3> <a href='#animation'>Apply Now</a> <br>(i)Rewards: Vouchers worth INR 500 on minimum INR 10,000 retail spends done within 60 days of card setup. <br>(ii)Welcome: 200 rewards Points<br>(iii)Tickets: Get discount on your bookings(Travel,Movies).  <br>(iv)Benifits: Get additional benefit every month! <br>(v)Cashback : 1.5% Cashback on all POS retail spends done at merchant outlets.");
    responseText("<h3>LIT Card</h3> <a href='#animation'>Apply Now</a><br>(i)Rewards:Earn both Cashback & Reward Points <br>(ii)Welcome: Get rewards Points and Miestones <br>(iii)Tickets: Get discount on your bookings(Travel,Movies).<br>(iv)Complimentary: Lost Card Liability Cover<br>(v)Cashback : 1.5% Cashback on all POS retail spends done at merchant outlets. <br>(vi)Spends : Rs 4,000+ /yr on just Rs 20,000/Month.");
    commandReset(9);
    return;
  },
  "idfc": function () {
    responseText("We offers IDFC First Credit Cards:<br>");
    responseText("<h3>IDFC First Classic Card</h3><a href='#animation'>Apply Now</a> <br>Rewards: 10X Reward Points on incremental spends above ₹20,000 per month and spends done on your birthday.<br>(i) Welcome: Welcome voucher worth ₹500 on spending ₹15,000 or more within 90 days of card generation<br>(ii)Tickets:25% discount on movie tickets up to ₹100 on Paytm mobile app (valid once per month)<br>(iii)Benifits: 300+ Merchant offers, All year long! | Up to 20% discount at 1500+ restaurants | Up to 15% discount at 3000+ Health & Wellness outlets ");
    responseText("<h3>IDFC First Select Card</h3><a href='#animation'>Apply Now</a><br>(i)Rewards: Unlimited Reward points that never expire.<br>(ii)Welcome: 5% cashback (up to ₹1000) on the transaction value of first EMI done within 90 days of card generation<br>(iii)Tickets: 4 complimentary Railway lounge visits per quarter.<br>(iv)Benifits:Personal Accident Cover of ₹2,00,000* and Lost Card Liability Cover of ₹25,000 <br>(v)Cashback : 6X & 3X Reward Points on online & offline purchases respectively for spends up to ₹20,000 per month.");
    responseText("<h3>IDFC First Wealth Card</h3><a href='#animation'>Apply Now</a><br>(i) Get It: Access to International and Domestic Airport lounges and spas<br>(ii)Tickets: 'Buy one, get one' offer on movie tickets up to ₹500 on Paytm mobile app (valid twice per month).<br>(iii)Complimentary: (a)Complimentary Roadside Assistance worth ₹1,399.<br>(b) Personal Accident Cover of ₹10,00,000* and Lost Card Liability Cover of ₹50,000 .<br>(iv)Cashback : 5% cashback (up to ₹1000) on the transaction value of first EMI done within 90 days of card generation.<br>(v)Forex Markup at 1.5% for all international transactions. ");
    responseText("<h3>IDFC First Millennia Card</h3><a href='#animation'>Apply Now</a><br>(i)Rewards: 6X & 3X Reward Points on online & offline purchases respectively for spends up to ₹20,000 per month.<br>(ii) Welcome: 5% cashback (up to ₹1000) on the transaction value of first EMI done within 90 days of card generation<br>(iii) Tickets: 4 complimentary Railway lounge visits per quarter.<br>(iv) Benifits:Personal Accident Cover of ₹2,00,000* and Lost Card Liability Cover of ₹25,000<br>(v) Cashback : 100% on available purchase items.");
    commandReset(10);
    return;
  },
  "sbi": function () {
    responseText("We offers SBI Credit Cards:<br>");
    responseText("<h3>SBI Simply Click Card</h3><a href='#animation'>Apply Now</a><br>(i) Log-in Gift:Get Amazon.in gift card worth Rs.500* on payment of Annual Fee of Rs. 499 +taxes.<br>(ii) e-Shopping Rewards:Earn 10X rewards on online spends with exclusive partners- Amazon / Apollo24X7/ BookMyShow / Cleartrip / Eazydiner/ Lenskart / Netmeds Earn 5X rewards on all other online spends.<br>(iii)Benifits:<br>(a) e-voucher worth Rs.2,000 on annual online spends of Rs.1 Lakh.<br>(b)e-voucher worth Rs.2,000 on annual online spends of Rs.2 Lakhs Up to 15% discount at 3000+ Health & Wellness outlets ");
    responseText("<h3>SBI Simply Save Card</h3><a href='#animation'>Apply Now</a> <br>(i) 10X Rewards: (a)Enjoy 10 Reward Points per Rs 150 spent on Dining, Movies, Departmental Stores and Grocery Spends.<br>(b)On all your other spends, earn 1 Reward Point per Rs 150 spent (4 Reward Points = Rs. 1). <br>(ii)Extravaganza Offer: Spend Rs. 2,000 or more in first 60 days and get 2,000 bonus Reward Points <br>(iii) Enjoy Complete Fuel Freedom:<br>(a)Get freedom from paying the 1% fuel surcharge at any petrol pump. <br>(b) Transact an amount between Rs. 500 to Rs. 3,000 at any petrol pump in India to avail this offer. ");
    commandReset(11);
    return;
  },
  "yesbank": function () {
    responseText("We offers YES Bank Cards:<br>");
    responseText("<h3>Reward Plus Card</h3><br> <a href='#animation'>Apply Now</a><br>Key Attractions:(i) Zero documentation. <br> (ii) No Processing fees.<br>(iii) Repayment options from 3 months to 24 months.<br>(iv)Convert Transaction starting from as low as INR 2,500.<br>(v) Interest Rates ranging from 12% p.a to 15% p.a .");
    responseText("<h3>Prosperity Edge Card</h3><a href='#animation'>Apply Now</a> <br>(a) 8 Reward Points on every INR 200 on Travel & Dining Spends (Capped at 1,500 Reward Points per statement cycle).<br>(b) 4 Reward Points on every INR 200 on all categories (2 Reward Point for every INR 200 on Select categories).<br>(c) Accelerated rewards point will continue to be offered on select transactions on YESCART<br>(d) Enjoy 4 complimentary rounds of green fees per calendar year at select Golf courses in India.<br>(e)Enjoy one complimentary Golf Lesson every calendar month at select golf courses in India<br> Insurence Coverage:<br>(i)Life Insurance Cover of INR 50 Lakhs for death due to air accident.<br> (ii) Medical Insurance cover of INR 15 Lakhs for emergency hospitalization when travelling overseas.<br>(iii) Credit Shield cover in case of accidental death of Primary Cardmember. ");
    responseText("<h3>YES Bank Premia Card</h3> <br> <a href='#animation'>Apply Now</a><br>(i) Accelerated Reward points of 12 RP on spend of each Rs 200 on travel and dining categories (Applicable to MCC Codes defined by Mastercard, VISA & Rupay detailed list is on the website, capped at 2,500 Reward Points per statement cycle). <br>(ii) Discounts:include a 25% discount on booking movie tickets on BookMyShow website or mobile app. <br>(iii)Enjoy Complete Fuel Freedom.");
    commandReset(12);
    return;
  },
  // Loans Responses

  "bajaj": function () {
    responseText("<h3>BAJA FINSERV LOAN</h3> <a href='*'>Apply Now</a><br> <table class='table'><div class='get-fast'><h4>BAJAJ FINSERV Personal Loans Details </h4><hr></div><div class='line'></div><tbody class='tb-font'><tr><td>Interest Rate (Monthly)</td><td class='col-md-12' >13%  p.a. </td></tr><tr><td>Processing Fees</td><td>upto 3.84% of the loan amount</td></tr><tr><td>Tenure of Loan</td><td class='col-md-12'>up to 60 months</td></tr><tr><td>Past Prepayment Charges</td><td class='col-md-12'>4.72%(Inc. all applicable of Taxes)</td></tr><tr><td>Monthly Salary</td><td class='col-md-12'>Starting at Rs.22000</td></tr></tbody></table>");
    commandReset(13);
    return;
  },
  "cashe": function () {
    responseText(" <h3>CASHe Loan</h3> <a href='*'>Apply Now</a><br> <table class='table'><div class='get-fast'><h4>Cashe Personal Loans Details </h4><hr></div><div class='line'></div><tbody class='tb-font' ><tr><td class='col-lg-4'>Interest Rate (Monthly)</td><td class='col-md-12' >2.25% per month onwards </td></tr><tr><td>Loan Amount</td><td>Rs 1,000 to Rs 4 Lakhs</td></tr><tr><td>Tenure of Loan</td><td class='col-md-12'>up to 540 days</td></tr><tr><td>Processing fees</td><td class='col-md-12'>Up to 3% of the loan amount</td></tr><tr><td>Monthly Salary</td><td class='col-md-12'>Starting at Rs.15000</td></tr></tbody></table>");
    commandReset(14);
    return;
  },
  "tata": function () {
    responseText("<h3>TATA CAPITAL LOAN</h3> <a href=''>Apply Now</a><table class='table'><div class='get-fast'><h4>TATA Personal Loans Details </h4><hr></div><div class='line'></div><tbody class='tb-font'><tr><td>Interest Rate (Monthly)</td><td class='col-md-12' >10.99% p.a. </td></tr><tr><td>Processing Fees</td><td>NIL</td></tr><tr><td>Tenure of Loan</td><td class='col-md-12'>12Months - 72Months</td></tr><tr><td>Pre Closure Charges</td><td class='col-md-12'>after 12 months, 0% of principal outstanding +ST</td></tr><tr><td>3rd Person</td><td class='col-md-12'>NO 3rd Person as guarantor required.</td></tr></tbody></table>");

  } };













const scrollDown = () => {
  const distanceToScroll =
  $chatbotMessageWindow.scrollHeight - (
  $chatbotMessages.lastChild.offsetHeight + 60);
  $chatbotMessageWindow.scrollTop = distanceToScroll;
  return false;
};