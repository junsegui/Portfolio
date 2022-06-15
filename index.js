
const EN = document.getElementById("EN");
const ES = document.getElementById("ES");
const primerParte = document.getElementById("primerParte")
const toPresentation = document.getElementById("toPresentation");
const body = document.querySelector("body")

EN.addEventListener("click",(()=>{
    let url = "./en.html"
    location.href = `${url}`

}))

body.addEventListener("click",(e)=>{
    console.log(e);
})