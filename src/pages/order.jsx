import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Data from "../DATA/data.json";
import axios from "axios";
import { toast } from "react-toastify";
import { getImageUrl } from "../utils/img-utils";

export default function Order() {
    const { id } = useParams();
    const item = Data.find(product => product.id.toString() == id);

    const [order, setOrder] = useState({
        name: "",
        email: "",
        phone: "",
        state: "",
        city: "",
        district: "",
        address: "",
        pincode: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder((prevOrder) => ({
            ...prevOrder,
            [name]: value,
        }));
    };

    const submitOrder = async (e) => {
        e.preventDefault();
        try {
            const productName = `${item.name} ${item.model} ₹${item.price}`;

            await axios.post("http://localhost:5001/api/user/submitOrder", {
                ...order,
                product: productName,
            });

            toast.success("✅ Order placed successfully!");
        } catch (error) {
            console.error("Error during order submission:", error);
            toast.error("❌ Failed to place order. Please try again.");
        }
    };

    return (
        <>
            <div className="orderContainer">
                <div className="orderform">
                    <form onSubmit={submitOrder}>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={order.name}
                            onChange={handleChange}
                            required
                            autoComplete="name"
                        />

                        <label htmlFor="email">E-mail</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={order.email}
                            onChange={handleChange}
                            required
                            autoComplete="email"
                        />

                        <label htmlFor="phone">Phone No</label>
                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            value={order.phone}
                            onChange={handleChange}
                            required
                            autoComplete="tel"
                        />

                        <label htmlFor="state">State</label>
                        <select
                            id="state"
                            name="state"
                            value={order.state}
                            onChange={handleChange}
                            required
                            autoComplete="address-level1"
                        >
                            <option value="">Select State</option>
                            <option value="Andhra Pradesh">Andhra Pradesh</option>
                            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                            <option value="Assam">Assam</option>
                            <option value="Bihar">Bihar</option>
                            <option value="Chhattisgarh">Chhattisgarh</option>
                            <option value="Goa">Goa</option>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Haryana">Haryana</option>
                            <option value="Himachal Pradesh">Himachal Pradesh</option>
                            <option value="Jharkhand">Jharkhand</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Kerala">Kerala</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Manipur">Manipur</option>
                            <option value="Meghalaya">Meghalaya</option>
                            <option value="Mizoram">Mizoram</option>
                            <option value="Nagaland">Nagaland</option>
                            <option value="Odisha">Odisha</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Rajasthan">Rajasthan</option>
                            <option value="Sikkim">Sikkim</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Telangana">Telangana</option>
                            <option value="Tripura">Tripura</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="Uttarakhand">Uttarakhand</option>
                            <option value="West Bengal">West Bengal</option>
                        </select>

                        <label htmlFor="city">City</label>
                        <input
                            id="city"
                            type="text"
                            name="city"
                            value={order.city}
                            onChange={handleChange}
                            required
                            autoComplete="address-level2"
                        />

                        <label htmlFor="district">District</label>
                        <input
                            id="district"
                            type="text"
                            name="district"
                            value={order.district}
                            onChange={handleChange}
                            required
                            autoComplete="address-level2"
                        />

                        <label htmlFor="address">Address</label>
                        <textarea
                            id="address"
                            name="address"
                            value={order.address}
                            onChange={handleChange}
                            required
                            autoComplete="street-address"
                        ></textarea>

                        <label htmlFor="pincode">PinCode</label>
                        <input
                            id="pincode"
                            type="number"
                            name="pincode"
                            value={order.pincode}
                            onChange={handleChange}
                            required
                            autoComplete="postal-code"
                        />

                        <p style={{ fontSize: '1.2rem' }}>
                            Selected product: {`${item.name} ${item.model} ₹${item.price}`}
                        </p>

                        <img
                            style={{ width: '100%' }}
                            src={getImageUrl(item.img)}
                            alt={item.name}
                        />

                        <button type="submit">Confirm Order</button>
                    </form>
                </div>
            </div>
        </>
    );
}