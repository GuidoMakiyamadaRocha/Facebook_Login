function logar() {
    let login = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (login == "admin" && senha == "admin") {
        alert('sucesso');
    }


}