let products = [
  {
    id: "periferico-01",
    name: "Auriculares HyperX Cloud 7.1",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30992_Auriculares_HyperX_Cloud_Revolver_7.1_3dd11be0-grn.jpg",
    category: {
      name: "Perifericos",
      id: "perifericos",
    },
    price: "$ 35.380",
    stock: "12"
  },

  {
    id: "monitor 01",
    name: "Monitor Samsung 19 A330N",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33534_Monitor_Samsung_19__A330N_HDMI_825ccd95-grn.jpg",
    category: {
      name: "Monitores",
      id: "monitores",
    },
    price: "$ 48.250",
    stock: "6"
  },
  {
    id: "monitor-02",
    name: "Monitor LG LCD 49 49WL95C Curvo ",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_30683_Monitor_LG_LCD_49__49WL95C_Curvo_Ultra_Wide_DUAL_QHD_b4c30ae3-grn.jpg",
    category: {
      name: "Monitores",
      id: "monitores",
    },
    price: "$ 602.999",
    stock: "4"
  },
  {
    id: "monitor-03",
    name: "Monitor Gamer LG 27 IPS",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_35236_Monitor_Gamer_LG_27__IPS_27GP950-B_4K_144Hz_bc90d922-grn.jpg",
    category: {
      name: "Monitores",
      id: "monitores",
    },
    price: "$ 433.160",
    stock: "4"
  },
  {
    id: "monitor-04",
    name: "Monitor Viewsonic 27 Elite ",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22739_Monitor_Viewsonic_27__Elite_XG270_240Hz_1Ms_80bab1ec-grn.jpg",
    category: {
      name: "Monitores",
      id: "monitores",
    },
    price: "$ 197.750",
    stock:"12"
  },
  {
    id: "monitor-05",
    name: "Monitor Gamer LG 27 144hz IPS FHD",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_19484_Monitor_Gamer_LG_27__27GL650F_144hz_IPS_FHD_GSync_FreeSync_1e30b9f9-grn.jpg",
    category: {
      name: "Monitores",
      id: "monitores",
    },
    price: "$ 158.800",
    stock: "8"
  },
  {
    id: "audio-01",
    name: "Parlantes Logitech Z407",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25657_Parlantes_Logitech_Z407_2.1_Bluetooth_5.0_200v_80W_aa7e5d8d-grn.jpg",
    category: {
      name: "Audio",
      id: "audio",
    },
    price: "$ 44.500",
    stock: "14"
  },
  {
    id: "audio-02",
    name: "Parlantes Logitech Z607 5.1",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13515_Parlantes_Logitech_Z607_5.1_Surround_Bluetooth_160W__33f76a80-grn.jpg",
    category: {
      name: "Audio",
      id: "audio",
    },
    price: "$ 57.150",
    stock:"3"
  },
  {
    id: "audio-03",
    name: "Barra de Sonido Redragon GS570 RGB",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33485_Barra_de_Sonido_Redragon_GS570_Darknet_RGB_7de1cdbd-grn.jpg",
    category: {
      name: "Audio",
      id: "audio",
    },
    price: "$ 13.990",
    stock:"14"
  },
  {
    id: "audio-04",
    name: "Parlantes Logitech Bluetooth G560 2.1 RGB",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17309_Parlantes_Logitech_Bluetooth_G560_2.1_RGB_Lightsync_240W_7ed24541-grn.jpg",
    category: {
      name: "Audio",
      id: "audio",
    },
    price: "$ 104.999",
    stock:"3"
  },
  {
    id: "silla-01",
    name: "Silla Gamer Shenlong SCH-RGB155 Black",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_36129_Silla_Gamer_Shenlong_SCH-RGB155_Black_7347c61c-grn.jpg",
    category: {
      name: "Sillas",
      id: "sillas",
    },
    price: "$ 97.250",
    stock: "7"
  },
  {
    id: "silla-02",
    name: "Silla gamers Corsair T1 Race Black",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_6000_Silla_Gamer_Corsair_T1_Race_Black_Red__5df97cb1-grn.jpg",
    category: {
      name: "Sillas",
      id: "sillas",
    },
    price: "$ 124.560",
    stock:"8"
  },
  {
    id: "componente-01",
    name: "Memoria GeiL DDR4 3000 MHZ",
    image:
      " https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_31776_Memoria_GeiL_DDR4_16GB_3000MHz_Super_Luce_RGB_Black_646b61f7-grn.jpg",
    category: {
      name: "Componentes",
      id: "componentes",
    },
    price: "$ 35.950",
    stock:"56"
  },
  {
    id: "componente-02",
    name: "Fuente ASUS TUF 80 plus Bronze",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23310_Fuente_ASUS_TUF_550W_80_Plus_Bronze_550B_cfcb396e-grn.jpg",
    category: {
      name: "Componentes",
      id: "componentes",
    },
    price: "$ 33.050",
    stock:"26"
  },
  {
    id: "componente-03",
    name: "Fuente ASUS ROG 850W 80+ Platinum",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23295_Fuente_ASUS_ROG_THOR_850W_80_Plus_Platinum_850P_Full_modular_4de04ae6-grn.jpg",
    category: {
      name: "Componentes",
      id: "componentes",
    },
    price: "$ 46.850",
    stock:"42"
  },
  {
    id: "componente-04",
    name: "Cooler CPU Thermaltake UX1000 ARGB",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_33637_Cooler_CPU_Thermaltake_UX100_ARGB_12a77695-grn.jpg",
    category: {
      name: "Componentes",
      id: "componentes",
    },
    price: "$ 7.860",
    stock:"56"
  },
  {
    id: "componente-05",
    name: "Procesador AMD RYZEN3 3200G 4.O GHz",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16752_Procesador_AMD_RYZEN_3_3200G_4.0GHz_Turbo___Radeon_Vega_8_AM4_Wraith_Stealth_Cooler_f414a507-grn.jpg",
    category: {
      name: "Componentes",
      id: "componentes",
    },
    price: "$ 79.860",
    stock:"40"
  },
  {
    id: "componente-06",
    name: "Procesador AMD Ryzen7 5700G 4.6GHz ",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_27673_Procesador_AMD_Ryzen_7_5700G_4.6GHz_Turbo___Wraith_Stealth_Cooler_cb33e4fa-grn.jpg",
    category: {
      name: "Componentes",
      id: "componentes",
    },
    price: "$ 109.200",
    stock:"32"
  },
  {
    id: "periferico-02",
    name: "Mouse ASUS ROG CHAKRAM RGB",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23175_Mouse_ASUS_ROG_CHAKRAM_RF_Inalambrico_16K_DPI_RGB_c5a561cb-grn.jpg",
    category: {
      name: "Perifericos",
      id: "perifericos",
    },
    price: "$ 39.510",
    stock:"22"
  },
  {
    id: "periferico-03",
    name: "Mouse Logitech G502 Lightspeed RGB",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16569_Mouse_Logitech_G502_Lightspeed_Wireless_RGB_Lightsync_f98d2f40-grn.jpg",
    category: {
      name: "Perifericos",
      id: "perifericos",
    },
    price: "$ 31.340",
    stock:"24"
  },
  {
    id: "componente-07",
    name: "Mother Asrock X670E Taichi Carrara AM5",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34911_Mother_Asrock_X670E_Taichi_Carrara_AM5_00f2f1c2-grn.jpg",
    category: {
      name: "Componentes",
      id: "componentes",
    },
    price: "$ 313.220",
    stock:"22"
  },
  {
    id: "componente-08",
    name: "Mother Asrock X670E Steel Legend AM5",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34460_Mother_Asrock_X670E_Steel_Legend_AM5_75fc36a9-grn.jpg",
    category: {
      name: "Componentes",
      id: "componentes",
    },
    price: "$ 219.200",
    stock:"25"
  },
  {
    id: "periferico-04",
    name: "Mouse Logitech G502X Black",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_35862_Mouse_Logitech_G502X_Black_Lightforce_Hero_25K_060f8ccf-grn.jpg",
    category: {
      name: "Perifericos",
      id: "perifericos",
    },
    price: "$ 31.020",
    stock:"28"
  },
  {
    id: "componente-09",
    name: "Gabinete Kolink Inspire K3 RGB",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_34567_Gabinete_Kolink_Inspire_K3_RGB__M-ATX_Vidrio_Templado_7306ef99-grn.jpg",
    category: {
      name: "Componentes",
      id: "componentes",
    },
    price: "$ 26.550",
    stock:"12"
  },
  {
    id: "componente-10",
    name: "Gabinete Lian Li Odyssey X Silver",
    image:
      "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32695_Gabinete_Lian_Li_Odyssey_X_Silver_d754dc77-grn.jpg",
    category: {
      name: "Componentes",
      id: "componentes",
    },
    price: "$ 244.100",
    stock:"16"
  },
];

const productsContainer = document.querySelector("#products_container");
const categoriesButtons = document.querySelectorAll(".btn_category");
const principalTitle = document.querySelector("#principal_title");
let addButton = document.querySelectorAll(".add_product")

function chargeProducts(chosenProducts) {

  productsContainer.innerHTML = "";

  chosenProducts.forEach((product) => {
    const divProduct = document.createElement("div");
    divProduct.classList.add("product");
    divProduct.innerHTML = `  <img
                      class="product_image"
                      src="${product.image}"
                      alt="${product.name}"
                    />
                    <div class="product_info_container">
                       <h3 class="product_name">${product.name}</h3>
                       <p class="product_price">${product.price}</p>
                       <button class="add_product" id="${product.id}">Agregar al carrito</button>
                    </div>`;

    productsContainer.append(divProduct);
  });
  updateAddButtons()
}

chargeProducts(products);

categoriesButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    categoriesButtons.forEach((button) => button.classList.remove("active"));

    e.currentTarget.classList.add("active");

    if(e.currentTarget.id != "all_products") {
      const categoriesTitle = products.find(product => product.category.id === e.currentTarget.id);
      principalTitle.innerText = categoriesTitle.category.name

        const productsByCategory = products.filter(
        (product) => product.category.id === e.currentTarget.id
      );
      chargeProducts(productsByCategory);
    }else{ 
      principalTitle.innerText = "Todos los productos"
      chargeProducts(products);
    }
  });
});

function updateAddButtons(){
  addButton = document.querySelectorAll(".add_product");

  addButton.forEach(button => {
    button.addEventListener("click", addCart)
  })
}

const productsInCart = [];

function addCart(e) {
 const idButton = e.currentTarget.id;
 const addedProducts = products.find(product => product.id === idButton);

 productsInCart.push(addedProducts);
 console.log(productsInCart)
}

