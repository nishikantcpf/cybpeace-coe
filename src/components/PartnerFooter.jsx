import React from 'react'
import { CPFLogo } from '../assets/photos';
import "../scenes/about cyberpeace/AboutCyberPeace.css";
import {
    NitiAyog,
    EndViolence,
    GCN,
    ICANN,
    StalkWare,
    TaskForce
} from '../scenes/about cyberpeace/partners logos'

function PartnerFooter() {
    const bannerImages = [
        {
            title: 'niti-aayog',
            src: NitiAyog
        },
        {
            title: 'global-compact-network-india',
            src: GCN
        },
        {
            title: 'icann-at-large',
            src: ICANN
        },
        {
            title: 'ransomware-task-force',
            src: TaskForce
        },
        {
            title: 'coalition-against-stalkware',
            src: StalkWare
        },
        {
            title: 'end-violence-against-children',
            src: EndViolence
        }
    ]
    return (
        <div>
            <div className="cyberpeace">

                <div className='cyberpeace-partners'>
                    <h2>CyberPeace Community Partners</h2>
                    <div className='banner-container' >
                        <div className='banner'>
                            {bannerImages.map((image, index) => (
                                <img src={image.src} alt={image.title} key={index} />
                            ))}
                            {bannerImages.map((image, index) => (
                                <img src={image.src} alt={image.title} key={index} />
                            ))}
                        </div>
                    </div>
                </div>


                <div className='cyberpeace-more'>
                    <div>
                        <img src={CPFLogo} alt="CPF" />
                    </div>
                    <a href="https://www.cyberpeace.org/" target='_blank' rel="noreferrer">
                        Read More
                    </a>
                </div>
            </div>
        </div>
        // This is the First Part of the Footer Visible Across all the webpages. The Second part can be found in Footer.jsx
    )
}

export default PartnerFooter