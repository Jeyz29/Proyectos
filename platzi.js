var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};



var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverCerdo);

var fondo = {
  url: "tile.png",
  cargaOK: false
};
var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

var cantidad = aleatorio(1, 10);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);


function cargarFondo(){
  fondo.cargaOK = true;
  dibujar(200,200);
};
function cargarVacas(){
  vaca.cargaOK = true;
  dibujar(200,200);
};
function cargarCerdo(){
  cerdo.cargaOK = true;
  dibujar(200,200)
}

function dibujar(posx,posy){
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if(cerdo.cargaOK)
  {
    console.log("cargarCerdo")
    papel.drawImage(cerdo.imagen, posx, posy);

  }
}

  var movimiento = 10;
  var x = 200;
  var y = 200;

function moverCerdo(evento){
  switch (evento.keyCode){
    case teclas.UP:
    moverCerdo(cerdo - movimiento, papel);
    y = y - movimiento;
     console.log("arriba");
     dibujar(x,y);
     break;
    case teclas.DOWN:
    moverCerdo(cerdo.imagen + movimiento, papel);
    y = y + movimiento;
     console.log("abajo");
     dibujar(x,y);
     break;
    case teclas.LEFT:
    moverCerdo(cerdo.imagen - movimiento, y, papel);
    x = x - movimiento;
     console.log("izquierda");
     dibujar(x,y);
     break;
    case teclas.RIGHT:
    moverCerdo(cerdo.imagen + movimiento, y, papel);
    x = x + movimiento;
      console.log("derecha");
      dibujar(x,y);
    break;
  }
}


function aleatorio(min, maxi){
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
};
