
function factorial(){
    var numero = prompt("Introduce un n\u00famero y se mostrar\u00e1 su factorial");
    var resultado =1;
    

    for(var i=1; i<=numero; i++) {
      resultado *= i;
    }
    var texto = document.getElementById("resultado");

    texto.innerHTML="El factorial de "+numero+" es: <p>"+resultado+"</p>";
}
