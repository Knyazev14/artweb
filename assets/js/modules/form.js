async function ajaxForm(event) {
    event.preventDefault();
    let form = event.target

    let error = formValidate(form)
    form.classList.remove('_sended')

    console.log(error)

    let formData = new FormData(form)

    formData.append('url', window.location.href);

    if (error === 0) {
        form.classList.add('_sended')
        // let respose = await fetch('system/mail/sendmail.php', {
        //     method: 'POST',
        //     body: formData
        // })
        form.reset()
        if (respose.ok) {
            let result = await respose.json()
         
        } else {

        }
    } else {

    }





    function formValidate(form) {
        let error = 0;

        let formReq = document.querySelectorAll('._req')

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index]

            formRemoveError(input)

            if (input.classList.contains('emails')) {
                if (emailTest(input)) {
                    formAddError(input)
                    error++
                }
            } else if (input.classList.contains('name')) {
                if (!input.value) {
                    formAddError(input)
                    error++
                }
            } else if (input.getAttribute('type') === "checkbox" && input.checked === false) {
                formAddError(input)
                error++
            }
        }

        return error
    }

    function formAddError(input) {
        input.classList.add('_error')
        form.classList.add('_error')
    }
    function formRemoveError(input) {
        input.classList.remove('_error')
        form.classList.remove('_error')
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value)
    }
}

export { ajaxForm };