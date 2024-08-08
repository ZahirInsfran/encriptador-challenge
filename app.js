
document.getElementById("resultado").style.visibility = "hidden";

function encriptar() {
    document.getElementById("cuadro__sinInfo").style.visibility = "hidden";
    let encriptado = "";
    let texto = document.getElementById("textoDelUsuario").value;
    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        switch (letra) {
            case 'a':
                encriptado += "ai";
                break;
            case 'e':
                encriptado += "enter";
                break;
            case 'i':
                encriptado += "imes";
                break;
            case 'o':
                encriptado += "ober";
                break;
            case 'u':
                encriptado += "ufat";
                break;
            default:
                encriptado += letra;
                break;
        }
    }
    document.getElementById("resultado").style.visibility="visible";
    let parrafo = document.getElementById("resultado");
    return parrafo.innerHTML=encriptado;
}


