// selecting  section-1 html elements
var Name = document.getElementById("name") //
var age = document.getElementById("age") //
var gender = document.getElementsByName("gender")
var course = document.getElementById("course")
var email = document.getElementById("email") //
var phone = document.getElementById("phone") //
var pwd = document.getElementById("pwd") //
var checkbox = document.getElementsByName("check")
var submitbtn = document.getElementById("submit")


// // prevent the submit button from refresh
submitbtn.addEventListener("click", function (event) {
    event.preventDefault()


    // regular expressions for name,age, email,password,mobile number
    var nameRegex = /^[a-zA-Z]+$/
    var ageRegex = /^\d{2}$/
    var emailRegex = /^[a-zA-Z0-9]+@gmail\.com/
    var phonerRegex = /^\d{10}$/
    var passwordRegex = /^[a-zA-Z0-9]+/

    // ellaa values um crt aa fill pannna aprm next process poga var valaidate use panna porom
    var validate = true

    // name,age, email,password,mobile number element already selected at stating
    // to compare the user values with regex
    // name validation
    if (nameRegex.test(Name.value) == false) {
        document.querySelector("#name_error").style.display = "inline"
        validate = false
    }
    else {
        document.querySelector("#name_error").style.display = "none"
    }


    // age validation
    if (ageRegex.test(age.value) == false) {
        document.querySelector("#age_error").style.display = "inline"
        validate = false

    }
    else {
        document.querySelector("#age_error").style.display = "none"
    }

    // email validation
    if (emailRegex.test(email.value) == false) {
        document.querySelector("#email_error").style.display = "inline"
        validate = false

    }
    else {
        document.querySelector("#email_error").style.display = "none"
    }

    // phone number validation

    if (phonerRegex.test(phone.value) == false) {
        document.querySelector("#phone_error").style.display = "inline"
        validate = false

    }
    else {
        document.querySelector("#phone_error").style.display = "none"
    }

    // password validation
    if (passwordRegex.test(pwd.value) == false) {
        document.querySelector("#password_error").style.display = "inline"
        validate = false

    }
    else {
        document.querySelector("#password_error").style.display = "none"
    }

    if (validate == true) {
        alert("form submitted successfully")

        // to push the user datas to second table 
        // section 2 elements seleted here
        var name_container = document.getElementById("name_container")
        var age_container = document.getElementById("age_container")
        var gender_container = document.getElementById("gender_container")
        var course_container = document.getElementById("course_container")
        var email_container = document.getElementById("email_container")
        var phone_container = document.getElementById("phone_container")
        var pwd_container = document.getElementById("password_container")
        

        // to display user values to section 2 for display
        // name container 
        var name_display = document.createElement("td")
        name_display.innerHTML = Name.value
        // console.log(name_display.textContent)
        name_container.append(name_display)

        // age container
        var age_display = document.createElement("td")
        age_display.innerHTML = age.value
        age_container.append(age_display)

        //gender container
        var gender_display = document.createElement("td")
        gender_display.innerHTML = gender_value.textContent
        gender_container.append(gender_display)

        // course container
        var course_display = document.createElement("td")
        course_display.innerHTML = checked_values.textContent
        course_container.append(course_display)

        //e-Mail container
        var email_display = document.createElement("td")
        email_display.innerHTML = email.value
        email_container.append(email_display)

        // phone numnber conainer
        var phone_display = document.createElement("td")
        phone_display.innerHTML = phone.value
        phone_container.append(phone_display)

        // password contaienr
        var pwd_display = document.createElement("td")
        pwd_display.innerHTML = pwd.value
        pwd_container.append(pwd_display)



    }

})


// checkbox - c , java , python
// array to store checked values
var checked_values = document.getElementById("checked_values")
skill = []
for (count = 0; count < checkbox.length; count = count + 1) {
    checkbox[count].addEventListener("click", function (event) {
        if (event.target.checked) {
            console.log("checked")
            skill.push(event.target.value)
            checked_values.textContent = skill
        }
        else {
            console.log("unchecked")
            var index = skill.indexOf(event.target.value)
            skill.splice(index, 1)
            checked_values.textContent = skill
        }
    })

}


// gender value from radio buttons

var gender_value = document.getElementById("gender_value")
for (count = 0; count <= 1; count = count + 1) {
    gender[count].addEventListener("click", function (event) {
        gender_value.textContent = event.target.value
        console.log(gender_value.textContent)
    })
}

