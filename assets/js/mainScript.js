//===== Put the navbar from bottom to stay fixed on top when we scroll =====//

//Get the #navbar from DOM
var navbar = document.querySelector("#navbar");
//Offset position of the bar
var offset = navbar.offsetTop;

window.onscroll =  function () {
    if (window.pageYOffset > offset) {
        navbar.classList.remove('bottom-nav');
        navbar.classList.add('top-nav');
    } else {
        navbar.classList.add('bottom-nav');
        navbar.classList.remove('top-nav')
    }
};

//===== Clicked link from navbar menu to collapse =====//;

  $('.nav-link').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

 //===== Button to collapse in/out on click on media device(small screen) =====//;
 /* 
 select the object which contain the navbar menu
 var collapsibleNavbar = document.querySelector("#collapsibleNavbar");

 call the function on click on the #btn
 document.querySelector("#btn").onclick = function() {displayMenu()};

 function displayMenu() {
     
     if(collapsibleNavbar.style.display === "block") {
        collapsibleNavbar.style.display = "none";
     } else {
        collapsibleNavbar.style.display = "block";
     }
 };

*/

 /*scrollspy $('body').scrollspy({ target: '#navbarScrollSpy' })*/


  //===== Contact form =====//;
//Set the email
function sendEmail () {
    const usrName = document.getElementById('usrName').value;
    const messageForm = document.getElementById('messageForm').value;
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('errorMessage');
    
    //declare the autofill email 
    const myEmailAdress = "mailto:h_alecsa@yahoo.com" 
        + "?cc=" + email
        + "&subject=" + escape("Email from: " + usrName)
        + "&body=" + escape(messageForm);

    let displayMessage;

    if (usrName === '') {
       // console.log('User Name Empty')
        displayMessage = `Please enter a valid name`;
        errorMessage.innerHTML = displayMessage;
    };

    if (email.indexOf("@") == -1) {
        //console.log ('This is not a valid email address')
        displayMessage = `Please enter a valid Email address`;
        errorMessage.innerHTML = displayMessage;
    };

    if (usrName === '' && email === '') {
        //console.log('Invalid fields!')
        displayMessage = `Invalid fields!`;
        errorMessage.innerHTML = displayMessage;
    };
   
    if (usrName !== '' && email !== '') {        
        window.location.href = myEmailAdress;
        //console.log(`Name is: ${usrName} and email address is: ${email}`);
    };   
    
 };
 
 const sendMessage = document.getElementById('sendMessage');
 sendMessage.addEventListener('click', function(){
        sendEmail(); 

 });




