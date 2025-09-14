
import Product from '../components/productCard';

import './page.css';
import { useState, useEffect } from 'react';
import Data from '../DATA/data.json';
import Nav from '../components/nav';
import Footer from '../components/footer';
import Rolling from '../components/rolling';

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Data);
    }, []);

    return (
        <>
        <Nav />
        <Rolling />
        <div className="homeC">
            
            {data.map((item) => (
                <Product key={item.id} item={item} />
            ))}
            <Footer />
        </div>
        </>
    );
}