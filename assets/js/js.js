const hamburger= document.querySelector("#nav-menu");
const menu= document.querySelector("#menu");

menu.addEventListener("click", ()=>{
    // alert("click")
    hamburger.classList.toggle("show");
})

window.addEventListener("click", e =>{
    if(hamburger.classList.contains("show")&& e.target != hamburger &&  e.target != menu){
        hamburger.classList.toggle("show");
    }

})
