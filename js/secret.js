var seclvl = 0
var progressA = 0 
var progressE = 0

function accessSecrets() {
    if (seclvl === 0) {
        if (prompt("Enter full name of Salvius") === salvius.fullName) {
            if (prompt("Enter name of stage 16") === "in aula") {
                if (confirm("Continue?")) {
                    var s = document.getElementById("lvl1");
                    s.style.display = "block"
                    var s = document.getElementById("grumiotbl");
                    s.style.display = "block"
                    var s = document.getElementById("grumiotbl2");
                    s.style.display = "block"
                    seclvl = 1
                }
                else {
                    alert("Security clearance failed")
                }
            }
            else {
                alert("Security clearance failed")
            }
        }
        else {
            alert("Security clearance failed")
        }
    }
    if (seclvl === 1) {
        if (confirm("Is Grumio the goat?")) {
            if (prompt("How much rizz does Grumio have") >= 3888) {
                if (prompt("Grumio's gyatt level") >= 40) {
                    var s = document.getElementById("lvl2");
                    s.style.display = "block"
                    seclvl = 2
                    alert()
                }
                else {
                    alert("Security clearance failed")
                }
            }
            else {
                alert("Security clearance failed")
            }
        }
        else {
            alert("Security clearance failed")
        }
    }
}

function traceLocationA() {   
    var gainLoop = window.setInterval(function() {
        if (progressA < 0.995) {
            progressA += 0.005
        }
        document.getElementById("progA").innerHTML = "Progress: " + Math.round(progressA * 100) + "%"
        if (progressA > 0.99) {
            progressA = 1
        }
        if (progressA >= 1) {
            x = "Location: Thebes, Aegyptus"
            document.getElementById("locA").innerHTML = x
        }
    }, 50)
}

function traceLocationE() {   
    var gainLoop = window.setInterval(function() {
        if (progressE < 0.995) {
            progressE += 0.005
        }
        document.getElementById("progE").innerHTML = "Progress: " + Math.round(progressE * 100) + "%"
        if (progressE > 0.99) {
            progressE = 1
        }
        if (progressE >= 1) {
            x = "Location: [REDACTED: Requires Level 3 clearance]"
            document.getElementById("locE").innerHTML = x
        }
    }, 50)
}





