const radio = document.querySelectorAll('input[name="imgselect"]')
img1.classList.add("show")
radio[0].checked = true

function check(event){
    img1.classList.remove("show")
    img2.classList.remove("show")
    img3.classList.remove("show")
    switch (event.target.value === ) {
        case value:
            
            break;
    
        default:
            break;
    }
}

// function handleclick(event){
//     img1.classList.remove("show")
//     img2.classList.remove("show")
//     img3.classList.remove("show")
// 
// }

radio[0].addEventListener("change", check)
radio[1].addEventListener("change", check)
radio[2].addEventListener("change", check)
arrowL.addEventListener("click", handleclick)
// arrowR.addEventListener("click", handleclick)