
    document.getElementById("add-btn").onclick = function () {
        document.getElementById("result").innerHTML =
        +document.getElementById("first-number").value + 
        +document.getElementById("second-number").value;  
    }
    document.getElementById("minus-btn").onclick = function () {
        document.getElementById("result").innerHTML = 
        document.getElementById("first-number").value - 
        document.getElementById("second-number").value;  
    }
    document.getElementById("times-btn").onclick = function () {
        document.getElementById("result").innerHTML = 
        +document.getElementById("first-number").value * 
        +document.getElementById("second-number").value;  
    }
    document.getElementById("divide-btn").onclick = function () {
        document.getElementById("result").innerHTML = 
        +document.getElementById("first-number").value / 
        +document.getElementById("second-number").value;  
    }