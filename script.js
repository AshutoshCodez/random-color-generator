let generate = document.getElementById("generate")
let colorcode = document.getElementById("colorcode")


generate.addEventListener("click", ()=>{
    let randomcolor = Math.floor(Math.random() * 16777215)
     randomcolor.toString(16)
    let color =  "#" + randomcolor.toString(16)

     document.body.style.backgroundColor = color
     colorcode.innerText = color
})