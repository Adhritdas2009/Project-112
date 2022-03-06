Webcam.set({
    width: 300,
    height: 300,
    image_format: 'png',
    png_quality: 90
})

webcamera=document.getElementById("webcamera")
Webcam.attach("#webcamera")

function capture(){
    Webcam.snap(function (data_uri){
        document.getElementById("snapcam").innerHTML="<img src="+data_uri+" id='snappie'>"
    })
}
console.log("ml5 version is", ml5.version)

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NvNhyFB6A/model.json", modelLoaded);

function modelLoaded(){
    console.log("The model has been initialized")
}

function identify(){
    img=document.getElementById("snappie");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }

    else{
        console.log(results);
        document.getElementById("emoji_name1").innerHTML=results[0].label;

        if(results[0].label=="Victory"){
            document.getElementById("emoji1").innerHTML="✌"
        }

        if(results[0].label=="Good"){
            document.getElementById("emoji1").innerHTML="👍"
        }
        if(results[0].label=="Best"){
            document.getElementById("emoji1").innerHTML="👌"
        }

        if(results[0].label=="Stop"){
            document.getElementById("emoji1").innerHTML="✋"
        }

        if(results[0].label=="Bad"){
            document.getElementById("emoji1").innerHTML="👎"
        }

        if(results[0].label=="Punch"){
            document.getElementById("emoji1").innerHTML="👊"
        }
    }
}