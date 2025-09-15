import './component.css';

export default function NavBar() {
    return (
        <nav className="nav"> 

            <div className="logo">
                <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="Logo" />
            </div>

            <div className="name">
                <h1>Sounds Bright <span className='min'> For Music Lover</span> </h1>
                <p>Pre loved premium audio systems</p>
            </div>

        </nav>
    );

}