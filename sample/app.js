const database = [
   {
      question: "Choose Traffic Light ?",
      a: "./img/traffic.jpg",
      b: "./img/mountain.jpg",
      c: "./img/ambulance.jpg",
      d: "./img/airport.jpg",
      correctanswer: "a"
   },
   {
      question: "Choose Mountain ?",
      a: "./img/ambulance.jpg",
      b: "./img/mountain.jpg",
      c: "./img/traffic.jpg",
      d: "./img/airport.jpg",
      correctanswer: "b"
   },
   {
      question: "Choose  Ambulance Track ?",
      a: "./img/ambulance.jpg",
      b: "./img/airport.jpg",
      c: "./img/traffic.jpg",
      d: "./img/mountain.jpg",
      correctanswer: "a"
   },
   {
      question: "Choose  Airport ?",
      a: "./img/traffic.jpg",
      b: "./img/mountain.jpg",
      c: "./img/ambulance.jpg",
      d: "./img/airport.jpg",
      correctanswer: "d"
   },

];

const getcontainer = document.querySelector('.container');
const gettitle = document.querySelector('.title');
const getanswers = document.querySelectorAll('.answer');


const geta_img = document.getElementById('a_img');
const getb_img = document.getElementById('b_img');
const getc_img = document.getElementById('c_img');
const getd_img = document.getElementById('d_img');

const getbtn = document.querySelector('.btn');


let currentidx = 0;
let score = 0;

startquestion();

function startquestion(){
   // console.log('i am working');
   removeselects();
   const currentqes = database[currentidx];

   gettitle.innerText = currentqes.question;

   geta_img.src = currentqes.a;
   getb_img.src = currentqes.b;
   getc_img.src = currentqes.c;
   getd_img.src = currentqes.d;
}


function getsingleanswer(){
   // console.log('hi');

   let answer;

   getanswers.forEach(function(getanswer){

      // console.log(answer);
      if(getanswer.checked){
         answer = getanswer.id;
         // console.log(answer);
      }
   });

   return answer;
}

function removeselects(){
   getanswers.forEach(function(getanswer){
      return getanswer.checked = false;
   })
}


getbtn.addEventListener('click',function(){
   const answer = getsingleanswer();
   // console.log(answer);
   if(answer){

      if(answer === database[currentidx].correctanswer){
         score++;
      }

       currentidx++;
       
       if(currentidx < database.length){
         startquestion();
       }else{
         getcontainer.innerHTML = `
        <h3>Totoal score is ${score*25}</h3>
        <h4>You answered correctly at ${score} / ${database.length} questions. </h4>
        <!--<button type="button" class="btn" ondblclick="location.reload()">Reload Me</button> -->
        <button type="button" class="btn" onclick="dblclick()">Double Click To Reload Me</button>
         `;
       }
   }else{
      window.alert('Please choose one answer');
   }
});

let clicktimes = 0;

function dblclick(){
   // console.log('i am working');
     if(clicktimes === 0){
       clicktimes = new Date().getTime();
     }else{
        if((new Date().getTime() - clicktimes < 800)){
             location.reload();
             clicktimes = 0;
        }else{
            clicktimes = Date.now();
        }
     }
}




