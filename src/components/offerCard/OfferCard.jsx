import React from "react";
import "./OfferCard.scss";
import Button from "../button/Button";

function OfferCard({ img, name, brand, model, price }) {
  return (
    <div className="offer_card">
      <span></span>
      <div className="drone_info">
        <div className="drone_img">
          <img src={img} alt="" />
        </div>
        <div className="drone_text">
          <h3 className="drone_name">{name}</h3>
          <h4 className="drone_brand">Бренд: {brand}</h4>
          <h4 className="drone_model">Модель: {model}</h4>
          <h4 className="drone_price">${price}</h4>
          <Button text="Добавить в корзину" />
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
