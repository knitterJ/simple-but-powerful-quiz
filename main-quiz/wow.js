var
start = document.getElementById('start');
content = document.getElementById('phrase');
button = document.getElementById('wpProQuiz_button');
blaa = document.getElementById('blaa');
timer = document.getElementById('timer'); 
timeSpan = document.getElementById('time');
progressBar = document.getElementById("timer-gauge-bar-inner"); 


// button.onclick = function changePhrase(){
//   console.log("jwefjj");
//   content.innerHTML = "wow!"
// }

function renderQuestion(){
  
}

blaa.display = "none";
timer.style.display = "none"; 
console.log(blaa.display);

// start.addEventListener("click",startQuiz());
start.onclick = function () {
  let interval = 3599; 


  if (blaa.style.display !== "none") {
    blaa.style.display = "none";
    timer.style.display = "block"; 
  } else {
    blaa.style.display = "block";
  }
  console.log(blaa.display); 

  const getPercentage = (x) => (x / 60) * 100;
  
  //Where the countdown starts 
  var countDown = setInterval(() => {
    
    var seconds = interval % 60 ; // Seconds that cannot be written in minutes
    var secondsInMinutes = (interval - seconds) / 60; // Gives the seconds that COULD be given in minutes
    var minutes = secondsInMinutes % 60; // Minutes that cannot be written in hours
    var hours = "0" + (secondsInMinutes - minutes) / 60;
    

    interval -- ;
    let progressWidth = interval / 3599 * 100; 

    if(interval > 0 ) {
        progressBar.style.width = progressWidth +  "%"; 
        timeSpan.innerHTML = hours + ":" + minutes + ":" + seconds; 
    } else {
      clearInterval(countDown)
      progressBar.style.width = "0%"; 
      timeSpan.innerHTML = "Times Up : ( "
    }
  }, 1000);
}

$('.review-question-box li').click(function(event){
  
  // In the next stage there will be the code for exchanging current question. Similar to: https://jqueryui.com/tabs/#ajax

  //Decipher on the next session what does event.preventDefault(); mean
  event.preventDefault();

  //Functionality that highlights the active tile. Based on http://jsfiddle.net/1ruy1t2h/3/
  
  //1.2. With the next click on the tile, remove "active" class from "review-question-box li" elements
  $('.review-question-box li').removeClass('active');

  //1.1. Clicking the tile adds the class "active" (meaning the tile becomes red)
  $(this).addClass('active');

  //Interestingly, the code doesn't work if removeClass and activeClass lines are exchanged, i.e. placed in different order 
});


//Will be useful when implementing next button: https://stackoverflow.com/questions/41188276/jquery-onclick-button-next-in-form
// https://www.youtube.com/watch?v=49pYIMygIcU
// function getQuote() {
//     fetch("http://fakeapi.jsonparseronline.com/posts/1")
//       .then(response => response.json())
//       .then(function(data) {
//         console.log(data);
//       })
//       .catch(function(error) {
//         // If there is any error you will catch them here
//         console.log(error);
//       });
//   }
