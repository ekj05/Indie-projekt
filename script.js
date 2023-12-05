const radio = document.querySelectorAll('input[name="imgselect"]')
let currentimg = 0
img1.classList.add("show")
radio[0].checked = true

function check(event){
    img1.classList.remove("show")
    img2.classList.remove("show")
    img3.classList.remove("show")
    if(event.target.value === "img1"){
        img1.classList.add("show")
        currentimg = 0
    }
    if(event.target.value === "img2"){
        img2.classList.add("show")
        currentimg = 1
    }
    if(event.target.value === "img3"){
        img3.classList.add("show")
        currentimg = 2
    }
    console.log(currentimg)
}

function handleclick(event){
    if(event.target.id === arrowL){
        
    }
}
radio[0].addEventListener("change", check)
radio[1].addEventListener("change", check)
radio[2].addEventListener("change", check)
arrowL.addEventListener("click", handleclick)
arrowR.addEventListener("click", handleclick)