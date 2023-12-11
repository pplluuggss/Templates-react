import "../../css/style.css";
import img1 from "../../img/page2/img1.jpg";

const News_card = () => {
  return (
    <div className="page__content__block">
      <div className="pc__block-border">
        <div className="pc__block-img">
          <img src={img1} alt="" />
        </div>
        <div className="pc__block-date">22 июля 2022 года</div>
        <div className="pc__block-text">
          Consequat consequat augue quis urna arcu scelerisque ac montes, sed.
          Arcu orci quam lectus orci in.
        </div>
        <div className="pc__block-button">
          <div className="pc__block-buutton-text">Подробнее</div>
        </div>
      </div>
    </div>
  );
};

export default News_card;
