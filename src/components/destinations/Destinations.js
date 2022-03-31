import React from 'react'
import './DestinationsStyles.css'

import sarplanina from '../../assets/sarplanina.jpg'
import uvac from '../../assets/uvac.jpg'
import drina from '../../assets/drina.jpg'
import zagubica from '../../assets/zagubica.jpg'
import crnivrh from '../../assets/crnivrh.jpg'

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>Najlepša mesta Srbije i Balkana</h1>
                <p>Sve avanture i priroda na jednom mestu.</p>
                <div className="img-container">
                    <img className='span-3 image-grid-row-2' src={sarplanina} alt="/"/>
                    <img src={uvac} alt="/"/>
                    <img src={drina} alt="/"/>
                    <img src={zagubica} alt="/"/>
                    <img src={crnivrh} alt="/"/>
                </div>
            </div>
        </div>
    )
}

export default Destinations
