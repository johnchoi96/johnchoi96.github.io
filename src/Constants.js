
const url = process.env.NODE_ENV === 'development' ?
    'http://localhost:8080' :
    'https://ec2-3-130-128-69.us-east-2.compute.amazonaws.com:8080'

export const config = {
    endpoint: {
        email: `${url}/api/email/contactme`,
        ping: `${url}/api/test/ping`,
        uptime: `${url}/api/test/uptime`
    }
}
