
import './AboutPage.styles.css'
import CompanyBubbleUI from './CompanyBubbleUI'
import TechnologyBubbleUI from './TechnologiesBubbleUI'

const About = () => {

    return (
        <div>
            <h1>Places I've been to...</h1>
            <CompanyBubbleUI />
            <h1>Technologies I've used...</h1>
            <TechnologyBubbleUI />
        </div>
    )
}

export default About