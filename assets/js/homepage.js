 // _------------ side nav  -----------
 let btnNav = document.querySelector('#btn-nav'),
 hamImg = document.querySelector('#ham-menu-img'),
 overlay = document.querySelector('.overlay'),
 sidenav = document.querySelector('.sidenav'),
 body=document.body;
 
 
 overlay.style.right = "-100%";
 sidenav.style.right = "-315px"
 
 btnNav.addEventListener("click", () => {
 if (overlay.style.right == "-100%") {
     overlay.style.right = "0";
     sidenav.style.right = "0";
     hamImg.src = "../assets/img/colse-nav-btn-light.webp";
     body.classList.add("disable-scroll");
 }
 else {
     sidenav.style.right = "-315px";
     overlay.style.right = "-100%";
     hamImg.src = "../assets/img/ham-menu-light.svg";
     body.classList.remove("disable-scroll");
 }
 })
 
 
 // overlay.addEventListener("click", () => {
 //         sidenav.style.right = "-315px";
 //         overlay.style.right = "-100%";
 // })
 
 
 // for resize 
 function changeTextualName() {
 
 if (window.innerWidth > 768) {
     sidenav.style.right = "-315px";
     overlay.style.right = "-100%";
     hamImg.src = "../assets/img/ham-menu-light.svg";
 }
 }
 window.addEventListener('resize', changeTextualName);
 
 
 // slider 
 
 const imgs = document.querySelector(".window ul"),
   img = document.querySelectorAll(".window ul li");
 var index = 0;
 function run() {
   index++;
   if (index > img.length - 4) {
     index = 0;
   }
   if (window.innerWidth > 767) {
     imgs.style.transform = `translateX(${index * 150}px)`;
   }
   if(window.innerWidth < 767){
     imgs.style.transform = `translateX(${index * 80}px)`;
   }
  
 
 }
 setInterval(run, 3000);