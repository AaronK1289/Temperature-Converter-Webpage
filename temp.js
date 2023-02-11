// Aaron Kim Date: 02/08/2023

const tempButton = document.getElementById("button");
window.onload = function(){
    document.getElementById("right-input").addEventListener("keypress", rightListener);

    function rightListener(){
        document.getElementById("right-input").classList.add("click")
        document.getElementById("left-input").classList.remove("click")
    }

    document.getElementById("left-input").addEventListener("keypress", leftListener);

    function leftListener(){
        document.getElementById("left-input").classList.add("click")
        document.getElementById("right-input").classList.remove("click")
    }
}

function tempFarToCels(valNum){
    return (valNum-32) / 1.8;
}

function tempFarToKelv(valNum){
    return 5/9*(valNum - 32) + 273.15;
}

function tempCelsToFar(valNum){
    return (1.8 * valNum) + 32;
}

function tempCelsToKelv(valNum){
    return parseFloat(valNum) + 273.15;
}

function tempKelvtoCels(valNum){
    return parseFloat(valNum) - 273.15;
}

function tempKelvtoFar(valNum){
    return 1.8 * (valNum - 273.15) + 32;
}

function highlightYellow(x){
    x.style.background="yellow";
}

function regular(x){
    x.style.background="white";
}
function tempChange() {
    const rightIn = document.getElementById("right-input").value;
    const leftIn = document.getElementById("left-input").value;
    const rightSelect = document.getElementById("right-select").value;
    const leftSelect = document.getElementById("left-select").value;

    console.log(rightIn)
    console.log(leftIn)
    if (rightIn == "e" || leftIn == "e" || rightIn == "E" || leftIn == "E"){
        document.getElementById('footer-').textContent = "Invalid Input!"
        return
    }
    if (!rightIn && !leftIn){
        document.getElementById('footer-').textContent = "Insert Number!"
        return
    }
    if (rightIn || leftIn){
        if (document.getElementById("right-input").classList.contains("click")){
            if (rightIn < 0 && rightSelect == "Kelvin"){
                document.getElementById('footer-').textContent = "There is No Negative Kelvin!"
                return
            }
        }
        else{
            if (leftIn < 0 && leftSelect == "Kelvin"){
                document.getElementById('footer-').textContent = "There is No Negative Kelvin!"
                return
            }
        }
    }

    if (rightSelect == leftSelect) {
        if (rightIn || leftIn) {
            if (document.getElementById("right-input").classList.contains("click")) {
                document.getElementById('left-input').value = rightIn
                document.getElementById('footer-').textContent = rightSelect + " to " + leftSelect + " Converted!"
            }
            else{
                document.getElementById('right-input').value = leftIn
                document.getElementById('footer-').textContent = rightSelect + " to " + leftSelect + " Converted!"
            }
        } else {
            document.getElementById('footer-').textContent = "Insert Number!"
        }
    }
    else {
        if (document.getElementById("right-input").classList.contains("click")) {
            if (rightSelect == "Fahrenheit") {
                if (leftSelect == "Celsius") {
                    const convertFtoC = tempFarToCels(rightIn)
                    document.getElementById('footer-').textContent = rightSelect + " to " + leftSelect + " Converted!"
                    document.getElementById('left-input').value = convertFtoC
                } else if (leftSelect == "Kelvin") {
                    const convertFtoK = tempFarToKelv(rightIn)
                    if (convertFtoK < 0) {
                        document.getElementById('footer-').textContent = "Less Than Zero Kelvin!"
                        return
                    } else {
                        document.getElementById('footer-').textContent = rightSelect + " to " + leftSelect + " Converted!"
                        document.getElementById('left-input').value = convertFtoK
                    }
                }
            } else if (rightSelect == "Celsius") {
                if (leftSelect == "Fahrenheit") {
                    const convertCtoF = tempCelsToFar(rightIn)
                    document.getElementById('footer-').textContent = rightSelect + " to " + leftSelect + " Converted!"
                    document.getElementById('left-input').value = convertCtoF
                } else if (leftSelect == "Kelvin") {
                    const convertCtoK = tempCelsToKelv(rightIn)
                    if (convertCtoK < 0) {
                        document.getElementById('footer-').textContent = "Less Than Zero Kelvin!"
                        return
                    } else {
                        document.getElementById('footer-').textContent = rightSelect + " to " + leftSelect + " Converted!"
                        document.getElementById('left-input').value = convertCtoK
                    }
                }
            } else if (rightSelect == "Kelvin") {
                if (leftSelect == "Fahrenheit") {
                    const convertKtoF = tempKelvtoFar(rightIn)
                    document.getElementById('footer-').textContent = rightSelect + " to " + leftSelect + " Converted!"
                    document.getElementById('left-input').value = convertKtoF
                } else if (leftSelect == "Celsius") {
                    const convertKtoC = tempKelvtoCels(rightIn)
                    document.getElementById('footer-').textContent = rightSelect + " to " + leftSelect + " Converted!"
                    document.getElementById('left-input').value = convertKtoC
                }
            }
        } else {
            console.log(leftSelect)
            console.log(rightSelect)
            console.log(leftIn)
            console.log(rightIn)
            if (leftSelect == "Fahrenheit") {
                if (rightSelect == "Celsius") {
                    const convertFtoC = tempFarToCels(leftIn)
                    document.getElementById('footer-').textContent = leftSelect + " to " + rightSelect + " Converted!"
                    document.getElementById('right-input').value = convertFtoC
                } else if (rightSelect == "Kelvin") {
                    const convertFtoK = tempFarToKelv(leftIn)
                    if (convertFtoK < 0) {
                        document.getElementById('footer-').textContent = "Less Than Zero Kelvin!"
                        return
                    } else {
                        document.getElementById('footer-').textContent = leftSelect + " to " + rightSelect + " Converted!"
                        document.getElementById('right-input').value = convertFtoK
                    }
                }
            } else if (leftSelect == "Celsius") {
                if (rightSelect == "Fahrenheit") {
                    const convertCtoF = tempCelsToFar(leftIn)
                    document.getElementById('footer-').textContent = leftSelect + " to " + rightSelect + " Converted!"
                    document.getElementById('right-input').value = convertCtoF
                } else if (rightSelect == "Kelvin") {
                    const convertCtoK = tempCelsToKelv(leftIn)
                    if (convertCtoK < 0) {
                        document.getElementById('footer-').textContent = "Less Than Zero Kelvin!"
                        return
                    } else {
                        document.getElementById('footer-').textContent = leftSelect + " to " + rightSelect + " Converted!"
                        document.getElementById('right-input').value = convertCtoK
                    }
                }
            } else if (leftSelect == "Kelvin") {
                if (rightSelect == "Fahrenheit") {
                    const convertKtoF = tempKelvtoFar(leftIn)
                    document.getElementById('footer-').textContent = leftSelect + " to " + rightSelect + " Converted!"
                    document.getElementById('right-input').value = convertKtoF
                } else if (rightSelect == "Celsius") {
                    const convertKtoC = tempKelvtoCels(leftIn)
                    document.getElementById('footer-').textContent = leftSelect + " to " + rightSelect + " Converted!"
                    document.getElementById('right-input').value = convertKtoC
                }
            }
        }
    }
}
