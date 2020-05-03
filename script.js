//9AM
var nineInput = document.querySelector("#text9");
var btn1 = document.querySelector("#btn1");

renderLastRegistered();


function renderLastRegistered() {
  var nine = localStorage.getItem("nine");
  if (nine === null) {
    return;
  }
 nineInput.textContent = nine;
}

btn1.addEventListener("click", function(event) {
  event.preventDefault();
  var nine = document.querySelector("#text9").value;
    localStorage.setItem("nine", nine);
    renderLastRegistered();

});

//10AM
var tenInput = document.querySelector("#text10");
var btn2 = document.querySelector("#btn2");

renderLastRegistered2();


function renderLastRegistered2() {
  var ten = localStorage.getItem("ten");
  if (ten === null) {
    return;
  }
 tenInput.textContent = ten;
}

btn2.addEventListener("click", function(event) {
  event.preventDefault();
  var ten = document.querySelector("#text10").value;
    localStorage.setItem("ten", ten);
    renderLastRegistered2();
});

//11AM
var elevenInput = document.querySelector("#text11");
var btn3 = document.querySelector("#btn3");

renderLastRegistered3();


function renderLastRegistered3() {
  var eleven = localStorage.getItem("eleven");
  if (eleven === null) {
    return;
  }
 elevenInput.textContent = eleven;
}

btn3.addEventListener("click", function(event) {
  event.preventDefault();
  var eleven = document.querySelector("#text11").value;
    localStorage.setItem("eleven", eleven);
    renderLastRegistered3();
});

//12PM
var twelveInput = document.querySelector("#text12");
var btn4 = document.querySelector("#btn4");

renderLastRegistered4();


function renderLastRegistered4() {
  var twelve = localStorage.getItem("twelve");
  if (twelve === null) {
    return;
  }
 twelveInput.textContent = twelve;
}

btn4.addEventListener("click", function(event) {
  event.preventDefault();
  var twelve = document.querySelector("#text12").value;
    localStorage.setItem("twelve", twelve);
    renderLastRegistered4();
});

//1PM
var thirteenInput = document.querySelector("#text13");
var btn5 = document.querySelector("#btn5");

renderLastRegistered5();


function renderLastRegistered5() {
  var thirteen = localStorage.getItem("thirteen");
  if (thirteen === null) {
    return;
  }
 thirteenInput.textContent = thirteen;
}

btn5.addEventListener("click", function(event) {
  event.preventDefault();
  var thirteen = document.querySelector("#text13").value;
    localStorage.setItem("thirteen", thirteen);
    renderLastRegistered5();
});

//2PM
var fourteenInput = document.querySelector("#text14");
var btn6 = document.querySelector("#btn6");

renderLastRegistered6();


function renderLastRegistered6() {
  var fourteen = localStorage.getItem("fourteen");
  if (fourteen === null) {
    return;
  }
 fourteenInput.textContent = fourteen;
}

btn6.addEventListener("click", function(event) {
  event.preventDefault();
  var fourteen = document.querySelector("#text14").value;
    localStorage.setItem("fourteen", fourteen);
    renderLastRegistered6();
});

//3PM
var fifteenInput = document.querySelector("#text15");
var btn7 = document.querySelector("#btn7");

renderLastRegistered7();


function renderLastRegistered7() {
  var fifteen = localStorage.getItem("fifteen");
  if (fifteen === null) {
    return;
  }
 fifteenInput.textContent = fifteen;
}

btn7.addEventListener("click", function(event) {
  event.preventDefault();
  var fifteen = document.querySelector("#text15").value;
    localStorage.setItem("fifteen", fifteen);
    renderLastRegistered7();
});

//4PM
var sixteenInput = document.querySelector("#text16");
var btn8 = document.querySelector("#btn8");

renderLastRegistered8();


function renderLastRegistered8() {
  var sixteen = localStorage.getItem("sixteen");
  if (sixteen === null) {
    return;
  }
 sixteenInput.textContent = sixteen;
}

btn8.addEventListener("click", function(event) {
  event.preventDefault();
  var sixteen = document.querySelector("#text16").value;
    localStorage.setItem("sixteen", sixteen);
    renderLastRegistered8();
});

//5PM
var seventeenInput = document.querySelector("#text17");
var btn9 = document.querySelector("#btn9");

renderLastRegistered9();


function renderLastRegistered9() {
  var seventeen = localStorage.getItem("seventeen");
  if (seventeen === null) {
    return;
  }
 seventeenInput.textContent = seventeen;
}

btn9.addEventListener("click", function(event) {
  event.preventDefault();
  var seventeen = document.querySelector("#text17").value;
    localStorage.setItem("seventeen", seventeen);
    renderLastRegistered9();
});


var time = new Date();


var months = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var month=months[time.getMonth()];

var day=time.getDate();
console.log(day)

var hour=time.getHours();
console.log(hour);


$("#currentDay").text(month + " " + day);

if (hour>17){
    $("#9, #10, #11, #12, #13, #14, #15, #16, #17").attr("class","past time-block row");
    
}

console.log(hour)

if ((hour<18)&&(hour>16)) {
    $("#9, #10, #11, #12, #13, #14, #15, #16").attr("class","past time-block row");
    $("#17").attr("class", "present time-block row")
}

console.log(hour)

if ((hour<17)&&(hour>15)){
    $("#9, #10, #11, #12, #13, #14, #15").attr("class","past time-block row");
    $("#16").attr("class", "present time-block row")
    $("#17").attr("class", "future time-block row")
}

if ((hour<16)&&(hour>14)){
    $("#9, #10, #11, #12, #13, #14").attr("class","past time-block row");
    $("#15").attr("class", "present time-block row")
    $("#16, #17").attr("class", "future time-block row")
}

if ((hour<15)&&(hour>13)){
    $("#9, #10, #11, #12, #13").attr("class","past time-block row");
    $("#14").attr("class", "present time-block row")
    $("#15, #16, #17").attr("class", "future time-block row")
}

if ((hour<14)&&(hour>12)){
    $("#9, #10, #11, #12").attr("class","past time-block row") 
    $("#13").attr("class", "present time-block row")
    $("#14, #15, #16, #17").attr("class", "future time-block row")
}

if ((hour<13)&&(hour>11)){
    $("#9, #10, #11").attr("class","past time-block row") 
    $("#12").attr("class", "present time-block row")
    $("#13, #14, #15, #16, #17").attr("class", "future time-block row")
}

if ((hour<12)&&(hour>10)){
    $("#9, #10").attr("class","past time-block row") 
    $("#11").attr("class", "present time-block row")
    $("#12, #13, #14, #15, #16, #17").attr("class", "future time-block row")
}

if ((hour<11)&&(hour>9)){
    $("#9").attr("class","past time-block row") 
    $("#10").attr("class", "present time-block row")
    $("#11, #12, #13, #14, #15, #16, #17").attr("class", "future time-block row")
}

if ((hour<10)&&(hour>8)){ 
    $("#9").attr("class", "present time-block row")
    $("#10, #11, #12, #13, #14, #15, #16, #17").attr("class", "future time-block row")
}

if (hour<9){ 
    $("#9, #10, #11, #12, #13, #14, #15, #16, #17").attr("class", "future time-block row")
}

console.log(hour);



/*var btn1 = $("#btn1");
btn1.on("click", function() {
    localStorage.setItem("9 AM Events", text9)
    })*/


