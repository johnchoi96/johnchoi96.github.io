// order matters: most recent position at top
export const companies = [
    {
        company: 'Apple Inc.',
        position: 'Software Engineer',
        location: 'Austin, TX',
        start: 'June 2025',
        end: 'Present',
        image: {
            path: 'apple.svg',
            width: '50%',
            marginTop: '0.55rem'
        },
        color: '#000000',
        descriptions: [
            'Software Engineer in Apple IS&T group',
            "IS&T supports both customer-facing and internal platforms — from apple.com and Apple Retail systems, to tools used by AppleCare, People teams, and enterprise-wide data and identity platforms."
        ]
    },
    {
        company: 'JPMorganChase',
        position: 'Software Engineer II',
        location: 'Columbus, OH',
        start: 'Jan 2025',
        end: 'Present',
        image: {
            path: 'jpmc.svg',
            width: '100%',
            marginTop: '0.0rem'
        },
        color: '#117aca',
        descriptions: [
            "Developed an enterprise-level full-stack application for tracking Legal Entities and JPMC's legal permissibility to place trades, utilizing Spring Boot, Hibernate, React, Oracle DB, and microservices architecture",
            'Gained hands-on experience across all stages of the software development lifecycle, including planning, building, testing, and deployment',
            'Collaborated effectively with developers, product managers, and end-users to deliver high-quality application'

        ]
    },
    {
        company: 'JPMorganChase',
        position: 'Software Engineer I',
        location: 'Columbus, OH',
        start: 'July 2022',
        end: 'Jan 2025',
        image: {
            path: 'jpmc.svg',
            width: '100%',
            marginTop: '0.0rem'
        },
        color: '#117aca',
        descriptions: [
            'Architecture & Engineering, Core Dev Engineering (2022) Data Verification Engineering (2023)',
            'Assisted in developing a REST API backend application using Java, Spring Boot, MyBatis, and Oracle DB for the Core Development Engineering team. Utilized Apache Kafka to implement event based microservice architecture and process database transactions.',
            'Assisted in developing a full stack application by utilizing React.js, Bootstrap, and Spring Boot.',
            "Developed a test generation tool that copies all or a part of the customer's production data from their DB to be used as testing data. The customer would submit a generation request by submitting a REST request with a body to the endpoint hosted by AWS API Gateway, which gets stored in the AWS DynamoDB after triggering an AWS Lambda function to process the request."
        ]
    },
    {
        company: 'Ohio State College of Engineering',
        position: 'CSE Teaching Assistant',
        location: 'Columbus, OH',
        start: 'Aug 2021',
        end: 'May 2022',
        image: {
            path: 'ohio-state-coe.png',
            width: '70%',
            marginTop: '0.5rem'
        },
        color: '#ba0c2f',
        descriptions: [
            'TA/Grader for CSE1223, Intro to Computer Programming in Java.'
        ]
    },
    {
        company: 'Apple Inc.',
        position: 'Software Engineering Intern',
        location: 'Cupertino, CA (Remote)',
        start: 'May 2021',
        end: 'Aug 2021',
        image: {
            path: 'apple.svg',
            width: '50%',
            marginTop: '0.55rem'
        },
        color: '#000000',
        descriptions: [
            'SWE intern in Internet Technologies Team as a Comm Application Automation intern.',
            'Assisted the Internet Technologies team with the testing and production of the Apple Mail app on macOS platform. This included writing automation tools and code for testing the app, diagnosis of bugs found, and filing a bug report. Wrote tools with the internal automation framework in Python and Swift (XCTest).'
        ]
    },
    {
        company: 'NASA',
        position: 'Undergraduate Research Software Engineer',
        location: 'College Park, MD (Remote)',
        start: 'Oct 2018',
        end: 'May 2021',
        image: {
            path: 'nasa.svg',
            width: '80%',
            marginTop: '0.5rem'
        },
        color: '#0b3d91',
        descriptions: [
            'Undergraduate assistant under the supervision of Dr. DK Kang sponsored by NASA THP project titled SWE Retrieval Performance Using Active and Passive Microwave Observations”',
            'Duties included developing and maintaining applications mainly written in C, C++, MATLAB, and Python.',
            'Co-authored an abstract titled “Physically Based Hydrology Model in a Snowmelt-Dominant Watershed” for 2020 AGU Fall Meeting.'
        ]
    },
    {
        company: 'SAS Software Inc.',
        position: 'iOS R&D Technical Intern',
        location: 'Cary, NC',
        start: 'May 2020',
        end: 'Aug 2020',
        image: {
            path: 'sas.svg',
            width: '80%',
            marginTop: '1.1rem'
        },
        color: '#004C90',
        descriptions: [
            'Responsible for Data and Analytics Visualization on the iOS platform.',
            'Assisted the iOS software engineering team with the development and production of the SAS Visual Analytics App. This includes writing automation tools and code for testing the app, diagnosis of bugs found and developing fixes in the code. The internship also involved prototyping and developing solutions on the mobile platform for a research topic in Analytics, Data Visualization and Mobile Computing.'
        ]
    },
    {
        company: 'Lenovo',
        position: 'Software Development Intern',
        location: 'Morrisville, NC',
        start: 'May 2019',
        end: 'Jan 2020',
        image: {
            path: 'lenovo.svg',
            width: '80%',
            marginTop: '1.2rem'
        },
        color: '#e2231a',
        descriptions: [
            'Responsible for developing software solution that automates a significant number of repetitive tasks performed by the employees.',
            'Utilized Java with JavaFX framework and used multithreading to perform multiple GET REST calls simultaneously.'
        ]
    },
    {
        company: 'NC State Power Sound of the South',
        position: 'Drumline - Snare',
        location: 'Raleigh, NC',
        start: 'Aug 2017',
        end: 'Nov 2017',
        image: {
            path: 'ncsu.svg',
            width: '50%',
            marginTop: '0.68rem'
        },
        color: '#CC0000',
        descriptions: [
            "1 of 8 snare drummers selected for the NC State's 2017 football season"
        ]
    }
]
