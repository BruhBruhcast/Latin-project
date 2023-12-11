var seclvl = 0
var progressA = 0 
var progressE = 0
var unredloc = false

function accessSecrets() {
    if (seclvl === 0) {
        if (prompt("Enter full name of Salvius").toLowerCase() === salvius.fullName.toLowerCase()) {
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
                if (prompt("Grumio's gyatt level") === 40) {
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
        if (prompt("Decrypt: zpvsnpnibtophzbuu").toLowerCase() === "your mom has no gyatt") {
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
    if (seclvl === 3) {
        if (prompt("Utter the great words of Latin (Hint: Garden)").toLowerCase() === "caecilius est in horto") {
            if (prompt("Utter the other great words of Latin (Hint: Placeholder)").toLowerCase() === "lorem ipsum") {
                if (prompt("Utter the name of the Roman goddess of magic").toLowerCase() === "hecate") {
                    if (confirm("Continue?")) {
                        document.getElementById("lvl4").style.display = "block"
                        document.getElementById("htbantitl").style.display = "block"
                        document.getElementById("howtobuildanuke").style.display = "block"
                        document.getElementById("lvl5unl").style.display = "block"
                        document.getElementById("lvl4unl").style.display = "none"
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
    if (seclvl === 4) {
        if (prompt("Does the black moon howl?").toLowerCase() === "no") {
            if (prompt("Does the black moon howl?").toLowerCase() === "not without blood") {
                if (prompt("Does the black moon howl?").toLowerCase() === "only at the blind") {
                    if (prompt("Does the black moon howl?").toLowerCase() === "not while the stars shine") {
                        if (prompt("Does the black moon howl?").toLowerCase() === "only when waning") {
                            if (prompt("Does the black moon howl?").toLowerCase() === "yes") {
                                document.getElementById("lvl5").style.display = "block"
                                document.getElementById("scplink").style.display = "block"
                                document.getElementById("qiuproposal").style.display = "block"
                                document.getElementById("qiudata").style.display = "block"
                                document.getElementById("qiuiter").style.display = "block"
                                document.getElementById("lvl5unl").style.display = "none"
                            }   
                            else {
                                alert("Security clearance failed THEY'RE AFTER YOU NOW")
                            }
                        }
                        else {
                            alert("Security clearance failed THEY'RE AFTER YOU NOW")
                        }
                    }
                    else {
                        alert("Security clearance failed THEY'RE AFTER YOU NOW")
                    }
                }
                else {
                    alert("Security clearance failed THEY'RE AFTER YOU NOW")
                }
            }
            else {
                alert("Security clearance failed THEY'RE AFTER YOU NOW")
            }
        }
        else {
            alert("Security clearance failed THEY'RE AFTER YOU NOW")
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





