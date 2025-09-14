import './component.css'
import { Link } from 'react-router-dom';
import { getImageUrl } from '../utils/img-utils';
export default function ProductCard({ item }) {
    return (
        <div className="cardcontainer">
            <Link to={`/view/${item.id}`} style={{ color: 'black', textDecoration: 'none' }}>
                <div className="card">
                    <div className="img">


                        <img src={getImageUrl(item.img)}
                            alt={item.name} />
                    </div>


                    <div className="detail">

                        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{item.name}</p>
                        <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{item.model}</p>
                        <p style={{ fontSize: '1.3rem', fontWeight: "bold" }}> <s style={{ textDecoration: "line-through", color: 'grey', fontSize: "1rem", fontWeight: "lighter" }}>{`₹${item.originalPrice}`}</s> {`₹${item.price}`}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}