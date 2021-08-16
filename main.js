Webcam.set({
width:300,
height:300,
image_format:"jpg",
png_quality:100,

constraints:{
facingMode:"environment" 
}
});

Webcam.attach("#web-cam");

function takesnapshot(){
Webcam.snap(function(data_uri){
document.getElementById("snap").innerHTML = "<img id='capture_image' src="+data_uri+">";
});
}

console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded(){
 console.log("Model Loaded-")
};

function check(){
console.log("Checked-");
img = document.getElementById('capture_image');
classifier.classify(img, gotResult);
}

function gotResult(error, result){
if(error){
console.error(error);
}
else{
console.log(result);
document.getElementById("answer"). innerHTML = result[0].label;
}
}