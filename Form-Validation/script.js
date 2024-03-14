const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message')



let isValid = false;
let passwordMatch = false;


const validateForm = () => {
    isValid = form.checkVisibility();
    console.log(isValid)

    // style main message for an error
   if(!isValid) {
    message.textContent = "please fill out the field ";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
     return
   }

   // check to see if password is match
    if(password1El.value === password2El.value) {
        passwordMatch = true ;
        password1El.style.borderColor = "green !important"
        password2El.style.borderColor = "green !important"
    }else{
        passwordMatch = false;
        message.textContent = "Make sure password match."
        message.style.color = "red"
        messageContainer.style.borderColor = "red";
        password1El.style.borderColor = "red !important"
        password2El.style.borderColor = "red !important"
        return
    }

    // if form is valid and passwordMatch

    if(isValid && passwordMatch)  {
        message.textContent = "Successfully registered"
        message.style.color = "green"
        messageContainer.style.borderColor = "green"
        
    }
    
}


  const storeFormData = () => {
     const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
     }  
        console.log(user);

    }
// Process Form Data

const processFormData = (event) => {
       event.preventDefault();
       //    console.log(event)


       validateForm()


       // submit data if valid
       if(isValid && passwordMatch) {
        storeFormData()
        form.reset()
       }
}


form.addEventListener('submit', processFormData); 