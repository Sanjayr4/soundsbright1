import './component.css'

export default function Footer() {
    return (
        <div className="footerC">
            <div className="footer1">
                <h1>Social Media</h1>
                <div className="socialC">
                    <div><img src="../images/facebook.png" alt="" /> <a href="https://www.facebook.com/share/14RoHDtJE8/" target='_blank'>FaceBook</a></div>
                    <div> <img src="../images/instagram.png" alt="" /> <a href="https://www.instagram.com/sounds_bright?igsh=bG1oOTExZ29uOWsw" target='_blank'>Instagram</a> </div>
                    <div> <img src="../images/mail.png" alt="" /> <a href="mailto:soundsbrightformusiclovers@gmail.com" target='_blank'>Mail </a></div>
                </div>
            </div>
            <div className="footer2">
                <h1>Contact</h1>
                <div className="contactC">
                    <div>
                        <img src="../images/whatsapp.webp" alt="" /> +91 9043541865
                    </div>
                    <div>
                        <img src="../images/phone.png" alt="" /> +91 9043541865
                    </div>
                </div>
            </div>
            <div className="footer3">
                <h1>About Us</h1>
                <div className="aboutC">
                    <div>
                        <img src="../images/location.png" alt="" /> <a href="https://maps.app.goo.gl/fXPkcb1DdvKY2aCF7" target='_blank'>Location</a>
                    </div>
                </div>
            </div>
        </div>
    )
}