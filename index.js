
const EN = document.getElementById("EN");
const ES = document.getElementById("ES");
const primerParte = document.getElementById("primerParte")
const toPresentation = document.getElementById("toPresentation");
const body = document.querySelector("body");
const upButton = document.querySelector(".upButton")

EN.addEventListener("click",(()=>{
    let url = "./en.html"
    location.href = `${url}`

}))

body.addEventListener("click",(e)=>{
    console.log(e);
})




window.addEventListener("scroll",()=>{
    if(window.pageYOffset > 100){
        upButton.classList.add("active")
    }else{
        upButton.classList.remove("active")
    }
})
