/* Add your JavaScript to this file */

window.addEventListener('load', function () {
    const email = document.querySelector("#email")
    const submit = document.querySelector("button")
    const message = document.querySelector(".message")

    const valid = function() {
        if(message.classList.contains("email-invalid")){
            message.classList.remove("email-invalid")
            message.classList.add("email-valid")
        }
        else{
            message.classList.add("email-valid")
        }

        message.textContent = `Thank you! Your email address ${address} has been added to our mailing list!`
    }

    const invalid = function() {
        if(message.classList.contains("email-valid")){
            message.classList.remove("email-valid")
            message.classList.add("email-invalid")
        }
        else{
            message.classList.add("email-invalid")
        }

        message.textContent = "Please enter a valid email address"
    }

    submit.addEventListener("click", (event) => {
        event.preventDefault()

        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        address = email.value

        if(address.match(pattern)){
            valid()
            email.value = ""
            return true
        }
        else{
            invalid()
        }

    })
})