//setup end date for countdown
let launchDate = new Date("Sep 28, 2021 12:00:00").getTime();
//set timer to tick every 1 second
let Timer = setInterval(tick, 1000);

function (){
  //get current time
  let now = new Date().getTime();
  //get the difference in time left until reaches 0
  let t = launchDate - now;

  //check if time is above 0
  if(t>0){
    //setup days,hours, seconds and minutes
    //algorith to calculate days...
    let days = Math.floor(t/(1000*60*60*24));
    //prefix any number below 10 with a "0"
     if(days<0) {days = "0" + days; }

     let hours = Math.floor((t %(1000*60*60*24))/(1000*60*60));
     if (hours < 10) {hours = "0" + hours; }

     //Algorith to calculate minutes
     let mins = Math.floor((t % (1000*60*60))/ (1000*60));
     if (mins < 10) { mins = "0" + mins; }

     //Algorithm to solve seconds
     let secs = Math.floor((t % (1000 * 60))/ 1000);
     if (secs <10) {secs = "0" + secs; }

     //create Time String
     let time = '${days}: ${hours}: ${mins}: ${secs}';

     //set time on document
     document.querySelector('.countdown').innerText = time;
  }
}
