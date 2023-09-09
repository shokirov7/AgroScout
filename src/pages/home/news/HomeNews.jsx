import React from "react";
import "./HomeNews.scss";
import { data } from "../../../components/newsdata/NewsData";
import Title from "../../../components/title/Title";
import { Link } from "react-router-dom";
function HomeNews() {
  return (
    <section className="home_news">
      <Title title1="Что у нас нового" title2="Новости" />
      <div className="home_news_holder">
        {data &&
          data.map((item, i) => {
            return (
              <div key={i} className="home_news_card">
                <div className="home_news_card_img">
                  <img src={item.img1} alt="" />
                  <div className="news_border news_border1"></div>
                  <div className="news_border news_border2"></div>
                </div>
                <h3 className="home_news_card_title">{item.minititle}</h3>
                <p className="home_news_card_desc">{item.text1.slice(0, 210)}..</p>
                <div className="home_news_button">
                    <Link to={`/news/${item.id}`}>Читать полностью</Link>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default HomeNews;
