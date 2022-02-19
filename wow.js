var
  start = document.getElementById('start');
content = document.getElementById('phrase');
button = document.getElementById('wpProQuiz_button');
blaa = document.getElementById('blaa');


// button.onclick = function changePhrase(){
//   console.log("jwefjj");
//   content.innerHTML = "wow!"
// }

function renderQuestion(){
  
}

// start.addEventListener("click",startQuiz());
start.onclick = function () {
  // blaa.display = "none";
  if (blaa.style.display !== "none") {
    blaa.style.display = "none";
  } else {
    blaa.style.display = "block";
  }
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
