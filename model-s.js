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