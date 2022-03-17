function toggleMenu(){
   let iconMenu = document.getElementById('iconMenu');
   let menuDropDown = document.getElementById('menuDropDown');
   let width = window.innerHeight;
   if(iconMenu && menuDropDown){
    iconMenu.classList.toggle('fa-xmark');
    menuDropDown.classList.toggle('hidden')

   }
}
const setMenu = () =>{
   let width = window.innerWidth;
   let notMobile = document.getElementById('notMobile');
   let menuDropDown = document.getElementById('menuDropDown');
   const menuNav = `<li class="cursor-pointer mb-2 hover:text-purple-600 transition-colors duration-300">Features</li>
   <li class="cursor-pointer mb-2 hover:text-purple-600 transition-colors duration-300">Why E-Wallet</li>
   <li class="cursor-pointer mb-2 hover:text-purple-600 transition-colors duration-300">Pricing</li>
   <li class="cursor-pointer mb-2 hover:text-purple-600 transition-colors duration-300">Blog</li>`;
   if(width >= 640){
      notMobile.innerHTML = menuNav;
      menuDropDown.innerHTML = '';
   }else{
      notMobile.innerHTML = '';
      menuDropDown.innerHTML = menuNav;
   }
}
// if(width){
//    setMenu(width);
// }
window.addEventListener("resize", setMenu);
