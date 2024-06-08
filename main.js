let fichasCargadas = document.getElementById("fichasCargadas");
let cbu = document.getElementById("cbu");
let referidos = document.getElementById("referidos")
let nombreApodo = document.getElementById("retirar");
let bienvenida = document.getElementById("modal-button");
let sistemaDePagos = document.getElementById("sistemaDePagos");
let form = document.getElementById("form");
let form_button = document.getElementById("formButton");
let usuario = document.getElementById("usuario");
let modal = document.getElementById("myModal");
let btn = document.getElementById("pad-button-reg");
let span = document.getElementsByClassName("close")[0];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  globalThis.inputNombre = document.getElementById("name").value;
  globalThis.inputCBU = document.getElementById("number").value;
  globalThis.inputAlias = document.getElementById("alias").value;

  if (inputNombre.length != 0 && inputCBU != 0 && inputAlias.length != 0) {
    cbu.addEventListener("click", () => {
      const texto = `${inputCBU}`;
      const elementoTemporal = document.createElement("textarea");
      elementoTemporal.value = texto;
      document.body.appendChild(elementoTemporal);
      elementoTemporal.select();
      elementoTemporal.setSelectionRange(0, 9999);
      document.execCommand("copy");
      document.body.removeChild(elementoTemporal);
    });

    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("alias").value = "";
  } else {
    alert("Por favor, completa todos los datos!!");
  }
});

fichasCargadas.addEventListener("click", () => {
  const texto = `*Fichas cargadas!!!*🍀♦️muchos éxitos🫂 

No olvides agendarme para acceder a nuestras promos diarias 💝

Consultar cbu disponible siempre antes de enviar‼️ https://citygame.casino`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

referidos.addEventListener("click", () => {
  const texto = `Obtené *100% de bonificación* en tu próxima carga recomendandonos con amigos/as‼️🫂 si vienen de tu parte te *DUPLICAMOS* tu próxima carga🥰`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

retirar.addEventListener("click", () => {
  const texto = `*Te pido los siguientes datos* ‼️

*CBU/Alias*: 
*Usuario*:
*Monto*:`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

bienvenida.addEventListener("click", function (e) {
  e.preventDefault();
  let user = document.getElementById("usuario").value;

  const texto = `*Bienvenido/a a Montana 22 Casino!♦️*

💰*Tu mejor sitio de entretenimiento con los mejores premios*💰

Podes encontrar CASINO EN VIVO, RULETAS, BLACKJACK, APUESTAS DEPORTIVAS Y +1000 SLOTS!

Atención personalizada las 24hs⏰ 
*BONIFICACION DEL 100% EN TU PRIMER CARGA*🤩

*Usuario*: ${user}
*Clave*: vip123
*Página*: https://citygame.casino/

Mínimo de cargas: $1.500
Mínimo de retiros: $3.000
Horario de retiros de 12hs a 00hs🕣
Un retiro diario cada 24hs💸

⛔️ *Consúltanos siempre CBU/ALIAS disponible para realizar tu primer carga y comenzar a GANAR* ⛔️`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);

  document.getElementById("usuario").value = "";

  modal.style.display = "none";
});

referidos.addEventListener("click", () => {
  const texto = `Obtené *100% de bonificación* en tu próxima carga recomendandonos con amigos/as‼️🫂 si vienen de tu parte te *DUPLICAMOS* tu próxima carga🥰`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

sistemaDePagos.addEventListener("click", () => {
  const texto = `*SISTEMA DE PAGOS*💰

*Horarios*: 12hs a 00hs 🕣
Un retiro diario cada 24hs!

*Mínimo de retiro*: $3.000
*Máximo de retiro*: $50.000
(Dependiendo tu carga)`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});



btn.onclick = function () {
  modal.style.display = "block";
  usuario.focus();
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
