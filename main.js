
var icon = document.getElementById("icon")

icon.onclick = function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        icon.src="sun.png"
    }else{
        icon.src="moon.png"
    }
    
}

function  startC(){
     navigator.mediaDevices.getUserMedia({audio:true});
     classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nVLAnyR-R/model.json',modelready)
}
function modelready() {
    classifier.classify(gotResults);
}
function gotResults(error, results){
  if(error){
      console.log(error)
  }else{
      console.log(results);
  }
}