const form = document.querySelector('form'),
    field = form.querySelector('.mail'),
    emailInput = field.querySelector('.email');

    // Email validation
    function checkEmail(){
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if(!emailInput.value.match(emailPattern)){
            return field.classList.add("invalid");
            
        }
        field.classList.remove("invalid");
    };

    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        checkEmail();

         // Calling function on key up
      emailInput.addEventListener('keyup', checkEmail);
      window.location.assign("submit.html");
            // alert("Successfully subscribed");
    });

