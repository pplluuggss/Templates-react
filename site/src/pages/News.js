import "./../css/style.css";
import img1 from "../img/page2/img1.jpg";
import img2 from "../img/page2/img2.jpg";
import img3 from "../img/page2/img3.jpg";
import img4 from "../img/page2/img4.jpg";
import img5 from "../img/page2/img5.jpg";
import img6 from "../img/page2/img6.jpg";

const News = () => {
  return (
    <>
      <div className="main__text _container">Новости</div>
      <main className="page">
        <div className="page__main-block main-block">
          <div className="page__content _container">
            <div className="page__content__block_1">
              <div className="page__content__block">
                <div className="pc__block-border">
                  <div className="pc__block-img">
                    <img src={img1} alt="" />
                  </div>
                  <div className="pc__block-date">22 июля 2022 года</div>
                  <div className="pc__block-text">
                    Consequat consequat augue quis urna arcu scelerisque ac
                    montes, sed. Arcu orci quam lectus orci in.
                  </div>
                  <div className="pc__block-button">
                    <div className="pc__block-buutton-text">Подробнее</div>
                  </div>
                </div>
              </div>
              <div className="page__content__block">
                <div className="pc__block-border">
                  <div className="pc__block-img">
                    <img src={img2} alt="" />
                  </div>
                  <div className="pc__block-date">4 апреля 2022 года</div>
                  <div className="pc__block-text">
                    Suspendisse orci fermentum congue enim risus velit neque.
                    Mi.
                  </div>
                  <div className="pc__block-button _sc">
                    <div className="pc__block-buutton-text">Подробнее</div>
                  </div>
                </div>
              </div>
              <div className="page__content__block">
                <div className="pc__block-border">
                  <div className="pc__block-img">
                    <img src={img3} alt="" />
                  </div>
                  <div className="pc__block-date">30 ноября 2021 года</div>
                  <div className="pc__block-text">
                    Interdum proin amet nibh tortor sed vulputate mattis.
                    Ridiculus porta ipsum neque ut vel vitae et.
                  </div>
                  <div className="pc__block-button">
                    <div className="pc__block-buutton-text">Подробнее</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page__content__block_2">
              <div className="page__content__block">
                <div className="pc__block-border">
                  <div className="pc__block-img">
                    <img src={img4} alt="" />
                  </div>
                  <div className="pc__block-date">22 июля 2022 года</div>
                  <div className="pc__block-text">
                    Nisl tempor vel tempor adipiscing id nulla magnis ut
                    ultrices. Malesuada metus et in blandit.
                  </div>
                  <div className="pc__block-button">
                    <div className="pc__block-buutton-text">Подробнее</div>
                  </div>
                </div>
              </div>
              <div className="page__content__block">
                <div className="pc__block-border">
                  <div className="pc__block-img">
                    <img src={img5} alt="" />
                  </div>
                  <div className="pc__block-date">22 июля 2022 года</div>
                  <div className="pc__block-text">
                    Libero fermentum pretium sed orci nunc, sagittis mollis
                    lacus dolor. Tincidunt et enim sed ac faucibus.
                  </div>
                  <div className="pc__block-button">
                    <div className="pc__block-buutton-text">Подробнее</div>
                  </div>
                </div>
              </div>
              <div className="page__content__block">
                <div className="pc__block-border">
                  <div className="pc__block-img">
                    <img src={img6} alt="" />
                  </div>
                  <div className="pc__block-date">22 июля 2022 года</div>
                  <div className="pc__block-text">
                    Netus hendrerit tortor laoreet duis proin nulla faucibus
                    ultricies. Et urna fringilla nunc, metus nec.{" "}
                  </div>
                  <div className="pc__block-button">
                    <div className="pc__block-buutton-text">Подробнее</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default News;
