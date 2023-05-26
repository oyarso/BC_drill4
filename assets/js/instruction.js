class Gasto {
    constructor(nombreGasto, cantidadGasto) {
        this.nombreGasto = nombreGasto;
        this.cantidadGasto = cantidadGasto;
    }
}

let cantidadPresupuesto = document.getElementById('cantidadPresupuesto');
let cantidadGasto = document.getElementById('cantidadGasto');
let nombreGasto = document.getElementById('nombreGasto');
let mostrarDatos = document.getElementById('mostrar');
let mostrarDatos2 = document.getElementById('mostrar2');
let mostrarDatos3 = document.getElementById('mostrar3');
let pedidos = []; let pedidos2 = [];
let mostrarDatos4 = document.getElementById('mostrar4');
let mostrarDatos5 = document.getElementById('mostrar5');
let mostrarDatos6 = document.getElementById('mostrar6');
let cantidadSaldo = 0;
const campo = (campo) => {
    if (campo === '') {
        return true
    } else {
        return false
    }
}

const agregar = () => {
    if (campo(cantidadPresupuesto.value)) {
        alert('Debe llenar presupuesto')
        return
    }
    mostrar();
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
    let solicitud2 = new Gasto(nombreGasto.value, cantidadGasto.value);
    pedidos2.push(solicitud2);
    mostrar2();
    mostrar3();
    mostrar4();
    mostrar5();
    mostrarDel();
}
const mostrar = () => {
    let li = document.createElement('li');
    li.textContent = `
        $ ${cantidadPresupuesto.value}
        `;
    mostrarDatos.appendChild(li);
    console.log(cantidadPresupuesto.value)
}


const mostrar3 = () => {
    mostrarDatos3.innerHTML = '';
    for (let i = 0; i < pedidos2.length; i++) {
        let li = document.createElement('li');
        li.textContent = `
            ${pedidos2[i].nombreGasto}
        `;
        mostrarDatos3.appendChild(li);
    }
}

const mostrar4 = () => {
    mostrarDatos4.innerHTML = '';
    for (let i = 0; i < pedidos2.length; i++) {
        let li = document.createElement('li');
        li.textContent = `
            $ ${pedidos2[i].cantidadGasto}
        `;
        mostrarDatos4.appendChild(li);
    }
}

let gastos = 0;
const mostrar2 = () => {
    let li = document.createElement('li');
    c = parseInt(cantidadGasto.value);
    gastos = gastos + c;

    
    mostrarDatos2.innerHTML ="$ "+gastos;
}


let saldo = 0;
const mostrar5 = () => {
    cantidadSaldo = cantidadPresupuesto - gasto.cantidadGasto;
    let li = document.createElement('li');
    a = (cantidadPresupuesto.value);
    b = (cantidadGasto.value);
    if (saldo == 0) {
        saldo = a;
    }
    saldo = saldo - b;
    li.textContent = `
    $ ${saldo}
        `;
    mostrarDatos5.innerHTML ="$ "+ saldo;

}



function removeItem( itemid ) {
    var element = document.getElementById('div_' + itemid ); // will return element
    element.parentNode.removeChild(element); // will remove the element from DOM
  }
// const mostrarDel = () => {
//     mostrarDatos6.innerHTML = '';
//         let li = document.createElement('li');
//         g = (cantidadGasto.value);
//         s = (saldo.value);
//         total = g + s;
      
//             mostrarDatos6.innerHTML = saldo;
    
// }

