
function valida(campo){
    var bRet = false;
    if (campo.value == "")
        alert("Faltan datos");
    else 	if (!campo.value.match(/^[A-Z]{3,4}\d{6}[A-Z0-9]{3}$/))
                document.getElementById("resultado").innerHTML ="Esto NO es un RFC";
            else
                document.getElementById("resultado").innerHTML ="Validación aceptada Sí es un RFC";
    
}