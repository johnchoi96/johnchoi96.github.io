import React from 'react';
import '../pages/aboutpage/AboutPage.styles.css'
import {fontColorForBackground} from '../pages/Utils/colorUtils';

const CompanyBubble = ({data, setClick}) => {
    const imagePath = '/assets/images/logo/'

    return (
        <div style={{
                backgroundColor: data.color + 'd0'
            }}
            className='child'
            onClick={() => {
                setClick(data);
            }}
        >
            <img src={imagePath + data.image} alt='logo' style={{
                width: 70,
                marginBottom: 10
                }}
            />
            <h5 style={{
                color: `${fontColorForBackground(data.color)}`,
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                {data.company}
            </h5>

        </div>
    )
}

export default CompanyBubble