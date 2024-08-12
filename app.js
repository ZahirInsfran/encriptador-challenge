
document.getElementById("resultado").style.visibility = "hidden";
document.getElementById("cuadro__boton__copy").style.visibility ="hidden";
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
    document.getElementById("cuadro__boton__copy").style.visibility="visible";
    let parrafo = document.getElementById("resultado");
    return parrafo.innerHTML=encriptado;
}

function desencriptar(){
    document.getElementById("cuadro__sinInfo").style.visibility = "hidden";
    let textoEncriptado = document.getElementById("textoDelUsuario").value;
    let textoDesencriptado = textoEncriptado
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById("resultado").style.visibility="visible";
    document.getElementById("cuadro__boton__copy").style.visibility="visible";
    let parrafo = document.getElementById("resultado");
    return parrafo.innerHTML=textoDesencriptado;
}

function copiarTexto(){
    let texto = document.getElementById("resultado");
    let boton = document.getElementById("boton_copiar");
    navigator.clipboard.writeText(texto.textContent)
    boton.textContent="copiado"
}