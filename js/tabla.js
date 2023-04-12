let products = [
  {
    artc: 1,
    id: "periferico-01",
    name: "Auriculares HyperX Cloud",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30992_Auriculares_HyperX_Cloud_Revolver_7.1_3dd11be0-grn.jpg",
    category: {
      name: "Perifericos",
      id: "perifericos",
    },
    price: "35380",
    stock: "12",
  },

  {
    artc: 2,
    id: "monitor-01",
    name: "Monitor Samsung 19 A330N",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33534_Monitor_Samsung_19__A330N_HDMI_825ccd95-grn.jpg",
    category: {
      name: "Monitores",
      id: "monitores",
    },
    price: "48250",
    stock: "6",
  },
  {
    artc: 3,
    id: "monitor-02",
    name: "Monitor LG LCD 49",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30683_Monitor_LG_LCD_49__49WL95C_Curvo_Ultra_Wide_DUAL_QHD_b4c30ae3-grn.jpg",
    category: {
      name: "Monitores",
      id: "monitores",
    },
    price: "602999",
    stock: "4",
  },
  {
    artc: 4,
    id: "monitor-03",
    name: "Monitor Gamer LG 27 IPS",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_35236_Monitor_Gamer_LG_27__IPS_27GP950-B_4K_144Hz_bc90d922-grn.jpg",
    category: {
      name: "Monitores",
      id: "monitores",
    },
    price: "433160",
    stock: "4",
  },
  {
    artc: 5,
    id: "monitor-04",
    name: "Monitor Viewsonic 27 Elite ",
    imge: "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22739_Monitor_Viewsonic_27__Elite_XG270_240Hz_1Ms_80bab1ec-grn.jpg",
    category: {
      name: "Monitores",
      id: "monitores",
    },
    price: "197750",
    stock: "12",
  },
  {
    artc: 6,
    id: "monitor-05",
    name: "Monitor Gamer LG 27 144hz",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_19484_Monitor_Gamer_LG_27__27GL650F_144hz_IPS_FHD_GSync_FreeSync_1e30b9f9-grn.jpg",
    category: {
      name: "Monitores",
      id: "monitores",
    },
    price: "158800",
    stock: "8",
  },
  {
    artc: 7,
    id: "audio-01",
    name: "Parlantes Logitech Z407",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25657_Parlantes_Logitech_Z407_2.1_Bluetooth_5.0_200v_80W_aa7e5d8d-grn.jpg",
    category: {
      name: "Audio",
      id: "audio",
    },
    price: "44500",
    stock: "14",
  },
  {
    artc: 8,
    id: "audio-02",
    name: "Parlantes Logitech Z607",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13515_Parlantes_Logitech_Z607_5.1_Surround_Bluetooth_160W__33f76a80-grn.jpg",
    category: {
      name: "Audio",
      id: "audio",
    },
    price: "57150",
    stock: "3",
  },
  {
    artc: 9,
    id: "audio-03",
    name: "Parlante Redragon GS570 ",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33485_Barra_de_Sonido_Redragon_GS570_Darknet_RGB_7de1cdbd-grn.jpg",
    category: {
      name: "Audio",
      id: "audio",
    },
    price: "13990",
    stock: "14",
  },
  {
    artc: 10,
    id: "audio-04",
    name: "Parlantes Logitech G560",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17309_Parlantes_Logitech_Bluetooth_G560_2.1_RGB_Lightsync_240W_7ed24541-grn.jpg",
    category: {
      name: "Audio",
      id: "audio",
    },
    price: "104999",
    stock: "3",
  },
  {
    artc: 11,
    id: "silla-01",
    name: "Silla Gamer Shenlong Black",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_36129_Silla_Gamer_Shenlong_SCH-RGB155_Black_7347c61c-grn.jpg",
    category: {
      name: "Sillas",
      id: "sillas",
    },
    price: "97250",
    stock: "7",
  },
  {
    artc: 12,
    id: "silla-02",
    name: "Silla gamers Corsair T1",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_6000_Silla_Gamer_Corsair_T1_Race_Black_Red__5df97cb1-grn.jpg",
    category: {
      name: "Sillas",
      id: "sillas",
    },
    price: "124560",
    stock: "8",
  },
  {
    artc: 13,
    id: "componente-01",
    name: "Memoria GeiL DDR4 3000 MHZ",
    image:
      " https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31776_Memoria_GeiL_DDR4_16GB_3000MHz_Super_Luce_RGB_Black_646b61f7-grn.jpg",
    category: {
      name: "Componentes",
      id: "componentes",
    },
    price: "35950",
    stock: "56",
  },
  {
    artc: 14,
    id: "componente-02",
    name: "Fuente ASUS TUF 80+ B",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23310_Fuente_ASUS_TUF_550W_80_Plus_Bronze_550B_cfcb396e-grn.jpg",
    category: {
      name: "Componentes",
      id: "componentes",
    },
    price: "33050",
    stock: "26",
  },
  {
    artc: 15,
    id: "componente-03",
    name: "Fuente ASUS ROG 850W 80+ P",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23295_Fuente_ASUS_ROG_THOR_850W_80_Plus_Platinum_850P_Full_modular_4de04ae6-grn.jpg",
    category: {
      name: "Componentes",
      id: "componentes",
    },
    price: "46850",
    stock: "42",
  },
  {
    artc: 16,
    id: "componente-04",
    name: "Cooler CPU Thermaltake UX1000",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33637_Cooler_CPU_Thermaltake_UX100_ARGB_12a77695-grn.jpg",
    category: {
      name: "Componentes",
      id: "componentes",
    },
    price: "7860",
    stock: "56",
  },
  {
    artc: 17,
    id: "componente-05",
    name: "Procesador AMD RYZEN3 3200G",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16752_Procesador_AMD_RYZEN_3_3200G_4.0GHz_Turbo___Radeon_Vega_8_AM4_Wraith_Stealth_Cooler_f414a507-grn.jpg",
    category: {
      name: "Componentes",
      id: "componentes",
    },
    price: "79860",
    stock: "40",
  },
  {
    artc: 18,
    id: "componente-06",
    name: "Procesador AMD Ryzen7 5700G",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27673_Procesador_AMD_Ryzen_7_5700G_4.6GHz_Turbo___Wraith_Stealth_Cooler_cb33e4fa-grn.jpg",
    category: {
      name: "Componentes",
      id: "componentes",
    },
    price: "109200",
    stock: "32",
  },
  {
    artc: 19,
    id: "periferico-02",
    name: "Mouse ASUS ROG CHAKRAM RGB",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23175_Mouse_ASUS_ROG_CHAKRAM_RF_Inalambrico_16K_DPI_RGB_c5a561cb-grn.jpg",
    category: {
      name: "Perifericos",
      id: "perifericos",
    },
    price: "39510",
    stock: "22",
  },
  {
    artc: 20,
    id: "periferico-03",
    name: "Mouse Logitech G502",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16569_Mouse_Logitech_G502_Lightspeed_Wireless_RGB_Lightsync_f98d2f40-grn.jpg",
    category: {
      name: "Perifericos",
      id: "perifericos",
    },
    price: "31340",
    stock: "24",
  },
  {
    artc: 21,
    id: "componente-07",
    name: "Mother Asrock X670E",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34911_Mother_Asrock_X670E_Taichi_Carrara_AM5_00f2f1c2-grn.jpg",
    category: {
      name: "Componentes",
      id: "componentes",
    },
    price: "313220",
    stock: "22",
  },
  {
    artc: 22,
    id: "componente-08",
    name: "Mother Asrock X670E Steel",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34460_Mother_Asrock_X670E_Steel_Legend_AM5_75fc36a9-grn.jpg",
    category: {
      name: "Componentes",
      id: "componentes",
    },
    price: "219200",
    stock: "25",
  },
  {
    artc: 23,
    id: "periferico-04",
    name: "Mouse Logitech G502X Black",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_35862_Mouse_Logitech_G502X_Black_Lightforce_Hero_25K_060f8ccf-grn.jpg",
    category: {
      name: "Perifericos",
      id: "perifericos",
    },
    price: "31020",
    stock: "28",
  },
  {
    artc: 24,
    id: "componente-09",
    name: "Gabinete Kolink Inspire K3",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34567_Gabinete_Kolink_Inspire_K3_RGB__M-ATX_Vidrio_Templado_7306ef99-grn.jpg",
    category: {
      name: "Componentes",
      id: "componentes",
    },
    price: "26550",
    stock: "12",
  },
  {
    artc: 25,
    id: "componente-10",
    name: "Gabinete Lian Li Odyssey",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32695_Gabinete_Lian_Li_Odyssey_X_Silver_d754dc77-grn.jpg",
    category: {
      name: "Componentes",
      id: "componentes",
    },
    price: "244100",
    stock: "16",
  },
  {
    artc: 26,
    id: "componente-11",
    name: "Gabinete Li Odyssey",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32695_Gabinete_Lian_Li_Odyssey_X_Silver_d754dc77-grn.jpg",
    category: {
      name: "Componentes",
      id: "componentes",
    },
    price: "244100",
    stock: "16",
  },
];

function guardarEnLocalStorage() {
  localStorage.setItem('products', JSON.stringify(products));
}

function agregarDatos() {
  const table = document.getElementById("myTable").getElementsByTagName("tbody")[0];
  if (table.hasChildNodes()) {
    table.innerHTML = "";
  }
  let products = JSON.parse(localStorage.getItem("products"));
  for (let i = 0; i < products.length; i++) {
    let row = table.insertRow(i);
    let idCell = row.insertCell(0);
    let name = row.insertCell(1);
    let stock = row.insertCell(2);
    let price = row.insertCell(3);
    let category = row.insertCell(4);
    let accionesCell = row.insertCell(5);
    idCell.innerHTML = products[i].id;
    name.innerHTML = products[i].name;
    stock.innerHTML = products[i].stock;
    price.innerHTML = products[i].price;
    category.innerHTML = products[i].category.name;
    accionesCell.innerHTML =
      '<button type="button" class="btn btn-danger" onclick="eliminarDato(' +
      products[i].artc +
      ')">Eliminar</button>' +
      '<button type="button" class="btn btn-warning" onclick="editarDato(' +
      products[i].artc +
      ')">Editar</button>';
  }
}

window.onload = function () {
  agregarDatos();
};

const editBtn = document.getElementById("editBtn");
const editModal = document.getElementById("editModal");

const closeBtn = editModal.querySelector(".close");

const editForm = document.getElementById("editForm");
editForm.addEventListener("submit", submitForm);

function openModal() {
  editModal.style.display = "block";
}

function closeModal() {
  editModal.style.display = "none";
}

function submitForm(event) {
  event.preventDefault();
  let form = document.querySelector("form");
  let nuevoArct = products.length + 1;;
  let nuevoId = form.elements.id.value;
  let nuevoNombre = form.elements.nombre.value;
  let nuevaImagen = form.elements.imagen.value;
  let nuevaCategoria = form.elements.categoria.value;
  let nuevoStock = form.elements.stock.value;
  let nuevoPrecio = form.elements.precio.value;

  if (!nuevoArct || !nuevoId ||!nuevoNombre ||!nuevaImagen ||!nuevaCategoria ||!nuevoStock ||!nuevoPrecio) {
    Swal.fire({
      title: "Atencion!",
      text: "Le falta llenar un campo",
      icon: "error",
      confirmButtonText: "Aceptar!",
    });
    return;
  }
  const product = {
    artc: nuevoArct,
    id: nuevoId,
    name: nuevoNombre,
    image: nuevaImagen,
    category: {
      name: nuevaCategoria,
      id: nuevaCategoria,
    },
    stock: nuevoStock,
    price: nuevoPrecio,
  };
  if (confirm("¿Estás seguro de que deseas agregar este producto?")) {
    products.push(product);
    Swal.fire({
      title: "Producto Agregado!",
      text: "Se agrego el producto exitosamente!",
      icon: "success",
      confirmButtonText: "Aceptar!",
    });
    form.elements.id.value = "";
    form.elements.nombre.value = "";
    form.elements.imagen.value = "";
    form.elements.stock.value = "";
    form.elements.precio.value = "";
    form.elements.categoria.value = "";
    closeModal();
    guardarEnLocalStorage();
    return actualizarTabla();
  }
}

editBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

function eliminarDato(artc) {
  if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
    localStorage.setItem("products", JSON.stringify(products));
    for (let i = 0; i < products.length; i++) {
      if (products[i].artc === artc) {
        products.splice(i, 1);
        guardarEnLocalStorage();
        break;
      }
    }
    Swal.fire({
      title: "Producto Eliminado!",
      text: "Se elimino el producto exitosamente!",
      icon: "success",
      confirmButtonText: "Aceptar!",
    });
  }
  actualizarTabla();
}

function editarDato(artc) {
  if (confirm("¿Estás seguro de que deseas editar este producto?")) {
    localStorage.setItem("products", JSON.stringify(products));
    for (let i = 0; i < products.length; i++) {
      if (products[i].artc === artc) {
        let nuevoId = prompt("Ingrese el nuevo id:");
        let nuevoNombre = prompt("Ingrese el nuevo nombre:");
        let nuevoStock = prompt("Ingrese el nuevo stock:");
        let nuevoPrecio = prompt("Ingrese el nuevo precio:");
        let nuevaCategoria = prompt("Ingrese la categoria nueva:");
        if (!nuevoId ||!nuevoNombre ||!nuevoStock ||!nuevoPrecio ||!nuevaCategoria) {
          Swal.fire({
            title: "Atencion!",
            text: "Le falta llenar un campo",
            icon: "error",
            confirmButtonText: "Aceptar!",
          });
        } else {
          products[i].id = nuevoId;
          products[i].name = nuevoNombre;
          products[i].stock = nuevoStock;
          products[i].price = nuevoPrecio;
          products[i].category.name = nuevaCategoria;
          products[i].category.id = nuevaCategoria;
          guardarEnLocalStorage();
          Swal.fire({
            title: "Producto Editado!",
            text: "Se edito el producto exitosamente!",
            icon: "success",
            confirmButtonText: "Aceptar!",
          });
          break;
        }
      }
    }
  }
  actualizarTabla();
}

function actualizarTabla() {
  let table = document.getElementById("myTable").getElementsByTagName("tbody")[0];
  while (table.rows.length > 0) {
    table.deleteRow(0);
  }
  agregarDatos();
}
