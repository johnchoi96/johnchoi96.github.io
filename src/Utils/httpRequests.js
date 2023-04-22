
export async function postRequest(url, data) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(data)
    }

    return await fetch(url, requestOptions)
}

export async function getRequest(url, params) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    }
    const appId = process.env.REACT_APP_NAME
    var finalUrl = `${url}?appId=${appId}&subject=${params.subject}&body=${params.body}`
    if (params.email && params.email.length !== 0) {
        finalUrl += `&email=${params.email}`
    }
    return await fetch(finalUrl, requestOptions)
}
