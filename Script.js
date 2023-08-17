let pass = document.getElementById("pass");
let msg = document.getElementById("sp")
let text = document.getElementById("text");
pass.addEventListener("input", () => {

    if (pass.value.length > 0) {
        text.style.display = "block";
        pass.style.border = "3px solid ";

    } else {
        text.style.display = "none";
        pass.style.border = "none";

    }

    if (pass.value.length < 4) {
        msg.innerHTML = "Weak"
        text.style.color = "#EF0107";
        pass.style.borderColor = "#EF0107"

    } else if (pass.value.length >= 4 && pass.value.length < 8) {

        msg.innerHTML = "Medium";
        text.style.color = "#FFC72C";
        pass.style.borderColor = "#FFC72C";


    } else if (pass.value.length >= 8) {

        msg.innerHTML = "Strong"
        text.style.color = "#32CD32";
        pass.style.borderColor = "#32CD32";

    }


})