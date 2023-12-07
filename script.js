const radio = document.querySelectorAll('input[name="imgselect"]')
radio[0].checked = true
checkradio()

function checkradio(){
    img1.classList.remove("show")
    img2.classList.remove("show")
    img3.classList.remove("show")
    switch (true) {
        case radio[0].checked:
            img1.classList.add("show");
            break;
        case radio[1].checked:
            img2.classList.add("show");
            break;
        case radio[2].checked:
            img3.classList.add("show");
            break;
    }
}

function handleclick(){
    switch(true){
        case radio[0].checked:
            radio[2].checked = true
            break;
        case radio[1].checked:
            radio[0].checked = true
            break;
        case radio[2].checked:
            radio[1].checked = true
            break;
    }
    checkradio()
}

function handleclick2(){
    switch(true){
        case radio[0].checked:
            radio[1].checked = true
            break;
        case radio[1].checked:
            radio[2].checked = true
            break;
        case radio[2].checked:
            radio[0].checked = true
            break;
    }
    checkradio()
}

function login(){
    localStorage.setItem("userdata")
}

radio[0].addEventListener("click", checkradio)
radio[1].addEventListener("click", checkradio)
radio[2].addEventListener("click", checkradio)
arrowL.addEventListener("click", handleclick)
arrowR.addEventListener("click", handleclick2)