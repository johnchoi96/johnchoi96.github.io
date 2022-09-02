import React from 'react';
import './AboutPage.styles.css'

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
                color: 'white',
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                {data.company}
            </h5>

        </div>
    )
}

export default CompanyBubble