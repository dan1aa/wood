	let isFormOpen = false;
	const formOpenButton = document.querySelector('.contact__button');
	const formPopUp = document.querySelector('.form__wrapper');
	const cross = document.querySelector('.form__cross');
	const cancelMobile = document.querySelector('.cancel');

	formOpenButton.onclick = function() {
		isFormOpen 

		? 	
			null
		: 

			openForm() , 
			document.querySelector('.container').style.filter = 'blur(5px)'
	}

	const openForm = () => {
		isFormOpen = true
		formPopUp.style.display = 'flex'
	}
	const closeForm = () => {
		isFormOpen = false
		formPopUp.style.display = 'none'
		document.querySelector('.container').style.filter = 'blur(0px)'
	}

	cross.onclick = e => {
		e.preventDefault();
		closeForm();
	}
	cancelMobile.onclick = e => {
		e.preventDefault();
		closeForm();
	}
