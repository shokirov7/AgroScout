import React from "react";
import "./HomeService.scss";
import Button from "../../../components/button/Button";
import layout from "../../../assets/img/service_layout.png";

function HomeService() {
  return (
    <section className="home_service">
      <div className="home_service_content">
        <h1 className="home_service_title">Оказываем услуги!</h1>
        <p className="home_service_desc">
          Принимаем заявки по биологической и химической защите растений
          дронами, картографии и мониторингу.
        </p>
        <Button text="Оставить заявку" />
      </div>
      <img src={layout} alt="" className="home_service_layout" />
    </section>
  );
}

export default HomeService;
