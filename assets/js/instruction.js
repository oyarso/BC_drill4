class Gasto {
    constructor(nombreGasto, cantidadGasto) {
        this.nombreGasto = nombreGasto;
        this.cantidadGasto = cantidadGasto;
    }
}

//DOM
let cantidadPresupuesto = document.getElementById('cantidadPresupuesto');
let viewPresupuesto = document.getElementById('presupuesto');
let viewSumaGasto = document.getElementById('sumarGasto');
let viewBalance = document.getElementById('balance');
let viewListaGasto = document.getElementById('viewListaGasto');

let nombreGasto = document.getElementById('nombreGasto');
let cantidadGasto = document.getElementById('cantidadGasto');
let formulario = document.getElementById('formulario');

let listaGastos = [];
let cantidadSaldo = 0;
let sumaGasto = 0;
let balance = 0;


const agregar = () => {
    if (campo(cantidadPresupuesto.value)) {
        alert('Debe llenar presupuesto')
        return
    }
    viewPresupuesto.innerHTML = `${cantidadPresupuesto.value}`;
}

const gasto = () => {

    if (campo(nombreGasto.value)) {
        alert('Debe llenar el campo nombre del Gasto')
        return
    }

    if (campo(cantidadGasto.value)) {
        alert('Debe llenar cantidad de Gasto')
        return
    }

    let gastos = new Gasto(nombreGasto.value, cantidadGasto.value);
    sumaGasto = sumaGasto + parseInt(gastos.cantidadGasto);
    balance = parseInt(viewPresupuesto.innerHTML) - sumaGasto;

    viewBalance.innerHTML = `$${balance}`;
    viewSumaGasto.innerHTML = `$${sumaGasto}`;

    listaGastos.push(gastos)
    recorrerListaGasto();
    formulario.reset();
}

//VALIDACIONES
const campo = (campo) => {
    if (campo === '') {
        return true
    } else {
        return false
    }
}

const recorrerListaGasto = () => {
    viewListaGasto.innerHTML = '';
    for (let i = 0; i < listaGastos.length; i++) {
        viewListaGasto.innerHTML +=
            `<tr id="fila${i}" >
            <td>${listaGastos[i].nombreGasto}</td>
            <td>${listaGastos[i].cantidadGasto}</td>
            <td>
                <a href="#" class="delete-icon" onclick="eliminar(${i})">
                    <i class="bi bi-trash-fill"></i>
                </a>
            </td>
        </tr>`
    }
}


const eliminar = (i) => {



    sumaGasto -= parseInt(listaGastos[i].cantidadGasto);
    balance = parseInt(viewPresupuesto.innerHTML) + sumaGasto;


    viewBalance.innerHTML = `$${balance}`;
    viewSumaGasto.innerHTML = `$${sumaGasto}`;
    
    let elementoEliminar = document.getElementById(`fila${i}`);
    elementoEliminar.remove();
    listaGastos.splice(i, 1);


}

