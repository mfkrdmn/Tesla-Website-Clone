let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let buttons = document.getElementById("buttons")

window.addEventListener("scroll",function(){

    //Model 3

    if(document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < 100 ){
        buttons.style.opacity="1"
         btn1.innerHTML="Custom Order"
        btn2.innerHTML="Existing Inventory"
      }
    else if(document.documentElement.scrollTop > 100 && document.documentElement.scrollTop < 300 ){
        buttons.style.opacity="0.5"
         btn1.innerHTML="Custom Order"
        btn2.innerHTML="Existing Inventory"
      }
    else if(document.documentElement.scrollTop > 300 && document.documentElement.scrollTop < 600 ){
        buttons.style.opacity="0.0"
         btn1.innerHTML="Custom Order"
        btn2.innerHTML="Existing Inventory"
      }

    //Model Y
      
    else if(document.documentElement.scrollTop > 600 && document.documentElement.scrollTop < 900 ){
        buttons.style.opacity="0.5"
         btn1.innerHTML="Custom Order"
        btn2.innerHTML="Existing Inventory"
      }
    else if(document.documentElement.scrollTop > 900 && document.documentElement.scrollTop < 1100 ){
        buttons.style.opacity="1"
         btn1.innerHTML="Custom Order"
        btn2.innerHTML="Existing Inventory"
      }
    else if(document.documentElement.scrollTop > 1100 && document.documentElement.scrollTop < 1300 ){
        buttons.style.opacity="0.5"
         btn1.innerHTML="Custom Order"
        btn2.innerHTML="Existing Inventory"
      }
    else if(document.documentElement.scrollTop > 1300 && document.documentElement.scrollTop < 1600 ){
        buttons.style.opacity="0.0"
         btn1.innerHTML="Custom Order"
        btn2.innerHTML="Existing Inventory"
      }

    //Model S

    else if(document.documentElement.scrollTop > 1600 && document.documentElement.scrollTop < 1800 ){
        buttons.style.opacity="0.5"
         btn1.innerHTML="Custom Order"
        btn2.innerHTML="Existing Inventory"
      }
    else if(document.documentElement.scrollTop > 1800 && document.documentElement.scrollTop < 2000 ){
        buttons.style.opacity="1"
         btn1.innerHTML="Custom Order"
        btn2.innerHTML="Existing Inventory"
      }

    else if(document.documentElement.scrollTop > 2000 && document.documentElement.scrollTop < 2200 ){
        buttons.style.opacity="0.5"
         btn1.innerHTML="Custom Order"
        btn2.innerHTML="Existing Inventory"
      }


    else if(document.documentElement.scrollTop > 2200 && document.documentElement.scrollTop < 2500 ){
        buttons.style.opacity="0.0"
         btn1.innerHTML="Custom Order"
        btn2.innerHTML="Existing Inventory"
      }

    //Model X

    else if(document.documentElement.scrollTop > 2500 && document.documentElement.scrollTop < 2700 ){
        buttons.style.opacity="0.5"
         btn1.innerHTML="Custom Order"
        btn2.innerHTML="Existing Inventory"
      }
    else if(document.documentElement.scrollTop > 2700 && document.documentElement.scrollTop < 3000 ){
        buttons.style.opacity="1"
         btn1.innerHTML="Custom Order"
        btn2.innerHTML="Existing Inventory"
      }

    else if(document.documentElement.scrollTop > 3000 && document.documentElement.scrollTop < 3200 ){
        buttons.style.opacity="0.5"
         btn1.innerHTML="Custom Order"
        btn2.innerHTML="Existing Inventory"
      }
    else if(document.documentElement.scrollTop > 3200 && document.documentElement.scrollTop < 3500 ){
        buttons.style.opacity="0"
         btn1.innerHTML="Custom Order"
        btn2.innerHTML="Existing Inventory"
      }

    //Panels

    else if(document.documentElement.scrollTop > 3500 && document.documentElement.scrollTop < 3700 ){
        buttons.style.opacity="0.5"
        btn1.innerHTML="ORDER NOW"
        btn2.innerHTML="LEARN MORE"
      }

    else if(document.documentElement.scrollTop > 3700 && document.documentElement.scrollTop < 4000 ){
        buttons.style.opacity="1"
        btn1.innerHTML="ORDER NOW"
        btn2.innerHTML="LEARN MORE"
      }

    else if(document.documentElement.scrollTop > 4000 && document.documentElement.scrollTop < 4200 ){
        buttons.style.opacity="0.5"
        btn1.innerHTML="ORDER NOW"
        btn2.innerHTML="LEARN MORE"
      }

    else if(document.documentElement.scrollTop > 4200 && document.documentElement.scrollTop < 4500 ){
        buttons.style.opacity="0.0"
        btn1.innerHTML="ORDER NOW"
        btn2.innerHTML="LEARN MORE"
      }

    //Roofs

    
    else if(document.documentElement.scrollTop > 4500 && document.documentElement.scrollTop < 4700 ){
        buttons.style.opacity="0.5"
        btn1.innerHTML="ORDER NOW"
        btn2.innerHTML="LEARN MORE"
      }
    
    else if(document.documentElement.scrollTop > 4700 && document.documentElement.scrollTop < 4930 ){
        buttons.style.opacity="1"
        btn1.innerHTML="ORDER NOW"
        btn2.innerHTML="LEARN MORE"
      }

  })

  window.addEventListener("scroll",function(){

    if(document.documentElement.scrollTop > 4930 && document.documentElement.scrollTop < 5900 ){
    buttons.style.display="none"
  }

    else {
    buttons.style.display="block"
}

})