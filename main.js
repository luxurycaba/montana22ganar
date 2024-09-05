let fichasCargadas = document.getElementById("fichasCargadas");
let cbu = document.getElementById("cbu");
let referidos = document.getElementById("referidos");
let bienvenida = document.getElementById("modal-button2");
let registrar = document.getElementById("modal-button");
let retirar = document.getElementById("retirar");
let premioEnviado = document.getElementById("premioEnviado");
let sistemaDePagos = document.getElementById("sistemaDePagos");
let form = document.getElementById("form");
let form_button = document.getElementById("formButton");
let usuario = document.getElementById("usuario");
let modal = document.getElementById("myModal");
let btn = document.getElementById("pad-button-reg");
let span = document.getElementsByClassName("close")[0];
let usuario2 = document.getElementById("usuario2");
let modal2 = document.getElementById("myModal2");
let btn2 = document.getElementById("pad-button-reg2");
let span2 = document.getElementsByClassName("close2")[0];

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

No olvides agendarme como *"Cata Cajera"* para acceder a nuestras promos diarias 💝

Consultar cbu disponible siempre antes de enviar‼️ https://citygame.casino`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

registrar.addEventListener("click", function (e) {
  e.preventDefault();
  let user = document.getElementById("usuario").value;

  const texto = `👤*Usuario:* ${user}
🔒*Clave:* vip123

🎰*Página:* https://citygame.casino/🎰
`;
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


bienvenida.addEventListener("click", function (e) {
  e.preventDefault();
  let user = document.getElementById("usuario2").value;
  console.log(user);

  const texto = `*Bienvenido/a a Montana 22 Casino!♦️*

💰*Tu mejor sitio de entretenimiento con los mejores premios*💰

Podes encontrar CASINO EN VIVO, RULETAS, BLACKJACK, APUESTAS DEPORTIVAS Y +1000 SLOTS!

Atención personalizada 24hs⏰
*BONIFICACION DEL 100% EN TU PRIMER CARGA*🤩

👤*Usuario*: ${user}
🔒*Clave*: vip123

🎰*Página*: https://citygame.casino/🎰

💵*Mínimo de carga*: $1.500
💵 *Mínimo de retiros*: $4.000
Horario de retiros de 12hs a 00hs🕧
Un retiro diario cada 24hs💸

⛔️ *Consúltanos siempre CBU/ALIAS disponible para realizar tu primer carga y comenzar a GANAR*⛔`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);

  document.getElementById("usuario2").value = "";

  modal2.style.display = "none";
});

referidos.addEventListener("click", () => {
  const texto = `Te comento que *recomendándonos* con *2* amigos/as obtienes *100% de bonificacion* en tu proxima recarga‼️ 🫂 Si vienen de tu parte te *DUPLICAMOS* tu carga!🥰`;
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
*Nombre del titular*:
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

premioEnviado.addEventListener("click", () => {
  const texto = `✨💸*¡FELICIDADES!*💸✨

Gracias por elegirnos‼️🥰

Recorda que *recomendándonos* con *2* Amigos/as te *duplicamos* tu próxima carga!!🎰💸🍀`;
  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = texto;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  elementoTemporal.setSelectionRange(0, 9999);
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);
});

sistemaDePagos.addEventListener("click", () => {
  const texto = `💰*SISTEMA DE PAGOS*💰

*Horarios*: 12hs a 00hs 🕧
Un retiro diario cada 24hs!

💵*Mínimo de retiro*: $4.000
💵*Máximo de retiro*: $50.000`;
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

btn2.onclick = function () {
  modal2.style.display = "block";
  usuario2.focus();
};

span2.onclick = function () {
  modal2.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal || event.target == modal2) {
    event.target.style.display = "none";
  }
};
