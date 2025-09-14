
import './page.css';
import { useParams , useNavigate } from 'react-router-dom';
import Data from '../DATA/data.json';
import Table from '../components/table';
import Nav from '../components/nav';
import Footer from '../components/footer';
import { getImageUrl } from '../utils/img-utils';

export default function View() {

    const { id } = useParams();
    const item = Data.find(product => product.id.toString() == id);
    const navigate = useNavigate();

    if (!item) {
        return <h1>Product Not found</h1>;
    }


    return (
        <>
            <div className="viewContainer">
            <Nav />
                <div className="viewC">
                    <div className="viewimg">
                    <img src={getImageUrl(item.img)}
                            alt={item.name} />
                    </div>
                    <div className="viewabout">
                        <div className="price">
                            <p style={{fontWeight:'bolder', fontSize:'1.5rem'}}>{item.name} {item.model}</p>
                            <p style={{ fontSize:'1.5rem'}}> &#8377; {item.price}  <s style={{ textDecoration: "line-through", color: 'grey', fontSize: "1.3rem", fontWeight: "lighter" }}>{`₹${item.originalPrice}`}</s></p>
                            <div className="orderButton">
                                <button type='button'onClick={() => navigate(`/order/${id}`)} style={{fontWeight:"bold"}} > Book Now </button>
                            </div>
                        </div>
                        <div className="specification">
                            <h2>Specification</h2>
                            <Table item={item} />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>

    )
}
