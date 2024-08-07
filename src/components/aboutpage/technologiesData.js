// images from https://devicon.dev
const technologies = [
    {
        name: 'Java',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    {
        name: 'React',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
        name: 'C',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
    },
    {
        name: 'C++',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
    },
    {
        name: 'C#',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
    },
    {
        name: 'Swift',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg'
    },
    {
        name: 'Python',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
        name: 'Git',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
        name: 'TypeScript',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    {
        name: 'JavaScript',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
        name: 'Linux',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'
    },
    {
        name: 'Spring Boot',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
    },
    {
        name: 'Bash',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg'
    },
    {
        name: 'Bootstrap',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
    },
    {
        name: 'Confluence',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg'
    },
    {
        name: 'CSS',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
        name: 'Firebase',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
    },
    {
        name: 'GitHub',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    {
        name: 'GitLab',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg'
    },
    {
        name: 'BitBucket',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg'
    },
    {
        name: 'HTML',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
        name: 'JetBrains',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetbrains/jetbrains-original.svg'
    },
    {
        name: 'Jenkins',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg'
    },
    {
        name: 'Jest',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg'
    },
    {
        name: 'Jira',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg'
    },
    {
        name: 'MaterialUI',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'
    },
    {
        name: 'MySQL',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    {
        name: 'Markdown',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg'
    },
    {
        name: 'NodeJS',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg'
    },
    {
        name: 'NPM',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg'
    },
    {
        name: 'SSH',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original-wordmark.svg'
    },
    {
        name: 'VSCode',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
    },
    {
        name: 'Xcode',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg'
    },
    {
        name: 'Vim',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg'
    },
    {
        name: 'Ubuntu',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg'
    },
    {
        name: 'Apache Kafka',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original-wordmark.svg'
    },
    {
        name: 'Oracle SQL',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg'
    },
    {
        name: 'AWS',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
    },
    {
        name: 'Hibernate',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg'
    },
    {
        name: 'PostgreSQL',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'
    },
    {
        name: 'Liquibase',
        srcUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/liquibase/liquibase-original.svg'
    }
]

function getRandomColor() {
    const colors = [
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning'
    ]
    return colors[Math.floor(Math.random() * colors.length)]
}

function splitListByNum(list, num) {
    const numElementsPerList = Math.floor(list.length / num)
    let result = []
    for (let i = 0; i < num; i++) {
        let currentList = []
        const startingIndex = i * numElementsPerList
        for (let j = startingIndex; j < Math.min(startingIndex + numElementsPerList, list.length); j++) {
            currentList.push(list[j])
        }
        result.push(currentList)
    }
    // get the leftovers
    const leftOverNum = list.length % num
    for (let i = list.length - leftOverNum, j = 0; i < list.length; i++, j++) {
        result[j].push(list[i])
    }
    return result
}

export function getTechnologies(splitBy = 1) {
    for (let i = technologies.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = technologies[i]
        technologies[i] = technologies[j]
        technologies[i].color = getRandomColor()
        technologies[j] = temp
        technologies[j].color = getRandomColor()
    }
    return splitListByNum(technologies, splitBy)
}