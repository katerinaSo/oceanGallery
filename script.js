let test = document.getElementById("page")
test.onclick = () =>
    !(test.className === "redBg") ?
        test.className = "redBg" :
        test.className = "org"
