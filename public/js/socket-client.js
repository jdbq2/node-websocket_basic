const socket = io();
const online = document.getElementById("online");
const offline = document.getElementById("offline");
const txtMensaje = document.getElementById("txtMensaje");
const btnEnviar = document.getElementById("btnEnviar");

socket.on("connect", () => {
    offline.style.display = "none";
    online.style.display = "";
});
socket.on("disconnect", () => {
    online.style.display = "none";
    offline.style.display = "";
});
socket.on("enviar-mensaje", (payload) => {
    console.log(payload);
});

btnEnviar.addEventListener("click", () => {
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: "123ABC",
        fecha: new Date().getTime(),
    };

    socket.emit("enviar-mensaje", payload, (id) => {
        console.log("Desde el server", id);
    });
});
