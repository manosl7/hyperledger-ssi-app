

async function getConnections(port) {
	const response = await fetch(`http://localhost:${port}/connections`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
		// redirect: 'follow', // manual, *follow, error
		// referrerPolicy: 'no-referrer', // no-referrer, *client
		//body: JSON.stringify(data) // body data type must match "Content-Type" header
	});
	return await response.json(); // parses JSON response into native JavaScript objects
}

async function createInvitation(port, data = {}) {
	const response = await fetch(`http://localhost:${port}/connections/create-invitation`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		redirect: 'follow', // manual, *follow, error
		referrerPolicy: 'no-referrer', // no-referrer, *client
		//body: JSON.stringify(data) // body data type must match "Content-Type" header
	});
	return await response.json(); // parses JSON response into native JavaScript objects
}
async function acceptInvitation(port = '', data) {
	// console.log(data);
	const response = await fetch(`http://localhost:${port}/connections/receive-invitation`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		// redirect: 'follow', // manual, *follow, error
		// referrerPolicy: 'no-referrer', // no-referrer, *client
		body:  data // body data type must match "Content-Type" header
	});
	return await response.json(); // parses JSON response into native JavaScript objects
}

async function getCredentialDefinitions(port = '', data) {
	const response = await fetch(`http://localhost:${port}/credential-definitions/created`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
		// redirect: 'follow', // manual, *follow, error
		// referrerPolicy: 'no-referrer', // no-referrer, *client
		body: JSON.stringify(data) // body data type must match "Content-Type" header
	});
	return await response.json(); // parses JSON response into native JavaScript objects
}

async function getCredentials(port = '', data) {
	const response = await fetch(`http://localhost:${port}/credentials`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
		// redirect: 'follow', // manual, *follow, error
		// referrerPolicy: 'no-referrer', // no-referrer, *client
		body: JSON.stringify(data) // body data type must match "Content-Type" header
	});
	return await response.json(); // parses JSON response into native JavaScript objects
}

async function issueCredential(port = '', data) {
	// console.log(data);
	const response = await fetch(`http://localhost:${port}/issue-credential/send`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		// redirect: 'follow', // manual, *follow, error
		// referrerPolicy: 'no-referrer', // no-referrer, *client
		body: data // body data type must match "Content-Type" header
	});
	return await response.json(); // parses JSON response into native JavaScript objects
}
export {
	acceptInvitation,
	getConnections,
	createInvitation,
	getCredentialDefinitions,
	getCredentials,
	issueCredential
}