// Navbar Javascript Code Start
    // Selecting HTML Elements
let navbar=document.querySelector(".navbar-list"),
   menu=document.getElementById('menu'),
  close=document.getElementById('close');
    //  Appy Click Event on menu
menu.addEventListener('click',()=>{
 navbar.classList.add('active');
});
   //  Remove Click Event on menu
close.addEventListener('click',()=>{
    navbar.classList.remove('active');
});
// Navbar Javascript Code End
