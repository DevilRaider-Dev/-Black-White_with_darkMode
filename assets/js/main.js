function generateCssString(){
    let cssOld = document.getElementById("css").href.split("/");
    console.log(document.getElementById("css").href)
    if(cssOld[5] == "style.css"){
        document.getElementById("css").href = "assets/css/darkMode.css";
        document.getElementById("buttonMode").innerHTML = "Light Mode";
        darkPicture();
    }else if(cssOld[5] = "darkMode.css"){
        document.getElementById("css").href = "assets/css/style.css";
        document.getElementById("buttonMode").innerHTML = "Dark Mode";
        lightPicture();
    }
}

function darkPicture(){
    let img = document.images;
    img[0].src = "assets/img/darkmode-img/wo-left.jpg";
    img[1].src = "assets/img/darkmode-img/landspace-mid.jpg"
    img[2].src = "assets/img/darkmode-img/man-right.jpg"
    img[3].src = "assets/img/darkmode-img/adrian-Xft-JdC-Jbc-unsplash.jpg"
    img[4].src = "assets/img/darkmode-img/chris-herath-FcvIlm3I2Ts-unsplash.jpg"
    img[5].src = "assets/img/darkmode-img/matthew-henry-kX9lb7LUDWc-unsplash.jpg"
    img[6].src = "assets/img/darkmode-img/phoebe-strafford-EBbP0Wrbmqs-unsplash.jpg"
    img[7].src = "assets/img/darkmode-img/landspace-mid.jpg"
}
function lightPicture(){
    let img = document.images;
    img[0].src = "assets/img/wo-left.png";
    img[1].src = "assets/img/landspace-mid.png"
    img[2].src = "assets/img/man-right.jpg"
    img[3].src = "assets/img/adrian-Xft-JdC-Jbc-unsplash.png"
    img[4].src = "assets/img/chris-herath-FcvIlm3I2Ts-unsplash.png"
    img[5].src = "assets/img/matthew-henry-kX9lb7LUDWc-unsplash.png"
    img[6].src = "assets/img/phoebe-strafford-EBbP0Wrbmqs-unsplash.png"
    img[7].src = "assets/img/landspace-mid.png"
}

function darkMode() {
    generateCssString()
}
