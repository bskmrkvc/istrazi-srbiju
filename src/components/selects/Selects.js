import React from 'react'
import './SelectsStyles.css'

import raftingDrinom from '../../assets/raftingdrinom.jpg'
import kanjonRace from '../../assets/kanjonrace.jpg'
import tara from '../../assets/tara.jpg'
import djavoljavaros from '../../assets/djavoljavaros.jpg'
import mokragora from '../../assets/mokragora.jpg'
import tupavica from '../../assets/tupavica.jpg'
import fruskagora from '../../assets/fruskagora.jpg'
import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
                <h1 className = "izleti">Izleti.</h1>
                <SelectsImg bgImg={raftingDrinom} text='Rafting Drinom.' />
                <SelectsImg bgImg={tupavica} text='Vodopadi Stare planine.' />
                <SelectsImg bgImg={tara} text='Tara.' />
                <SelectsImg bgImg={mokragora} text='Mokra Gora.' />
                <SelectsImg bgImg={kanjonRace} text='Kanjon Rače.' />
                <SelectsImg bgImg={fruskagora} text='Fruška Gora.' />
                <SelectsImg bgImg={djavoljavaros} text='Đavolja Varoš' />
                <a href="#" onclick="return false;" className = "josizleta">Još izleta..</a>
            </div>

        </div>
    )
}

export default Selects
