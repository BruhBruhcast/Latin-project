var seclvl = 0
var progressA = 0 
var progressE = 0
var unredloc = false

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
                    var s = document.getElementById("lvl2unl");
                    s.style.display = "block"
                    var s = document.getElementById("lvl1unl");
                    s.style.display = "none"
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
                    if (confirm("Continue?")) {
                        var s = document.getElementById("lvl2")
                        s.style.display = "block"
                        var s = document.getElementById("traceE")
                        s.style.display = "block"
                        var s = document.getElementById("progE")
                        s.style.display = "block"
                        var s = document.getElementById("locE")
                        s.style.display = "block"
                        var s = document.getElementById("traceA")
                        s.style.display = "block"
                        var s = document.getElementById("progA")
                        s.style.display = "block"
                        var s = document.getElementById("locA")
                        s.style.display = "block"
                        var s = document.getElementById("lvl3unl")
                        s.style.display = "block"
                        var s = document.getElementById("lvl2unl")
                        s.style.display = "none"
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
        else {
            alert("Security clearance failed")
        }
    }
    if (seclvl === 2) {
        if (prompt("Decrypt: zpvsnpnibtophzbuu") === "your mom has no gyatt") {
            if (prompt("Decrypt Eutychus' secret code") === "mhogywdhch") {
                if (confirm("Continue?")) {
                    unredloc = true
                    document.getElementById("lvl3").style.display = "block"
                    document.getElementById("tbltitle").style.display = "block"
                    document.getElementById("hqtbl").style.display = "block"
                    document.getElementById("lvl4unl").style.display = "block"
                    document.getElementById("lvl3unl").style.display = "none"
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
            if (progressE >= 1) {
                if (unredloc === false) {
                    x = "Location: [REDACTED: Requires Level 3 clearance]"
                }
                else {
                    x = "Location: Centre 2"
                }
                document.getElementById("locA").innerHTML = x
            }
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
            if (unredloc === false) {
                x = "Location: [REDACTED: Requires Level 3 clearance]"
            }
            else {
                x = "Location: Centre 4"
            }
            document.getElementById("locE").innerHTML = x
        }
    }, 50)
}





