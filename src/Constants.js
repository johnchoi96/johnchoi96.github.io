const prod = {
    endpoint: {
        email: 'http://ec2-3-15-212-234.us-east-2.compute.amazonaws.com:8080/api/email/send',
    }
}

const dev = {
    endpoint: {
        email: 'http://localhost:8080/api/email/send'
    }
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod