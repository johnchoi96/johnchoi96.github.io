import React from 'react'

import './AboutPage.styles.css'
import BubbleUI from 'react-bubble-ui';
import 'react-bubble-ui/dist/index.css';
import ChildComponent from './ChildComponent.jsx'

import {companies} from './aboutCareerData'


const About = () => {
    function handleClick(data) {
        // data object from careerData
        // display modal
        alert(data.company)
    }

    const options = {
		size: 200,
		minSize: 50,
		gutter: 10,
		provideProps: true,
		numCols: 4,
		fringeWidth: 200,
		yRadius: 130,
		xRadius: 170,
		cornerRadius: 50,
		showGuides: false,
		compact: true,
		gravitation: 10
	}

    const children = companies?.map((data, i) => {
        return (
          <ChildComponent
            data={data}
            key={i}
            className='child'
            setClick={handleClick}
          />
        );
      });

    return (
        <div>
            <div>
                <h1>
                    Places I've been to...
                </h1>
            </div>
            <div>
                <BubbleUI
                    options={options}
                    className='myBubbleUI'
                >
                    {children}
                </BubbleUI>
            </div>

        </div>

    )
}

export default About