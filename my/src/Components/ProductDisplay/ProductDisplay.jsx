import React, { useContext, useState } from 'react';
import '../ProductDisplay/ProductDisplay.css';
import star_icon from "../Asset/star_icon.png";
import star_dull_icon from "../Asset/star_dull_icon.png";
import '../DarkMode/Dark.css';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = ({ product }) => {
    const [selectedSize, setSelectedSize] = useState(null);
    const [zoom, setZoom] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const { addToCart } = useContext(ShopContext);

    return (
        <div className='productdisplay'>
            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content">
                        <img src={product.image} alt="" />
                    </div>
                </div>
            )}

            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className={`productdisplay-img ${zoom ? 'zoom' : ''}`}>
                    <img
                        className='productdisplay-main-img'
                        src={product.image}
                        alt=""
                        onClick={openModal}
                        onMouseEnter={() => setZoom(true)}
                        onMouseLeave={() => setZoom(false)}
                    />
                </div>
            </div>

            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>

                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">₹ {product.old_price}</div>
                    <div className="productdisplay-right-price-new">₹ {product.new_price}</div>
                </div>

                <div className="productdisplay-right-description">
                    High-quality product with premium design and fabric.
                </div>

                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-size-options">
                        {["S", "M", "L", "XL", "XXL"].map((size) => (
                            <div
                                key={size}
                                className={selectedSize === size ? "selected" : ""}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>

                <button type='button' onClick={() => addToCart(product.id)}>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category :</span> Krishna Dress</p>
                <p className="productdisplay-right-category"><span>Tags :</span> Modern, Latest</p>
            </div>
        </div>
    );
};

export default ProductDisplay;
