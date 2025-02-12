import { config } from "../Constants"
import _ from 'lodash'

export async function postRequestForContactMe(data) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(data)
    }
    const appId = process.env.REACT_APP_NAME
    var finalUrl = `${config.endpoint.email}?appId=${appId}`
    return await fetch(finalUrl, requestOptions)
}

export async function getRequestForPing() {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    }
    return await fetch(config.endpoint.ping, requestOptions)
}

export async function getRequestForUptime() {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    }
    return await fetch(config.endpoint.uptime, requestOptions)
}

export async function postRequestForHaveWeMetOnVal(data) {
    if (data === undefined) return
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };

    return await fetch(config.endpoint.valorant.have_we_met_on_val, requestOptions)
}

export async function getElliePasswordCheck(password) {
    if (_.isNil(password)) {
        return
    }
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    }
    return await fetch(`${config.endpoint.ellie.check}?password=${password}`, requestOptions)
}

export async function getElliePayload() {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    }
    return await fetch(`${config.endpoint.ellie.payload}`, requestOptions)
}