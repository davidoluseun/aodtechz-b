(function() {
    "use strict";

    //  Bootstrap form validation
    $(document).ready(function() {

        // Fetch all the forms to apply custom Bootstrap validation style to
        var forms = document.getElementsByClassName("form-validation");

        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener("submit", function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add("was-validated");
            }, false);
        });

        // Tooltip activation
        $('[data-toggle="tooltip"]').tooltip();

    }); // jQuery document ready function

})(); // Immediately Invoked Function Expression (IIFE)