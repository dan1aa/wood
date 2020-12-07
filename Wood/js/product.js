window.onload = function () {
    const buttons = document.querySelectorAll('button[read-more]')


    buttons.forEach(button => {
        button.onclick = function() {
            localStorage.setItem('product-name', this.getAttribute('read-more'))
        }
    }) 
}