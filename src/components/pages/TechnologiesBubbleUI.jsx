import React, {useState, useEffect} from 'react'

import BubbleUI from 'react-bubble-ui'
import TechnologyBubble from './TechnologyBubble'

import 'react-bubble-ui/dist/index.css';
import './bubble.styles.css'

import {technologies} from './technologiesData'

const TechnologyBubbleUI = () => {
    const [orderedTechnologies, setOrderedTechnologies] = useState(technologies)

    useEffect(() => {

        function getRandomColor() {
            const colors = [
                '#4fafc7',
                '#2a4d85',
                '#e99862',
                '#f4d3a8',
                '#90cdb7'
            ]
            return colors[Math.floor(Math.random() * colors.length)]
        }
        const orderedList = [...technologies]

        for (var i = orderedList.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1))
            var temp = orderedList[i]
            orderedList[i] = orderedList[j]
            orderedList[i].color = getRandomColor()
            orderedList[j] = temp
            orderedList[j].color = getRandomColor()
        }
        setOrderedTechnologies(orderedList)


        const bubbles = document.querySelector('._2MD0k');
        const dragspeed = 2;
        let isDown = false;
        let startX;
        let startY;
        let scrollLeft;
        let scrollTop;

        bubbles.addEventListener('mousedown', (e) => {
            isDown = true;
            bubbles.classList.add('active');
            startX = e.pageX - bubbles.offsetLeft;
            startY = e.pageY - bubbles.offsetTop;
            scrollLeft = bubbles.scrollLeft;
            scrollTop = bubbles.scrollTop;
        });
        bubbles.addEventListener('mouseleave', () => {
            isDown = false;
            bubbles.classList.remove('active');
        });
        bubbles.addEventListener('mouseup', () => {
            isDown = false;
            bubbles.classList.remove('active');
        });
        bubbles.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - bubbles.offsetLeft;
            const y = e.pageY - bubbles.offsetTop;
            const walk = (x - startX) * dragspeed;
            const topwalk = (y - startY) * dragspeed;
            bubbles.scrollLeft = scrollLeft - walk;
            bubbles.scrollTop = scrollTop - topwalk;
        });
    }, [])

    const options = {
		size: 180,
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

    const children = orderedTechnologies.map((data, i) => {
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