let sectwotext = document.getElementById("sectwotext")



window.addEventListener("scroll",function(){

    if(document.documentElement.scrollTop > 200 && document.documentElement.scrollTop < 950 ){
        sectwotext.classList.add("animate__animated", "animate__fadeInUp","animate__slow");
      }
    else {
        sectwotext.classList.remove("animate__animated", "animate__fadeInUp","animate__slow");
      }
})