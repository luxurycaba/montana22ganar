document.addEventListener("DOMContentLoaded", function () {
  // Obtener los elementos
  const hamburguesaToggle = document.getElementById("modal-hamburguesa-toggle");
  const titular = document.getElementById("btn-titular");
  const cbu = document.getElementById("btn-cbu");
  const apodo = document.getElementById("btn-apodo");
  const btnBienvenida = document.getElementById("btn-bienvenida");
  const btnRegistrarUsuario = document.getElementById("btn-registrarUsuario");
  const bienvenidaPubli = document.getElementById("btn-bienvenidaPubli");
  const acreditadas = document.getElementById("btn-acreditadas");
  const sistemaDeReferidos = document.getElementById("btn-sistemaDeReferidos");
  const derivar = document.getElementById("btn-derivar");
  const bono = document.getElementById("btn-bono");
  const captura = document.getElementById("btn-captura");
  const textoDeReferidos = document.getElementById("btn-textoDeReferidos");
  const retiro = document.getElementById("btn-retiro");
  const avisame = document.getElementById("btn-avisame");
  const saldoCobrable = document.getElementById("btn-saldoCobrable");
  const premioEnviado = document.getElementById("btn-premioEnviado");
  const cookies = document.getElementById("btn-cookies");
  const canal = document.getElementById("btn-canal");
  const noIngreso = document.getElementById("btn-noIngreso");
  const soporte = document.getElementById("btn-soporte");
  const sistemaDePagos = document.getElementById("btn-sistemaDePagos");
  const overlay = document.getElementById("overlay");
  const overlayBienvenida = document.getElementById("overlay-bienvenida");
  const overlayRegistrar = document.getElementById("overlay-registrar");
  const form = document.querySelector("form"); // Seleccionamos el primer formulario
  const formBienvenida = document.querySelectorAll("form")[1]; // Seleccionamos el segundo formulario
  const formRegistrar = document.querySelectorAll("form")[2]; // Seleccionamos el tercer formulario

  let inputTitular, inputCBU;
  let firstVisit = true;

  // Funcion para copiar texto al portapapeles
  function copyToClipboard(text) {
    const elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = text;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);
  }

  titular.addEventListener("click", () => {
    const texto = `A nombre de: *${inputTitular}*❣️`; 
    copyToClipboard(texto);
  });

  cbu.addEventListener("click", () => {
    const texto = `${inputCBU}`;
    copyToClipboard(texto);
  });

  apodo.addEventListener("click", () => {
    const texto = `Indicame tu *NOMBRE/APODO* para asignarte un usuario!😊`;
    copyToClipboard(texto);
  });

  bienvenidaPubli.addEventListener("click", () => {
    const texto = `Bienvenida/o a *MONTANA!*♦️

*FICHAS CARGADAS!!!*🍀
muchos exitos 🫂

Ya podes ingresar a nuestro Link: http://kingcash7.net 🎰

*Regalamos bonificaciones todos los dias en todas sus cargas!*💝✨
`;
    copyToClipboard(texto);
  });

  acreditadas.addEventListener("click", () => {
    const texto = `*Fichas cargadas!!!*🍀♦️muchos éxitos🫂 

*Recomendános* con *2* que jueguen con nosotros y te *regalamos $6.000 fichas GRATIS*!💝

Consultar cbu activo siempre antes de enviar‼️
https://kingcash7.net/`;
    copyToClipboard(texto);
  });

  sistemaDeReferidos.addEventListener("click", () => {
    const texto = `🫂*SISTEMA DE REFERIDOS*🫂

*Recomendándonos* con *2* Amigos/as que jueguen con nosotros te *regalamos $6.000 fichas GRATIS*!!💝🍀

*¿Como recomendarnos a tus conocidos/as?*

Reenvíale el siguiente texto que te vamos a enviar debajo, tiene el link que lo va a derivar a nuestro WhatsApp.😉`;
    copyToClipboard(texto);
  });

  derivar.addEventListener("click", () => {
    const texto = `Excelente!! Una pasito más 🙏🏼

*Te dejo nuestro número principal, envíanos comprobante de pago + tu nombre de usuario para que te acreditemos las fichas.*✨

1155934949`;
    copyToClipboard(texto);
  });

  bono.addEventListener("click", () => {
    const texto = `‼ *LEER CON ATENCION* ‼

💝*SISTEMA DE BONIFICACIÓN:*

♦️ La bonificación *NO* es retirable, de igual manera te genera mas posibilidades de ganar fichas retirables.

♦️ En las salas en vivo la bonificación *NO* esta disponible!

♦️ Hay ciertos SLOTS que *NO* permiten la bonificación. Los que no permiten te avisan con un cartel, algunos no avisan pero te vas a dar cuenta porque no te figura el saldo TOTAL.`;
    copyToClipboard(texto);
  });

  captura.addEventListener("click", () => {
    const texto = `Mi nombre es Cata👩🏼‍💻
*Para obtener el 100% de bonus enviame captura con este numero agendado como “Cata Cajera”!*✨😊`;
    copyToClipboard(texto);
  });

  textoDeReferidos.addEventListener("click", () => {
    const texto = `Te *REGALAMOS* un *100% de bonificación* en tu primera carga!💝

wa.link/referidoscata`;
    copyToClipboard(texto);
  });

  retiro.addEventListener("click", () => {
    const texto = `*Te pido que me envies...*‼️

*Usuario*:
*CBU/Alias*: 
*Nombre del titular*:
*Monto*:

🚨Recordatorio: 

*LA BONIFICACIÓN NO ES RETIRABLE*❌

Una vez que le retiramos sus fichas el mismo sistema de la pagina tambien baja la bonificacion.`;
    copyToClipboard(texto);
  });

  avisame.addEventListener("click", () => {
    const texto = `Te dejo cbu activo, recorda que tenes *100% de bonificacion* en tu primera carga‼️🔥`;
    copyToClipboard(texto);
  });

  saldoCobrable.addEventListener("click", () => {
    const texto = `*¿Como ver su saldo cobrable?*💰🤔

En la pagina puede verificarlo, selecciona su usuario arriba a la derecha👤 y le van a figurar dos saldos, "balance" que es el total junto con la bonificacion y "saldo cobrable" es el saldo que puede retirar.
`;
    copyToClipboard(texto);
  });

  premioEnviado.addEventListener("click", () => {
    const texto = `✨🥳*¡FELICIDADES!*🥳✨

Gracias por elegirnos‼️🥰

*Recomendándonos* con *2* Amigos/as que jueguen con nosotros te *regalamos $6.000 fichas GRATIS*!!💝🍀`;
    copyToClipboard(texto);
  });

  cookies.addEventListener("click", () => {
    const texto = `Eso pasa cuando su navegador tiene demasiadas cookies acumuladas, debe borrar los datos de navegacion o directamente puede probar desde otro navegador!😉`;
    copyToClipboard(texto);
  });

  canal.addEventListener("click", () => {
    const texto = `Seguinos en el canal  
“🎰*PROMOS Y REGALOS*🎰” 
en WhatsApp:
https://whatsapp.com/channel/0029VazKcbS3wtb2ZdZHCX1s`;
    copyToClipboard(texto);
  });

  noIngreso.addEventListener("click", () => {
    const texto = `*Su transferencia no ingreso por el momento*‼️

Ni bien nos ingrese el dinero las fichas van a ser acreditadas, sea paciente porfavor.🙏🏽`;
    copyToClipboard(texto);
  });

  soporte.addEventListener("click", () => {
    const texto = `Por inconvenientes con la pagina le solicitamos que *se comuníque con el soporte*.👨🏼‍💻

Debajo de este mensaje le vamos a estar dejando su contacto que tambien puede encontrarlo en la pagina.😊`;
    copyToClipboard(texto);
  });

  sistemaDePagos.addEventListener("click", () => {
    const texto = `💰*SISTEMA DE PAGOS*💰

*Horarios*: 12hs a 00hs 🕛
Un retiro diario cada 24hs!

💵*Mínimo de retiro*: $3.000

💵*Cargas -$30.000 Máximo de retiro*: $50.000

💵*Cargas +$30.000 Máximo de retiro*: $100.000
`;
    copyToClipboard(texto);
  });

  // Función para abrir y cerrar el overlay del menú hamburguesa
  hamburguesaToggle.addEventListener("click", function () {
    if (overlay.style.display === "flex") {
      overlay.style.display = "none"; // Cerrar overlay
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    } else {
      overlay.style.display = "flex"; // Abrir overlay
      document.body.style.overflow = "hidden"; // Deshabilitar el scroll del body
    }
  });

  // Función para abrir y cerrar el overlay del menú bienvenida
  btnBienvenida.addEventListener("click", function () {
    if (overlayBienvenida.style.display === "flex") {
      overlayBienvenida.style.display = "none"; // Cerrar overlay del menú central
    } else {
      overlayBienvenida.style.display = "flex"; // Abrir overlay del menú central
      document.body.style.overflow = "hidden"; // Deshabilitar el scroll del body
    }
    document.getElementById("usuarioBienvenida").focus();
  });

  // Función para abrir y cerrar el overlay del menú registrar usuario
  btnRegistrarUsuario.addEventListener("click", function () {
    if (overlayRegistrar.style.display === "flex") {
      overlayRegistrar.style.display = "none"; // Cerrar overlay del menú central
    } else {
      overlayRegistrar.style.display = "flex"; // Abrir overlay del menú central
      document.body.style.overflow = "hidden"; // Deshabilitar el scroll del body
    }
    document.getElementById("usuarioRegistrar").focus();
  });

  // Cerrar el overlay si se hace clic fuera del formulario del primer menú
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay && !firstVisit) {
      overlay.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      form.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });

  // Cerrar el overlay si se hace clic fuera del formulario del segundo menú
  overlayBienvenida.addEventListener("click", function (e) {
    if (e.target === overlayBienvenida) {
      overlayBienvenida.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      form.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });

  // Cerrar el overlay si se hace clic fuera del formulario del tercer menú
  overlayRegistrar.addEventListener("click", function (e) {
    if (e.target === overlayRegistrar) {
      overlayRegistrar.style.display = "none"; // Cerrar overlay si se hace clic fuera del formulario
      form.reset(); // Limpiar los campos del formulario
      document.body.style.overflow = "auto"; // Permitir desplazamiento del body
    }
  });

  // Prevenir el envío del formulario y cerrar el overlay
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    overlay.style.display = "none"; // Cerrar el overlay del primer menú
    inputTitular = document.getElementById("titular").value.trim();
    inputCBU = document.getElementById("cbu").value.trim();
    form.reset(); // Limpiar los campos del formulario
    firstVisit = false;
    document.body.style.overflow = "auto"; // Permitir desplazamiento del body
  });

  // Prevenir el envío del formulario y cerrar el overlay del segundo menú
  formBienvenida.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    overlayBienvenida.style.display = "none"; // Cerrar el overlay del segundo menú
    const user = document.getElementById("usuarioBienvenida").value.trim();
    const texto = `*Bienvenido/a a Montana 22 Casino!*♦️

💰*Tu mejor sitio de entretenimiento con los mejores premios*💰

Podes encontrar CASINO EN VIVO, RULETAS, BLACKJACK, APUESTAS DEPORTIVAS Y +3000 SLOTS!

💵*MÍNIMO DE CARGA: $1.000*

*BONIFICACION DEL 100% EN TU PRIMER CARGA*💝

👤*Usuario*: ${user}
🔒*Clave*: vip123

🎰*Página*: https://kingcash7.net/ 🎰

⛔️ *Consúltanos siempre CBU/ALIAS disponible para realizar tu carga y comenzar a GANAR*⛔`;
    copyToClipboard(texto);
    formBienvenida.reset(); // Limpiar los campos del formulario
    document.body.style.overflow = "auto"; // Permitir desplazamiento del body
  });

  // Prevenir el envío del formulario y cerrar el overlay del tercer menú
  formRegistrar.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    overlayRegistrar.style.display = "none"; // Cerrar el overlay del tercer menú
    const user = document.getElementById("usuarioRegistrar").value.trim();
    const texto = `👤*Usuario:* ${user}
🔒*Clave:* vip123

🎰*Página:* https://kingcash7.net/🎰
`;
    copyToClipboard(texto);
    formRegistrar.reset(); // Limpiar los campos del formulario
    document.body.style.overflow = "auto"; // Permitir desplazamiento del body
  });
});
