import React from 'react';

import {fontColorForBackground} from '../../pages/Utils/colorUtils';

const TechnologyBubble = ({data}) => {

    return (
        <div className='child' style={{
            backgroundColor: `${data.color}`
        }}>
            <img src={data.srcUrl} alt='logo' style={{
                    width: 70,
                    marginBottom: 10,
                    backgroundColor: 'white',
                    borderRadius: 50
                }}
            />
            <h5 style={{
                color: `${fontColorForBackground(data.color)}`,
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                {data.name}
            </h5>

        </div>
    )
}

export default TechnologyBubble