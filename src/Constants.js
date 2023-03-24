
const url = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/' : 'https://cors-anywhere.herokuapp.com/http://ec2-3-15-212-234.us-east-2.compute.amazonaws.com:8080/'

export const config = {
    endpoint: {
        email: `${url}api/email/send/`,
    }
}
