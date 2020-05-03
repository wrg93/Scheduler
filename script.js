var nineInput = document.querySelector("#text9");
//var tenInput = document.querySelector("#text10");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");
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

var time = new Date();





  


var months = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var month=time.getMonth()+1;

var day=time.getDate();
console.log(day)

var hour=time.getHours();
console.log(hour);



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

var btn2 = $("#btn2");
btn2.on("click", function() {
    localStorage.setItem("10 AM Events", "")
    })
