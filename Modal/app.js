function Off() {
    document.getElementById("Accept").style.display="block";
    document.getElementById("Modal-Body").style.display="none";
    document.getElementById("Decline").style.display="none";
}

function On() {
    document.getElementById("Decline").style.display="block";
    document.getElementById("Modal-Body").style.display="block";
    document.getElementById("Accept").style.display="none";

}