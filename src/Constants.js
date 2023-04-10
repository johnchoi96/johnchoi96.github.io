
const url = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://ec2-18-217-126-86.us-east-2.compute.amazonaws.com:8080'

export const config = {
    endpoint: {
        email: `${url}/api/email/contactme`,
    }
}
