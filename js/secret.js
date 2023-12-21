var seclvl = 0
function accessSecrets() {
    if (seclvl === 0) {
        if (prompt("Enter full name of Salvius").toLowerCase() === salvius.fullName.toLowerCase()) {
            if (prompt("Enter name of stage 16") === "in aula") {
                if (confirm("Continue?")) {
                    var s
                        = document.getElementById("lvl1");
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
                if (prompt("Grumio's gyatt level") === “40“) {
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
