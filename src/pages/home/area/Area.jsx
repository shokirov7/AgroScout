import React from "react";
import "./Area.scss";
import Title from "../../../components/title/Title";
import SideTitle from "../../../components/sidetitle/SideTitle";
import map from '../../../assets/img/map.svg'

function Area() {
  const regions = [
    "Московская область",
    "Ростовская область",
    "Краснодарский край",
    "Ставропольский край",
    "Северная Осетия",
    "Кабардино-Балкария",
    "Пензенская область",
    "Белгородская область",
    "Саратовская область",
    "Воронежская область",
    "Волгоградская область",
    "Астраханская область",
    "Самарская область",
    "Липецкая область",
    "Орловская область",
    "Курская область",
    "Ульяновская область",
    "Карачаево-Черкессия",
    "Брянская область",
    "Республика Татарстан",
    "Тамбовская область",
    "Тульская область",
    "Калужская область",
    "Республика Крым",
  ];

  return (
    <section className="home_area">
      <Title title1="Где мы работаем" title2="Рeгионы присутствия" />
      <div className="area_holder">
        <ul>
          {regions.slice(0, Math.ceil(regions.length / 2)).map((item, i) => {
            return <li key={i}>{`${i + 1}. ${item}`}</li>;
          })}
        </ul>

        <ul>
          {regions.slice(Math.ceil(regions.length / 2)).map((item, i) => {
            return (
              <li key={i}>
                {`${i + 1 + Math.ceil(regions.length / 2)}. ${item}`}
              </li>
            );
          })}
        </ul>
      </div>
      <SideTitle text="карта россии"/>
      <img src={map} alt="" className="area_map"/>
    </section>
  );
}

export default Area;
