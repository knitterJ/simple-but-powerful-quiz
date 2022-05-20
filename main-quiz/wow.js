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
