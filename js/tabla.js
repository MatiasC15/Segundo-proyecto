let productos = [
    {
      id: 1,
      nombre: "Auriculares Mars gaming",
      color: "rgb",
      precio: "$13499",
      categoria: "periferico",
    },
    {
      id: 2,
      nombre: "Mouse Logitech G PRO X Superlight White 25600 DPI",
      color: "blanco",
      precio: "$46999",
      categoria: "periferico",
    },
    {
      id: 3,
      nombre: "Micrófono Logitech Yeti Blackout Edition p/Streaming PC",
      color: "negro",
      precio: "$48499",
      categoria: "periferico",
    },
    {
      id: 4,
      nombre: "Teclado Mecanico Marvo KG962SP-R 60% Switch Red",
      color: "negro,rgb",
      precio: "$7100",
      categoria: "periferico",
    },
    {
      id: 5,
      nombre: "Procesador AMD Ryzen 7 5700G 4.6GHz Turbo + Wraith Stealth Cooler",
      color: "gris",
      precio: "$109200",
      categoria: "componentes",
    },
    {
      id: 6,
      nombre:
        "Procesador Intel Core i3 10100F 4.3GHz Turbo Socket 1200 Comet Lake",
      color: "negro",
      precio: "$28950",
      categoria: "componentes",
    },
    {
      id: 7,
      nombre: "Disco Sólido SSD Gigabyte 240GB 500MB/s",
      color: "negro",
      precio: "$10900",
      categoria: "componentes",
    },
];

function agregarDatos() {
    var table = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    if (table.hasChildNodes()) {
        table.innerHTML = '';
    }
    for (var i = 0; i < productos.length; i++) {
      var row = table.insertRow(i);
      var idCell = row.insertCell(0);
      var nombreCell = row.insertCell(1);
      var color = row.insertCell(2);
      var precio = row.insertCell(3);
      var accionesCell = row.insertCell(4);
      idCell.innerHTML = productos[i].id;
      nombreCell.innerHTML = productos[i].nombre;
      color.innerHTML = productos[i].color;
      precio.innerHTML = productos[i].precio;
      accionesCell.innerHTML = '<button type="button" class="btn btn-danger" onclick="eliminarDato(' + productos[i].id + ')">Eliminar</button>' +
                              '<button type="button" class="btn btn-warning" onclick="editarDato(' + productos[i].id + ')">Editar</button>';
    }
}

window.onload = function() {
    agregarDatos();
};

const editBtn = document.getElementById("editBtn");
const editModal = document.getElementById("editModal");
let agProd = []

const closeBtn = editModal.querySelector(".close");

const editForm = document.getElementById("editForm");
editForm.addEventListener("submit", submitForm);

function openModal() {
  editModal.style.display = "block";
}

function closeModal() {
  editModal.style.display = "none";
}

function submitForm(e) {
  e.preventDefault()
  let form = document.querySelector("form");
  let nuevoId = parseInt(form.elements.id.value)
  let nuevoNombre = form.elements.nombre.value;
  let nuevoColor = form.elements.color.value;
  let nuevoPrecio = form.elements.precio.value;

  if (!nuevoId || !nuevoNombre || !nuevoColor || !nuevoPrecio) {
    Swal.fire({
      title: "Atencion!",
      text: "Le falta llenar un campo",
      icon: "error",
      confirmButtonText: "Aceptar!",
    });
    return;
  }
    productos.push({ id: nuevoId, nombre: nuevoNombre, color: nuevoColor, precio: nuevoPrecio });
    actualizarTabla();
    form.elements.id.value = "";
    form.elements.nombre.value = "";
    form.elements.color.value = "";
    form.elements.precio.value = "";
    form.elements.categoria.value = "";
    Swal.fire({
      title: "Producto Agregado!",
      text: "Se agrego el producto exitosamente!",
      icon: "success",
      confirmButtonText: "Aceptar!",
    });
    closeModal();
  }

editBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

function eliminarDato(id) {
    for (var i = 0; i < productos.length; i++) {
      if (productos[i].id === id) {
        productos.splice(i, 1);
        break;
      }
    }
    actualizarTabla();
}

function editarDato(id) {
    for (var i = 0; i < productos.length; i++) {
      if (productos[i].id === id) {
        var nuevoId = prompt('Ingrese el nuevo id:');
        var nuevoNombre = prompt('Ingrese el nuevo nombre:');
        var nuevoColor = prompt('Ingrese el nuevo color:');
        var nuevoPrecio = prompt('Ingrese el nuevo precio:');
        if (!nuevoId || !nuevoNombre || !nuevoColor || !nuevoPrecio) {
            Swal.fire({
                title: "Atencion!",
                text: "Le falta llenar un campo",
                icon: "error",
                confirmButtonText: "Aceptar!",
              });
        }
        productos[i].id = nuevoId;
        productos[i].nombre = nuevoNombre;
        productos[i].color = nuevoColor;
        productos[i].precio = nuevoPrecio;
        break;
      }
    }
    actualizarTabla();
}
  
function actualizarTabla() {
    var table = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    while (table.rows.length > 0) {
      table.deleteRow(0);
    }
    agregarDatos();
}

/*function crearNuevoDato() {
    let nuevoId = productos.length + 1;
    let nuevoNombre = prompt('Ingrese el nombre:');
    let nuevoColor = prompt('Ingrese el color:');
    let nuevaPrecio = prompt('Ingrese el precio:');
    productos.push({ id: nuevoId, nombre: nuevoNombre, color: nuevoColor, precio: nuevaPrecio });
    actualizarTabla();
}*/