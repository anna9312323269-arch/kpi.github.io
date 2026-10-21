function change() {
    let surnameElement = document.getElementById('surname');
    let namemElement = document.getElementById('name');
    let last_name = document.getElementById('lastname');
    let sex = document.getElementById('sex');

    if (surnameElement.innerText === "Николаева"){
        surnameElement.innerText = "Nikolaeva";
        namemElement.innerText = "Anna";
        last_name.innerText = "Lvovna";
        sex.innerText = "F."
    }
    else{
        surnameElement.innerText = "Николаева"
        namemElement.innerText = "Анна"
        last_name.innerText = "Львовна"
        sex.innerText = "Жен."

    }
    }

const Button = document.getElementById("changebtn");
Button.addEventListener('click', change);
