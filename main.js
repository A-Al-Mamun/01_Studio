// Nav Bar Menu
let menu = document.getElementsByClassName('menu')[0];
menu.addEventListener("click", () => {
    let menuItems = document.getElementsByClassName('menu-items')[0];
    if(menuItems.style.right != "50px"){
        menuItems.style.right = "50px";
        menuItems.style.zIndex = "11";
    }else{
        menuItems.style.right = "-200px";
    }
});


// Share Section 
let shareBtn = document.getElementsByClassName('share-btn')[0];
shareBtn.addEventListener("click", () => {
    let shareSec = document.getElementsByClassName('share')[0];
    if(shareSec.style.right != "40px"){
        shareSec.style.right = "40px";
        shareSec.style.zIndex = "10";
    }else{
        shareSec.style.right = "-400px";
    }
});

// Info Section 
let infoBtn = document.getElementsByClassName('info-btn')[0];
infoBtn.addEventListener("click", () => {
    let infoSec = document.getElementsByClassName('info')[0];
    if(infoSec.style.right != "40px"){
        infoSec.style.right = "40px";
        infoSec.style.zIndex = "10";
    }else{
        infoSec.style.right = "-400px";
    }
});