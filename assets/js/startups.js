var loginbtn = document.querySelector('.login-btn');
var loginbg = document.querySelector('.login-bg');
var signupbtn = document.querySelector('.signup-btn');
var signupbg = document.querySelector('.signup-bg');
var signupClose = document.querySelector('.signup-close');
var loginClose = document.querySelector('.login-close');

console.log("hello");
loginbtn.addEventListener('click', function(){
  signupbg.classList.remove('bg-active');
  loginbg.classList.add('bg-active');
})

signupbtn.addEventListener('click', function(){
  loginbg.classList.remove('bg-active');
  signupbg.classList.add('bg-active');
})

signupClose.addEventListener('click', function(){
  signupbg.classList.remove('bg-active');
})

loginClose.addEventListener('click', function(){
  loginbg.classList.remove('bg-active');
})



console.log("anything");
const header = document.querySelector("nav");


window.addEventListener("scroll", function(){
  //console.log("in fun");
  let scrollPosition = window.pageYOffset;
  let scrollvalue = scrollPosition*0.9;
  
  console.log(scrollvalue);
  if(scrollvalue>5){
    header.style.visibility="hidden";
  }
  else{
    header.style.visibility="visible";
  }
  //parallex2.style.transform  = 'translateY(' + scrollPosition*(-1) + 'px';

})


$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } // End if
  });
});