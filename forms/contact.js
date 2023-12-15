const scriptURL = 'https://script.google.com/macros/s/AKfycbw_X5SDjnPAWmcvsM4zjPntYg_wbPYxW9ddGnskxvGwVdBAG2KQ_WL6cpb9pO5sAJcUbw/exec'
    const form = document.forms['submit-to-google-sheet']
    const message = document.getElementById("msg")
  
    
    
        form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Your message has been sent. Thank you!"
            setTimeout(function(){
                msg.innerHTML = " "
            }, 3000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })