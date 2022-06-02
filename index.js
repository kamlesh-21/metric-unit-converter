
function check(){
    let LetsgetInput = document.getElementById("getInput").value
    document.getElementById("length1").innerText = LetsgetInput + " feet=" + (LetsgetInput/3.28).toFixed(2)
    document.getElementById("length2").innerText = LetsgetInput + " feet=" + (LetsgetInput*3.28).toFixed(2)
    document.getElementById("volume1").innerText = LetsgetInput + " liters=" + (LetsgetInput/3.785).toFixed(2)
    document.getElementById("volume2").innerText = LetsgetInput + " gallons=" + (LetsgetInput*3.785).toFixed(2)
    document.getElementById("mass1").innerText = LetsgetInput + " kilos=" + (LetsgetInput*2.205).toFixed(2)
    document.getElementById("mass2").innerText = LetsgetInput + " pounds=" + (LetsgetInput/2.205).toFixed(2)
}

