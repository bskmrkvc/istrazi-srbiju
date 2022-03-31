import React from 'react'
import './SearchStyles.css'

import Gold from '../../assets/gold.png'

function Search() {
    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h1>Raznovrsne destinacije, iskustva i nezaboravni momenti.</h1>
                    <h4>Srbija je zemlja prepuna prirodnih lepota, planina, reka, jezera, izvora hladne i tople mineralne vode, vodopada, šumskih potoka i mnoštvo drugih atrakcija. Nove ili već poznate destinacije u Srbiji na drugačiji način. Ukoliko ste dovoljno radoznali da istražite nove destinacije za vaš aktivni odmor, na pravom ste mestu.</h4>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Gold} alt="/" style={{ marginRight: '1rem' }} />
                            </div>
                            <br/>
                            <div>
                                
                                <h3>NAJKVALITETNIJE USLUGE</h3>
                                <p>Već godinama unazad pružamo vrhunsku i kvalitetnu uslugu, uverite se zašto je to tako.</p>
                                <br></br>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h2>Niko ne garantuje niti daje više od nas!</h2>
                                <p>Postanite naš član i ostvarite redovne popuste na svaki odmor koji poželite!</p>
                                <button href="#">POSTANITE ČLAN</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className="save">OSTVARITE DODATNIH 10% POPUSTA</h4>
                        <p className="timer">JOŠ SAMO 6 SATI!</p>
                        <p href="#"className="offers">POGLEDAJTE SVE AKTUELNE PONUDE</p>
                    </div>
                    <form>
                        <div className="input-wrap">
                            <label>Destinacija</label>
                            <select>
                                <option value="1">Tara</option>
                                <option value="1">Stara Planina</option>
                                <option value="1">Kopaonik</option>
                                <option value="1">Fruška Gora</option>
                                <option value="1">Drina</option>
                                <option value="1">Đavolja Varoš</option>
                                <option value="1">Mokra Gora</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Polazak</label>
                                <input type="date" />
                            </div>
                            <div className="input-wrap">
                                <label>Dolazak</label>
                                <input type="date" />
                            </div>
                        </div>
                        <button>DOSTUPNOST I OCENE</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Search
