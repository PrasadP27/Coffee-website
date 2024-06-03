gsap.from('.booking-home h1, .booking-home p , .booking-home nav', {
    yPercent: 200,
    opacity: 0,
    stagger: true,
    duration: 1.5,
});

//flatpicker

flatpickr("#date", {
    altInput: true,
    altFormat: "F j, Y",
    minDate: "today",
    maxDate: new Date().fp_incr(7)
})

flatpickr("#time", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "h : i  K",
    minTime: "10:00",
    maxTime: "23:00"
})

//form validation 

const form = document.querySelector('form')
const fullName = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const loca = document.getElementById('location')
const date = document.getElementById('date')
const time = document.getElementById('time')
const mess = document.getElementById('message')

function checkInputs() {
    const items = document.querySelectorAll(".item")

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error")
            item.parentElement.classList.add("error")
        }

        //if email is not blank check the email format
        if (items[1].value != "") {
            checkEmail()
        }

        //if any key is pressed in email check email format
        items[1].addEventListener("keyup", () => {
            checkEmail()
        })

        //if phone is not blank then check if its number
        if (items[2].value != "") {
            checkPhone()
        }

        //if any key is pressed in email check email format
        items[2].addEventListener("keyup", () => {
            checkPhone()
        })


        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error")
                item.parentElement.classList.remove("error")
            }
            else {
                item.classList.add("error")
                item.parentElement.classList.add("error")
            }
        })
    }

    mess.classList.remove("error")
    mess.parentElement.classList.remove("error")
}

//check if the email is valid format
function checkEmail() {
    const emailRegex = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

    const errorTxtEmail = document.querySelector(".error-txt.email")

    if (!email.value.match(emailRegex)) {
        email.classList.add("error")
        email.parentElement.classList.add("error")

        if (email.value != "") {
            errorTxtEmail.innerText = "*Enter a valid email Address"
        } else {
            errorTxtEmail.innerText = "*Email Adderss can't be blank"
        }

    } else {
        email.classList.remove("error")
        email.parentElement.classList.remove("error")
    }
}

//check for number to be integer
function checkPhone() {

    const phoneregex = /^[2-9]\d{9}$/

    const errorTxtPhone = document.querySelector('.error-txt.number')

    if (!phone.value.match(phoneregex)) {
        phone.classList.add("error")
        phone.parentElement.classList.add("error")

        if (phone.value != "") {

            if (isNaN(phone.value)) {
                errorTxtPhone.innerText = "*Enter a valid Phone number"
            }
            else {
                errorTxtPhone.innerText = "*Phone number must contain 10 digits"
            }

        } else {
            errorTxtPhone.innerText = "*Phone Number can't be blank"
        }

    } else {
        phone.classList.remove("error")
        phone.parentElement.classList.remove("error")
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault()

    checkInputs()

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !loca.classList.contains("error") && !date.classList.contains("error") && !time.classList.contains("error") && !mess.classList.contains("error")) {

        console.log("Message send");

        // sendEmail()

        form.reset()
        return false
    }
})