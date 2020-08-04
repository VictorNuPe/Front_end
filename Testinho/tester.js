var output = document.querySelector("#output");
var mensagem = "";

function show() {
  var n = prompt("Digite um número: ");
  n = parseInt(n);
  var i = 1;

  while (i <= 1000) {
    mensagem += n + " x " + i + " = " + n * i + "<br>";
    i++;
  }

  output.innerHTML = mensagem;
}

function clean() {
  mensagem = "";
  output.innerHTML = mensagem;
}
