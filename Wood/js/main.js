window.onload = function () {
	let isFormOpen = false;
	const formOpenButton = document.querySelector('.contact__button');
	const formPopUp = document.querySelector('.form__wrapper');

	formOpenButton.onclick = function() {
		isFormOpen 

		? 	
			null
		: 

			openForm() , 
			document.querySelector('.container').style.filter = 'blur(5px)'
	}

	const openForm = function() {
		isFormOpen = true
		formPopUp.style.display = 'flex'
	}

	formPopUp.onclick = function() {
		isFormOpen = false
		formPopUp.style.display = 'none'
		document.querySelector('.container').style.filter = 'blur(0px)'
	}
}