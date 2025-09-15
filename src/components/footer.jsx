import './component.css'
import { getImageUrl } from '../utils/img-utils';
export default function Footer() {
    return (
        <div className="footerC">
            <div className="footer1">
                <h1>Social Media</h1>
                <div className="socialC">
                    <div> <img src={getImageUrl('facebook.png')}
                            alt="soundsbright"/> <a href="https://www.facebook.com/share/14RoHDtJE8/" target='_blank'>FaceBook</a></div>
                    <div>  <img src={getImageUrl('instagram.png')}
                            alt="soundsbright"/> <a href="https://www.instagram.com/sounds_bright?igsh=bG1oOTExZ29uOWsw" target='_blank'>Instagram</a> </div>
                    <div>  <img src={getImageUrl('mail.png')}
                            alt="soundsbright"/> <a href="mailto:soundsbrightformusiclovers@gmail.com" target='_blank'>Mail </a></div>
                </div>
            </div>
            <div className="footer2">
                <h1>Contact</h1>
                <div className="contactC">
                    <div>
                         <img src={getImageUrl('phone.png')}
                            alt="soundsbright"/>+91 9043541865
                    </div>
                    <div>
                        <img src={getImageUrl('whatsapp.webp')}
                            alt="soundsbright"/> +91 9043541865
                    </div>
                </div>
            </div>
            <div className="footer3">
                <h1>About Us</h1>
                <div className="aboutC">
                    <div>
                         <img src={getImageUrl('location.png')}
                            alt="soundsbright"/> <a href="https://maps.app.goo.gl/fXPkcb1DdvKY2aCF7" target='_blank'>Location</a>
                    </div>
                </div>
            </div>
        </div>
    )
}