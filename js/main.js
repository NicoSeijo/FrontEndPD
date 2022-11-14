function darkMode(){
    document/*Al html*/.body.style.backgroundColor = "rgb(18, 18, 18)";
    document.body.style.color = "white";

    document.getElementById("botonMO").innerHTML = "Modo Claro";
    document.getElementById("botonMO").setAttribute("class", "btn btn-light btn-lg")
    document.getElementById("botonMO").setAttribute("onclick", "lightMode()")

}

function lightMode(){
    document/*Al html*/.body.style.backgroundColor = "rgb(237, 237, 237)";
    document.body.style.color = "black";

    document.getElementById("botonMO").innerHTML = "Modo Oscuro";
    document.getElementById("botonMO").setAttribute("class", "btn btn-dark btn-lg")
    document.getElementById("botonMO").setAttribute("onclick", "darkMode()")
}

function datosCreador(){
    alert("NOMBRE: Nicolás Seijo\nDNI: 43.866.774\nFECHA NACIMIENTO: 26/01/2002\nTELÉFONO: +54 911 3333 8673\nE-MAIL: niicoseijo@gmail.com")
}