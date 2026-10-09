// Cambia este número por el WhatsApp real del negocio (formato: 52 + 10 dígitos)
var WHATSAPP = "528710000000";
var url = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent("Hola, quiero cotizar como negocio");
document.querySelectorAll(".js-wa").forEach(function (a) { a.href = url; });
document.getElementById("year").textContent = new Date().getFullYear();
