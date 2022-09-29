import React from 'react'

import BubbleUI from 'react-bubble-ui'
import TechnologyBubble from './TechnologyBubble'

import 'react-bubble-ui/dist/index.css';
import './bubble.styles.css'

import {getTechnologies} from '../pages/aboutpage/technologiesData'

const TechnologyBubbleUI = () => {

    const options = {
		size: 150,
		minSize: 20,
		gutter: 8,
		provideProps: true,
		numCols: 6,
		fringeWidth: 160,
		yRadius: 130,
		xRadius: 220,
		cornerRadius: 50,
		showGuides: false,
		compact: true,
		gravitation: 5
	}

    const children = getTechnologies().map((data, i) => {
        return (
            <TechnologyBubble
                data={data}
                key={i}
                className='child'
            />
        )
    })

    return (
        <div>
            <BubbleUI
                options={options}
                className='myBubbleUI'
            >
                {children}
            </BubbleUI>
        </div>

    )
}

export default TechnologyBubbleUI