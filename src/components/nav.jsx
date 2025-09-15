import './component.css';
import { getImageUrl } from '../utils/img-utils';

export default function NavBar() {
    return (
        <nav className="nav"> 

            <div className="logo">
                 <img src={getImageUrl('logo.jpg')}
                            alt="soundsbright"/>
            </div>

            <div className="name">
                <h1>Sounds Bright <span className='min'> For Music Lover</span> </h1>
                <p>Pre loved premium audio systems</p>
            </div>

        </nav>
    );

}
