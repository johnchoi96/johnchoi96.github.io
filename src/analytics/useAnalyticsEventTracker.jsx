import ReactGA from 'react-ga4'

export function sendPageview(page, title, hitType = 'pageview') {
    ReactGA.send({
        hitType: hitType,
        page: page,
        title: title
    })
}
