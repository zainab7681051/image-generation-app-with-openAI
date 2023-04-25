function onSubmit(e) {
	e.preventDefault();

	document.querySelector('.msg')
		.textContent = '';
	document.querySelector('#image')
		.src = '';

	const prompt = document.querySelector('#prompt')
		.value;
	const size = document.querySelector('#size')
		.value;

	if (prompt === '') {
		alert('Please add some text');
		return;
	}

	generateImageRequest(prompt, size);
}

async function generateImageRequest(prompt, size) {
	try {
		showSpinner();

		const response = await fetch('/openai/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				prompt,
				size,
			}),
		});


		const data = await response.json();

		if (!response.ok) {
			removeSpinner();
			throw new Error(data.error);
		}


		const imageUrl = data.data;

		document.querySelector('#image')
			.src = imageUrl;

		removeSpinner();
	} catch (error) {
		document.querySelector('.msg')
			.textContent = error;
	}
}

function showSpinner() {
	document.querySelector('.spinner')
		.classList.add('show');
}

function removeSpinner() {
	document.querySelector('.spinner')
		.classList.remove('show');
}

document.querySelector('#image-form')
	.addEventListener('submit', onSubmit);