import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

export default function Card({ product, live = false }) {
  const [state, setState] = useState({ image: 0 });
  const navigate = useNavigate();

  const onHover = () => {
    setState({ image: (state.image + 1) % product.images.length });
  };

  const handleClick = () => {
    live
      ? navigate(`/product/info/${product._id}`)
      : navigate(`/product/${product.name.replaceAll("/", "")}`);
  };

  return (
    <div
      className="product-card-container"
      onClick={handleClick}
      onMouseOver={onHover}
      onTouchStart={onHover}
    >
      <div
        className="product-card"
        style={{ backgroundImage: `url(${product.images[state.image]})` }}
      >
        <div className="quick-view">Quick View</div>
      </div>
      <p>{product.name}</p>
    </div>
  );
}
