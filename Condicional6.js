const shot1 = 2
const shot2 = 2
const shot3 = 4
if (shot1 === shot2) {
    alert ("Ganaste")
} else {
    if (shot2 === shot3){
        alert ("Ganaste")
    } else {
        if (shot3 === shot1) {
            alert ("Ganaste")
        } else {
            alert ("perdiste")
        }
    }
}