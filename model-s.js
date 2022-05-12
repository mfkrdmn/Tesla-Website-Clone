let sectwotext = document.getElementById("sectwotext")



window.addEventListener("scroll",function(){

    if(document.documentElement.scrollTop > 200 && document.documentElement.scrollTop < 950 ){
        sectwotext.classList.add("animate__animated", "animate__fadeInUp","animate__slow");
      }
    else {
        sectwotext.classList.remove("animate__animated", "animate__fadeInUp","animate__slow");
      }
})

// S & Plaid cols

let scol = document.getElementById("scol");
let plaidcol = document.getElementById("plaidcol");
let engine = document.getElementById("engine")


scol.addEventListener("click",function(){

  scol.style.opacity="1";
  engine.style.backgroundImage="url('photos/smotor.jpg')";

  plaidcol.addEventListener("click",function(){

    scol.style.opacity="0.5"
    engine.style.backgroundImage="url('photos/plaidmotor.jpg')";
  
  })

})

plaidcol.addEventListener("click",function(){

  plaidcol.style.opacity="1"

  scol.addEventListener("click",function(){

    plaidcol.style.opacity="0.5"
  
  })

})


let images = [];

images[0] = ["url('photos/smotor.jpg')"];
images[1] = ["url('photos/plaidmotor.jpg')"];

let index = 0;

function change() {
  engine.style.backgroundImage = images[index];

  if (index == 1) {
    index = 0;
  } else {
    index++;
  }

  setTimeout(change, 5000);
}

change();



let opacity = [];

opacity[0] = ["0.5"];
opacity[1] = ["1"];

let index2 = 0;

function change2() {

  plaidcol.style.opacity =  opacity[index2]

  if (index2 == 1) {
    index2 = 0;
  } else {
    index2++;
  }

  setTimeout(change2, 5000);
}

change2();



let index3 = 1;

function change3() {

  scol.style.opacity = opacity[index3]

  if (index3 == 1) {
    index3 = 0;
  } else {
    index3++;
  }

  setTimeout(change3, 5000);
}

change3();

//secTen Lines

let firstline = document.getElementById("firstline");
let secline   = document.getElementById("secline");
let thdline   = document.getElementById("thdline")



window.addEventListener("scroll",function(){

  if(document.documentElement.scrollTop > 6350 && document.documentElement.scrollTop < 7950 ){
    
    firstline.style.height="200px"
    secline.style.height="300px"
    thdline.style.height="200px"

    }
  else {
      
    firstline.style.height="0px"
    secline.style.height="0px"
    thdline.style.height="0px"

    }
})


//secthirteen videos


let secThirteenFirstCol = document.getElementById("secthirteenfirstcol")
let secThirteenSecCol = document.getElementById("secthirteenseccol")
let secThirteenThdCol = document.getElementById("secthirteenthdcol")
let secThirteenFrthCol = document.getElementById("secthirteenfrthcol")
let video = document.getElementById("video");

function firtscol(){
  
  secThirteenFirstCol.style.opacity="1";
  secThirteenSecCol.style.opacity="0.5";
  secThirteenThdCol.style.opacity="0.5";
  secThirteenFrthCol.style.opacity="0.5";
  video.src="photos/video1.mp4"

}

function seccol(){
  
  secThirteenFirstCol.style.opacity="0.5";
  secThirteenSecCol.style.opacity="1";
  secThirteenThdCol.style.opacity="0.5";
  secThirteenFrthCol.style.opacity="0.5";
  video.src="photos/video2.mp4"

}

function thdcol(){
  
  secThirteenFirstCol.style.opacity="0.5";
  secThirteenSecCol.style.opacity="0.5";
  secThirteenThdCol.style.opacity="1";
  secThirteenFrthCol.style.opacity="0.5";
  video.src="photos/video3.mp4"

}

function frthcol(){
  
  secThirteenFirstCol.style.opacity="0.5";
  secThirteenSecCol.style.opacity="0.5";
  secThirteenThdCol.style.opacity="0.5";
  secThirteenFrthCol.style.opacity="1";
  video.src="photos/video4.mp4"

}

let array = []

array[0] ="photos/video1.mp4"
array[1] ="photos/video2.mp4"
array[2] ="photos/video3.mp4"
array[3] ="photos/video4.mp4"

let number = 0

function functionvideo(){

  video.src=array[number]

    if(number==3)[
      number = 0
    ]
    else(
      number++
    )

    setTimeout(functionvideo, 10000);
}
functionvideo()

//

let number0 = 0

let opacity1 = [];

opacity1[0] = ["1"];
opacity1[1] = ["0.5"];
opacity1[2] = ["0.5"];
opacity1[3] = ["0.5"];

function opacityfunction1() {

  secThirteenFirstCol.style.opacity =  opacity1[number0]

  if (number0 == 3) {
    number0 = 0;
  } else {
    number0++;
  }

  setTimeout(opacityfunction1, 10000);
}

opacityfunction1();

//

let number2 = 0

let opacity2 = [];

opacity2[0] = ["0.5"];
opacity2[1] = ["1"];
opacity2[2] = ["0.5"];
opacity2[3] = ["0.5"];

function opacityfunction2() {

  secThirteenSecCol.style.opacity =  opacity2[number2]

  if (number2 == 3) {
    number2 = 0;
  } else {
    number2++;
  }

  setTimeout(opacityfunction2, 10000);
}

opacityfunction2();

//

let number3 = 0

let opacity3 = [];

opacity3[0] = ["0.5"];
opacity3[1] = ["0.5"];
opacity3[2] = ["1"];
opacity3[3] = ["0.5"];

function opacityfunction3() {

  secThirteenThdCol.style.opacity =  opacity3[number3]

  if (number3 == 3) {
    number3 = 0;
  } else {
    number3++;
  }

  setTimeout(opacityfunction3, 10000);
}

opacityfunction3();

//

let number4 = 0

let opacity4 = [];

opacity4[0] = ["0.5"];
opacity4[1] = ["0.5"];
opacity4[2] = ["0.5"];
opacity4[3] = ["1"];

function opacityfunction4() {

  secThirteenFrthCol.style.opacity =  opacity4[number4]

  if (number4 == 3) {
    number4 = 0;
  } else {
    number4++;
  }

  setTimeout(opacityfunction4, 10000);
}

opacityfunction4();

// Model S Specs


let modelsplaiddiv = document.getElementById("modelsplaiddiv")
let modelsdiv = document.getElementById("modelsdiv")
let fourteenbuttonone = document.getElementById("fourteenbuttonone")
let fourteenbuttontwo = document.getElementById("fourteenbuttontwo")

function modelsbutton(){

  modelsplaiddiv.style.display="none"
  modelsdiv.style.display="block"
  fourteenbuttontwo.style.borderColor="white"
  fourteenbuttonone.style.borderColor="rgb(37, 37, 37)"
}

function modelsplaidbutton(){

  modelsplaiddiv.style.display="block"
  modelsdiv.style.display="none"
  fourteenbuttontwo.style.borderColor="rgb(37, 37, 37)"
  fourteenbuttonone.style.borderColor="white"
}