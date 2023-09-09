import React from "react";
import "./Offer.scss";
import Title from "../../../components/title/Title";
import { data } from "../../../components/drones/DronesData";
import OfferCard from "../../../components/offerCard/OfferCard";
import bg from '../../../assets/img/offer_vector.svg'
import SideTitle from "../../../components/sidetitle/SideTitle";

function Offer() {
  const filteredDrones = data.filter((item) => item.offer === true);

  return (
    <section className="home_offer">
      <Title title1="Наши предложения" title2="Наша продукция" />
      <div className="offer_holder">
        {filteredDrones.map((item) => {
          return (
            <OfferCard key={item.id} img={item.img} name={item.name} brand={item.brand} model={item.model} price={item.price}/>
          );
        })}
      </div>
      <SideTitle text="топ продаж"/>
      <img src={bg} alt="" className="offer_bg" />
    </section>
  );
}

export default Offer;
