
let usersArray = [];
let db = localStorage;
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let userName = form.elements.user.value;
    let userEmail = form.elements.email.value;
    let userPassword = form.elements.password.value;
    const userCredentials = {
        id: usersArray.length,
        user: userName,
        email: userEmail,
        password: userPassword,
    };
    usersArray.push(userCredentials);
    form.reset();
    db.setItem("users",JSON.stringify(usersArray));
    Swal.fire({
        title: 'Registro exitoso!',
        text: 'Tu registro ha sido exitoso.',
        icon: 'success',
        confirmButtonText: 'Ok'
    });
})

