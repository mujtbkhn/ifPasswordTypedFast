window.addEventListener('DOMContentLoaded', () => {

    const password = document.querySelector(".password")
    const submit = document.querySelector(".submit")

    let startTime
    password.addEventListener('focus', () => {
        startTime = new Date().getTime()
    })


    submit.addEventListener('click', () => {
        if (password.value === "") {
            console.log("length required")
            return
        }
        if (password.value.length < 6) {
            console.log("more than 6 digits")
            return
        }
        const currentTime = new Date().getTime()
        const timeElapsed = currentTime - startTime
        if (timeElapsed < 5000) {
            console.log("typed very fast")
            return
        }

        console.log(password.value)
    })
})