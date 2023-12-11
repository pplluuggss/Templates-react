import "./../css/style.css";
import play from "./../img/page1/play.svg";
import share from "./../img/page1/share.svg";
import club from "./../img/page1/club__img.jpg";
import left from "./../img/page1/arrow__left.svg";
import right from "./../img/page1/arrow__right.svg";
import trainer1 from "./../img/page1/trainer1.jpg";
import trainer2 from "./../img/page1/trainer2.jpg";
import trainer3 from "./../img/page1/trainer3.jpg";
import trainer4 from "./../img/page1/trainer4.jpg";
import trainer5 from "./../img/page1/trainer5.jpg";
import trainer6 from "./../img/page1/trainer6.jpg";
import bleft from "./../img/page1/arrow-big__left.svg";

const Home = () => {
  return (
    <main className="page">
      <div className="page__main-block main-block">
        <div className="main-block__container _container">
          <div className="main-block__body">
            <h1 className="main-block__title">
              Петербургский
              <br />
              теннисный клуб
              <br />
              имени М.А. Пасечникова
            </h1>
            <div className="main-block__video">
              <a href="/" className="main-block__radius _r-white">
                <div className="main-block__radius _r-purple">
                  <img src={play} alt="" />
                </div>
              </a>
              <div className="main-block__text">
                Посмотрите видео о нашем клубе
              </div>
            </div>
          </div>
          <div className="main-cards__block">
            <a href="/" className="main-card">
              <div className="main-card__text-block">
                <div className="main-card__title">Услуги</div>
                <div className="main-card__text">Аренда корта</div>
              </div>
              <div className="main-card__share">
                <img src={share} alt="" />
              </div>
            </a>
            <a href="/" className="main-card">
              <div className="main-card__text-block">
                <div className="main-card__title">Услуги</div>
                <div className="main-card__text">Детский теннис</div>
              </div>
              <div className="main-card__share">
                <img src={share} alt="" />
              </div>
            </a>
            <a href="/" className="main-card">
              <div className="main-card__text-block">
                <div className="main-card__title">Услуги</div>
                <div className="main-card__text">Сборы команд</div>
              </div>
              <div className="main-card__share">
                <img src={share} alt="" />
              </div>
            </a>
            <a href="/" className="main-card">
              <div className="main-card__text-block">
                <div className="main-card__title">Турниры</div>
                <div className="main-card__text">Расписание</div>
              </div>
              <div className="main-card__share">
                <img src={share} alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="page-image__block">
        <div className="page-image__block__block _container">
          <a href="/" className="image__block-border">
            <div className="image__block1">
              <div className="image__block-text">
                5 летних
                <br />
                грунтовых кортов
              </div>
            </div>
          </a>
          <a href="/" className="image__block-border">
            <div className="image__block2">
              <div className="image__block-text">
                Зал с покрытием “Искусственная трава”
              </div>
            </div>
          </a>
          <a href="/" className="image__block-border">
            <div className="image__block3">
              <div className="image__block-text">
                Зал с покрытием
                <br />
                “Хард”
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="page-info">
        <div className="page-info__block _container">
          <div className="info__block-image">
            <img src={club} alt="" />
          </div>
          <div className="info__block-block">
            <div className="info__block-blocktext">
              <div className="info__block-text1">
                <div className="block-text1__title">Спортивный клуб</div>
                <div className="block-text1__text">
                  <p>
                    Imperdiet lorem ipsum, pulvinar aliquet sit ultricies in sit
                    turpis. Ultricies erat pretium risus quam tincidunt non
                    viverra porttitor. Sollicitudin enim nunc in nisi donec vel.
                    Blandit mauris vitae amet aliquet ultrices mauris
                    pellentesque. Non ipsum commodo, sit mi sit netus aenean
                    nisl. Donec sit pellentesque enim, vestibulum.
                  </p>
                  <br />
                  <p>
                    Condimentum hac adipiscing purus in augue nisi. Convallis ut
                    nisi.
                  </p>
                </div>
              </div>
              <div className="info__block-text2">
                <div className="block-text2__title">
                  Ornare orci ut dictum nulla fames.{" "}
                </div>
                <div className="block-text2__text">
                  <ul className="block-text2__list">
                    <li className="block-text2__item">
                      <div className="block-text2__item-text">
                        Euismod diam, vel venenatis bibendum sodales sem
                        hendrerit vulputate sagittis.
                      </div>
                    </li>
                    <li className="block-text2__item">
                      <div className="block-text2__item-text">
                        Nisl senectus sed malesuada donec. Interdum malesuada
                        bibendum imperdiet elementum auctor vitae in.
                      </div>
                    </li>
                    <li className="block-text2__item">
                      <div className="block-text2__item-text">
                        Quam purus ornare dictum pharetra. Sed viverra tellus
                        sollicitudin urna, sagittis.
                      </div>
                    </li>
                    <li className="block-text2__item">
                      <div className="block-text2__item-text">
                        Scelerisque urna senectus commodo, nam. Donec nibh
                        tempus imperdiet nisi, tincidunt mus egestas nisl
                        nullam.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-list">
        <div className="page-list__container _container">
          <div className="page-list__title">
            <div className="page-list__title-text">Тренерский состав</div>
            <div className="page-list__title-img">
              <a href="/" className="title-img__item">
                <img src={left} alt="" />
              </a>
              <a href="/" className="title-img__item">
                <img src={right} alt="" />
              </a>
            </div>
          </div>
          <div className="page-list__content">
            <div className="content-block">
              <div className="content-block__border">
                <img src={trainer1} alt="" />
              </div>
              <div className="content-block__title">
                Pulvinar
                <br />
                aliquam
              </div>
              <div className="content-block__text">
                Arcu elit massa amet turpis vel consequat pellentesque sit.
              </div>
            </div>
            <div className="content-block">
              <div className="content-block__border">
                <img src={trainer2} alt="" />
              </div>
              <div className="content-block__title">
                Pretium
                <br />
                odio
              </div>
              <div className="content-block__text">
                Bibendum aliquam volutpat nisl a duis in nisi. In sed commodo
                lorem morbi quis.{" "}
              </div>
            </div>
            <div className="content-block">
              <div className="content-block__border">
                <img src={trainer3} alt="" />
              </div>
              <div className="content-block__title">
                Aliquet
                <br />
                consectetur
              </div>
              <div className="content-block__text">
                Id sapien sed nibh fermentum massa posuere ipsum. Diam in.
              </div>
            </div>
            <div className="content-block">
              <div className="content-block__border">
                <img src={trainer4} alt="" />
              </div>
              <div className="content-block__title">
                Blandit
                <br />
                augue
              </div>
              <div className="content-block__text">
                Scelerisque accumsan pretium justo, vitae elit. Dolor semper
                morbi sit auctor vel diam eros.
              </div>
            </div>
            <div className="content-block">
              <div className="content-block__border">
                <img src={trainer5} alt="" />
              </div>
              <div className="content-block__title">
                Lorem
                <br />
                lacus
              </div>
              <div className="content-block__text">
                Adipiscing amet, viverra dignissim egestas. Sed nibh egestas
                venenatis faucibus.{" "}
              </div>
            </div>
            <div className="content-block">
              <div className="content-block__border">
                <img src={trainer6} alt="" />
              </div>
              <div className="content-block__title">
                Sed
                <br />
                erat
              </div>
              <div className="content-block__text">
                Quis ullamcorper pretium lacus risus tellus dolor etiam.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-memo">
        <div className="page-memo__container _container">
          <div className="memo1">
            <div className="memo1__title">Цены и абонементы</div>
            <div className="memo1__content">
              <a href="/" className="block-child">
                <div className="child-text">Зимний сезон 2021-2022</div>
                <div className="child-arrow">
                  <img src={bleft} alt="" />
                </div>
              </a>
              <a href="/" className="block-child">
                <div className="child-text">Абонементы</div>
                <div className="child-arrow">
                  <img src={bleft} alt="" />
                </div>
              </a>
              <a href="/" className="block-child">
                <div className="child-text">Скидки</div>
                <div className="child-arrow">
                  <img src={bleft} alt="" />
                </div>
              </a>
              <a href="/" className="block-child">
                <div className="child-text">Дополнительные услуги</div>
                <div className="child-arrow">
                  <img src={bleft} alt="" />
                </div>
              </a>
            </div>
          </div>
          <div className="memo2">
            <div className="memo2__title">
              <div className="memo2__title1">Услуги</div>
              <div className="memo2__title-imgblock">
                <a href="/" className="imgblock">
                  <img src={left} alt="" />
                </a>
                <a href="/" className="imgblock">
                  <img src={right} alt="" />
                </a>
              </div>
            </div>
            <div className="memo2-img-border">
              <div className="memo2-img">
                <div className="memo2-img-text">Уютное кафе</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
