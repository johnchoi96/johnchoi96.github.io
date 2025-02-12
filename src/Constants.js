
export const url = process.env.NODE_ENV === 'development' ?
    'http://localhost:8080' :
    'https://web-service.johnchoi96.com'

export const config = {
    endpoint: {
        email: `${url}/api/email/contactme`,
        ping: `${url}/api/test/ping`,
        uptime: `${url}/api/test/uptime`,
        valorant: {
            have_we_met_on_val: 'https://hjj3730tu2.execute-api.us-east-2.amazonaws.com/prod/lookup'
        },

        ellie: {
            check: `${url}/api/ellie/check`,
            payload: `${url}/api/ellie/payload`
        }
    }
}
