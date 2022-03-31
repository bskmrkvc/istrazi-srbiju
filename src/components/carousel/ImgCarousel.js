import React from 'react'
import './ImgCarouselStyles.css'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import lazarevkanjon from '../../assets/lazarevkanjon.jpg'
import kozjikamen from '../../assets/kozjikamen.jpg'
import dunavkodgolubca from '../../assets/dunavkodgolubca.jpg'
import kraljevomostic from '../../assets/kraljevo.jpg'
import plantazapalic from '../../assets/plantazapalic.jpg'
import zlatiborskojezero from '../../assets/zlatiborskojezero.jpg'
import krupanjskovrelo from '../../assets/krupanjskovrelo.jpg'
import povlensataora from '../../assets/povlensataora.jpg'
import zaovinskojezero from '../../assets/zaovinskojezero.jpg'

function ImgCarousel() {
    return (
        <div name='carousel' className='container'>
            <h1>Naše razglednice.</h1>
            <Carousel className='carousel' showArrows={true} autoPlay={false} infiniteLoop={true} >
                <div>
                    <img src={lazarevkanjon} alt='/' />
                    <p className="legend">Lazarev Kanjon</p> 
                </div>
                <div>
                    <img src={krupanjskovrelo} alt='/' />
                    <p className="legend">Krupanjsko Vrelo</p>
                </div>
                <div>
                    <img src={kozjikamen} alt='/' />
                    <p className="legend">Kozji Kamen, Stara planina</p>
                </div>
                <div>
                    <img src={dunavkodgolubca} alt='/' />
                    <p className="legend">Dunav kod Golubca</p>
                </div>
                <div>
                    <img src={kraljevomostic} alt='/' />
                    <p className="legend">Mostić u Kraljevu</p>
                </div>
                <div>
                    <img src={plantazapalic} alt='/' />
                    <p className="legend">Plantaža između Palića i Subotice</p>
                </div>
                <div>
                    <img src={zlatiborskojezero} alt='/' />
                    <p className="legend">Zlatiborsko jezero</p>
                </div>
                <div>
                    <img src={povlensataora} alt='/' />
                    <p className="legend">Pogled na Povlen sa Taora</p>
                </div>
                <div>
                    <img src={zaovinskojezero} alt='/' />
                    <p className="legend">Zaovinsko jezero</p>
                </div>
            </Carousel>
        </div>


    )
}

export default ImgCarousel
