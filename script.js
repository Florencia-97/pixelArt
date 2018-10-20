
window.onload=function(){

  var header = document.getElementById("firma");

  header.addEventListener("mouseover", function( event ){
    html = "";
    if (header.innerHTML.includes("Flor")){
      html = `<img class="dibujo" src="img/header.png" alt="Bienvenido">`;
    }
    else {
      html = `<img class="dibujo" src="img/headerFlor.png" alt="Bienvenido">`;
    }
    header.innerHTML = html;
  }, true);
}
