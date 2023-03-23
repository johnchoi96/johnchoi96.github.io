
export async function postRequest(url, data) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(data)
    }

    await fetch(url, requestOptions)
        .then((response) => response.json())
}
