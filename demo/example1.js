document.addEventListener("DOMContentLoaded",async function(){
	const statusElm = document.querySelector("#example1 pre");
	if (window.WindowReferenceStore) {
		statusElm.innerHTML += `WindowReferenceStore found \n`;
	}
	const storeInstance = new window.WindowReferenceStore.default("example1store", "example1namespace");
	console.log('storeInstance', storeInstance)
	if (storeInstance) {
		statusElm.innerHTML += `Store 'example1store' initiated on namespace 'example1namespace' \n`;
	}
	
	storeInstance.set('example1key', example1callback);
	statusElm.innerHTML += `Stored 'example1key' in store 'example1store' \n`;

	if (storeInstance.has('example1key')) {
		statusElm.innerHTML += `Verified that store 'example1store' has reference 'example1key' \n`;
	}
	
	if (!storeInstance.has('nonExistingKey')) {
		statusElm.innerHTML += `Verified that store 'example1store' does NOT have reference 'nonExistingKey' \n`;
	}

	const example1ref = storeInstance.get('example1key');
	if (example1ref) {
		statusElm.innerHTML += `Got reference for 'example1key' in store 'example1store' \n`;
		if (example1ref()) {
			statusElm.innerHTML += `Reference function 'example1key' in store 'example1store has run successfully' \n`;
		}
	}
});

function example1callback() {
	console.log('Inside of example1callback')
	return true;
}