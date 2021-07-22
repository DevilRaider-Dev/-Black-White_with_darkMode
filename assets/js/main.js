function darkMode() {
    generateCssString()
}

function generateCssString() {
    let cssOld = document.getElementById("css").href.split("/");
    let cssNew = "";
    if (cssOld[5] = "style.css") {
        cssOld[5] = "darkMode.css";
        cssOld.forEach(element => {
            if (!cssOld[5]) {
                cssNew += element + "/";
            } else {
                cssnew += element;
            }
        });
    } else {
        cssOld[5] = "darkMode.css";
        cssOld.forEach(element => {
            if (!cssOld[5]) {
                cssNew += element + "/";
            } else {
                cssnew += element;
            }
        });
    }
        document.getElementById("css").href = cssNew;
        console.log(cssNew);
}