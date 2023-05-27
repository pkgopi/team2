import React, { useState, useEffect } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const ProductCard = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const slideImage = () => {
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    document.querySelector('.img-showcase').style.transform = `translateX(${-selectedImage * displayWidth}px)`;
  };

  useEffect(() => {
    const imgBtns = document.querySelectorAll('.img-select a');

    imgBtns.forEach((imgItem, index) => {
      imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        setSelectedImage(index);
      });
    });

    const resizeListener = () => {
      slideImage();
    };

    window.addEventListener('resize', resizeListener);

    // Cleanup: remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, [selectedImage]);

  return (
    <div className="card-wrapper">
      <div className="card">
        {/* card left */}
        <div className="product-imgs">
          <div className="img-display">
            <div className="img-showcase" style={{ transform: `translateX(${-selectedImage * 100}%)` }}>
              <img src='shoes_images/shoe_1.jpg' alt="shoe1" />
              <img src="shoes_images/shoe_2.jpg" alt="shoe2" />
              <img src="shoes_images/shoe_3.jpg" alt="shoe3" />
              <img src="shoes_images/shoe_4.jpg" alt="shoe4" />
            </div>
          </div>
          <div className="img-select">
            <div className="img-item">
              <a href="#" onClick={() => setSelectedImage(0)}>
                <img src="shoes_images/shoe_1.jpg" alt="shoe1" />
              </a>
            </div>
            <div className="img-item">
              <a href="#" onClick={() => setSelectedImage(1)}>
                <img src="shoes_images/shoe_2.jpg" alt="shoe2" />
              </a>
            </div>
            <div className="img-item">
              <a href="#" onClick={() => setSelectedImage(2)}>
                <img src="shoes_images/shoe_3.jpg" alt="shoe3" />
              </a>
            </div>
            <div className="img-item">
              <a href="#" onClick={() => setSelectedImage(3)}>
                <img src="shoes_images/shoe_4.jpg" alt="shoe4" />
              </a>
            </div>
          </div>
        </div>
        {/* card right */}
        <div className="product-content">
          <h2 className="product-title">nike shoes</h2>
          <a href="#" className="product-link">visit nike store</a>
          <div className="product-rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <span>4.7(21)</span>
          </div>

          <div className="product-price">
            <p className="last-price">Old Price: <span>$257.00</span></p>
            <p className="new-price">New Price: <span>$249.00 (5%)</span></p>
          </div>

          <div className="product-detail">
            <h2>about this item: </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
            <ul>
              <li>Color: <span>Black</span></li>
              <li>Available: <span>in stock</span></li>
              <li>Category: <span>Shoes</span></li>
              <li>Shipping Area: <span>All over the world</span></li>
              <li>Shipping Fee: <span>Free</span></li>
            </ul>
          </div>

          <div className="purchase-info">
            <input type="number" min="0" value="1" />
            <button type="button" className="btn">
              Add to Cart <i className="fas fa-shopping-cart"></i>
            </button>
            <button type="button" className="btn">Compare</button>
          </div>

          <div className="social-links">
            <p>Share At: </p>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
