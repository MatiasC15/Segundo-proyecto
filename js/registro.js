// let adminObject = 
//   {
//     id: 0,
//     user: "MatiasC15",
//     email: "matiascordoba79@gmail.com",
//     password: "tute150597",
//     isAdmin: true,
//   };


// let db = localStorage;
// let form = document.querySelector("form");
// let usersArray = JSON.parse(db.getItem("users")) || [];
// usersArray.push(adminObject);

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let userName = form.elements.user.value;
//   let userEmail = form.elements.email.value;
//   let userPassword = form.elements.password.value;

//   // Validar si se están ingresando las credenciales de administrador
//   if (
//     userName.toLowerCase() === "matiasc15" ||
//     userPassword === "tute150597" ||
//     userEmail.toLowerCase() === "matiascordoba79@gmail.com"
//   ) {
//     Swal.fire({
//       title: "Error!",
//       text: "No puedes usar las credenciales de administrador.",
//       icon: "error",
//       confirmButtonText: "Ok",
//     });
//     return;
//   }

//   // Validar si la contraseña incluye al menos una mayúscula
//   let hasUpperCase = /[A-Z]/.test(userPassword);
//   if (!hasUpperCase) {
//     Swal.fire({
//       title: "Error!",
//       text: "La contraseña debe incluir al menos una mayúscula.",
//       icon: "error",
//       confirmButtonText: "Ok",
//     });
//     return;
//   }

//   // Validar si el usuario o correo electrónico ya están registrados
//   let isUserRegistered = usersArray.some((user) => user.user === userName);
//   let isEmailRegistered = usersArray.some((user) => user.email === userEmail);
//   if (isUserRegistered || isEmailRegistered) {
//     Swal.fire({
//       title: "Error!",
//       text: "El usuario o correo electrónico ya están registrados.",
//       icon: "error",
//       confirmButtonText: "Ok",
//     });
//     return;
//   }

//   const userCredentials = {
//     id: usersArray.length,
//     user: userName,
//     email: userEmail,
//     password: userPassword,
//     isAdmin: false,
//   };

//   usersArray.push(userCredentials);
//   form.reset();
//   db.setItem("users", JSON.stringify(usersArray));
//   Swal.fire({
//     title: "Registro exitoso!",
//     text: "Tu registro ha sido exitoso.",
//     icon: "success",
//     confirmButtonText: "Ok",
//   }).then(() => {
//     window.location.href = "login.html";
//   });
// });
let db = localStorage;
let form = document.querySelector("form");
let usersArray = JSON.parse(db.getItem("users")) || [];

// Comprobar si ya existe un usuario administrador en el array
let adminExists = usersArray.some((user) => user.isAdmin);
if (!adminExists) {
  let adminObject = {
    id: 0,
    user: "MatiasC15",
    email: "matiascordoba79@gmail.com",
    password: "tute150597",
    isAdmin: true,
  };
  usersArray.push(adminObject);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = form.elements.user.value;
  let userEmail = form.elements.email.value;
  let userPassword = form.elements.password.value;

  // Validar si se están ingresando las credenciales de administrador
  if (
    userName.toLowerCase() === "matiasc15" ||
    userPassword === "tute150597" ||
    userEmail.toLowerCase() === "matiascordoba79@gmail.com"
  ) {
    Swal.fire({
      title: "Error!",
      text: "No puedes usar las credenciales de administrador.",
      icon: "error",
      confirmButtonText: "Ok",
    });
    return;
  }

  // Validar si la contraseña incluye al menos una mayúscula
  let hasUpperCase = /[A-Z]/.test(userPassword);
  if (!hasUpperCase) {
    Swal.fire({
      title: "Error!",
      text: "La contraseña debe incluir al menos una mayúscula.",
      icon: "error",
      confirmButtonText: "Ok",
    });
    return;
  }

  // Validar si el usuario o correo electrónico ya están registrados
  let isUserRegistered = usersArray.some((user) => user.user === userName);
  let isEmailRegistered = usersArray.some((user) => user.email === userEmail);
  if (isUserRegistered || isEmailRegistered) {
    Swal.fire({
      title: "Error!",
      text: "El usuario o correo electrónico ya están registrados.",
      icon: "error",
      confirmButtonText: "Ok",
    });
    return;
  }

  const userCredentials = {
    id: usersArray.length,
    user: userName,
    email: userEmail,
    password: userPassword,
    isAdmin: false,
  };

  usersArray.push(userCredentials);
  form.reset();
  db.setItem("users", JSON.stringify(usersArray));
  Swal.fire({
    title: "Registro exitoso!",
    text: "Tu registro ha sido exitoso.",
    icon: "success",
    confirmButtonText: "Ok",
  }).then(() => {
    window.location.href = "login.html";
  });
});