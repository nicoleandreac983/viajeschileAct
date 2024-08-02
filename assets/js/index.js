//js de bootstrap
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

// Alerta
let alertContainer = document.getElementById("alertContainer");

const alert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertContainer.append(wrapper);
};

const alertTrigger = document.getElementById("alertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    alert("Mensaje enviado con éxito !!!", "success");
  });
}
// para que funcionen los Tooltips

    document.addEventListener('DOMContentLoaded', function () {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    });