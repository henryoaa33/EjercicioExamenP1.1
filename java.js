document.addEventListener("DOMContentLoaded", function () {
 
    document.getElementById("calcularBtn").addEventListener("click", calcularDescuento);
    document.getElementById("limpiarBtn").addEventListener("click", limpiarFormulario);
});

function calcularDescuento() {
 
    const productos = [];
    for (let i = 1; i <= 5; i++) {
        const valorProducto = parseFloat(document.getElementById(`producto${i}`).value);
        if (isNaN(valorProducto)) {
            mostrarAlerta("Los valores de los productos deben ser números.");
            return;
        }
        productos.push(valorProducto);
    }

 
    const subtotal = productos.reduce((total, valor) => total + valor, 0);


    let descuentoPorcentaje = 0;
    if (subtotal >= 1000 && subtotal < 5000) {
        descuentoPorcentaje = 10;
    } else if (subtotal >= 5000 && subtotal < 9000) {
        descuentoPorcentaje = 20;
    } else if (subtotal >= 9000 && subtotal < 13000) {
        descuentoPorcentaje = 30;
    } else if (subtotal >= 13000) {
        descuentoPorcentaje = 40;
    }

    const descuento = (subtotal * descuentoPorcentaje) / 100;
    const totalPagar = subtotal - descuento;


    document.getElementById("subtotal").value = subtotal.toFixed(2);
    document.getElementById("descuentoLabel").value = `Descuento ${descuentoPorcentaje}%`;
    document.getElementById("totalPagar").value = totalPagar.toFixed(2);
}

function limpiarFormulario() {

    for (let i = 1; i <= 5; i++) {
        document.getElementById(`producto${i}`).value = "";
    }
    document.getElementById("subtotal").value = "";
    document.getElementById("descuentoLabel").value = "Descuento 0%";
    document.getElementById("totalPagar").value = "";
}

function mostrarAlerta(mensaje) {
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: mensaje,
    });
}
