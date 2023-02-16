function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifer = ml5.soundClassifer('https://teachablemachine.withgoogle.com/models/EDX5qhhzu/', modelReady)
}
function modelReady(){
    classifer.classify(gotResults);
}