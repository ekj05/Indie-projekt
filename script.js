const radio = document.querySelectorAll('input[name="imgselect"]')
radio[0].checked = true
check()

function checkradio(){
    img1.classList.remove("show")
    img2.classList.remove("show")
    img3.classList.remove("show")
    if(radio[0].checked === true){
        img1.classList.add("show")
    } else if(radio[1].checked === true){
        img2.classList.add("show")
    } else if(radio[2].checked === true){
        img3.classList.add("show")
    }
}

function handleclick(){
    
}


radio[0].addEventListener("change", checkradio)
radio[1].addEventListener("change", checkradio)
radio[2].addEventListener("change", checkradio)
arrowL.addEventListener("click", handleclick)
// arrowR.addEventListener("click", handleclick)