import "./../css/style.css";
import left from "./../img/page1/arrow__left.svg";
import right from "./../img/page1/arrow__right.svg";
import img1 from "./../img/page3/img1.jpg";

const About = () => {
  return (
    <>
      <div className="main__text _container">О клубе</div>
      <main className="page">
        <div className="page__main-block main-block">
          <div className="page__container _container">
            <div className="cort__block">
              <div className="memo2__title">
                <div className="memo2__title1">Фото кортов</div>
                <div className="memo2__title-imgblock">
                  <a href="/" className="imgblock">
                    <img src={left} alt="" />
                  </a>
                  <a href="/" className="imgblock">
                    <img src={right} alt="" />
                  </a>
                </div>
              </div>
              <div className="cort-img-border">
                <div className="cort-img">
                  <a href="/" className="cort__button-link">
                    <div className="cort__button">
                      <div className="cort__button-text">Летний корт</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="about-club__block">
              <div className="club__title">О клубе</div>
              <div className="club__block">
                <div className="club__block-image">
                  <img src={img1} alt="" />
                </div>
                <div className="club__block-content">
                  <div className="cb-content__title">
                    Петербургский теннисный клуб имени М.А. Пасечникова
                  </div>
                  <div className="cb-content__text">
                    Feugiat gravida proin arcu tellus ipsum posuere nisl,
                    consectetur scelerisque. Posuere ipsum tellus dignissim
                    etiam lorem ultrices risus viverra. Purus volutpat phasellus
                    viverra vestibulum quis. Gravida pretium odio enim ut id
                    tempus semper. Urna cum at in iaculis mauris at. Tellus, a
                    euismod tincidunt eu orci faucibus. Mi faucibus pellentesque
                    molestie nunc, et, tellus. Neque cras mattis dolor id.
                    Maecenas vivamus tristique donec neque id convallis. Feugiat
                    fusce at est at.
                    <hr /> <br />
                    Vitae nec eget blandit id nisl. Sit ac dictum lorem mauris
                    posuere sit. Gravida commodo egestas pharetra, mi interdum.
                    Ullamcorper pulvinar hac risus egestas fusce nunc. Vel
                    auctor proin integer ut lacus, sed neque id dictum. At enim
                    quis eu, mattis aliquet varius in eu venenatis.
                    <hr /> <br />
                    Quisque diam elit donec orci sed dolor. Neque sed sit tortor
                    eget urna magna interdum feugiat ut. In purus rhoncus
                    egestas euismod morbi. Ut velit facilisi in cras tempus
                    turpis sapien ipsum, mattis. Tempor sit nulla ac lorem
                    placerat congue. Nulla purus vestibulum suscipit
                    pellentesque risus non.
                  </div>
                  <div className="cb-content__group-block">
                    <div className="cb-content__group _f">
                      <div className="group__image">
                        <img src="img/page3/7.svg" alt="" />
                      </div>
                      <div className="group__text">Летних грунтовых кортов</div>
                    </div>
                    <div className="cb-content__group _s">
                      <div className="group__image">
                        <img src="img/page3/4.svg" alt="" />
                      </div>
                      <div className="group__text">
                        Зимних корта с покрытием «искусственная трава»
                      </div>
                    </div>
                    <div className="cb-content__group _t">
                      <div className="group__image">
                        <img src="img/page3/3.svg" alt="" />
                      </div>
                      <div className="group__text">
                        Зимних корта с покрытием «hard»
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rules">
              <div className="rules__title">Правила</div>
              <div className="rules__block">
                <div className="rules__block-left">
                  <div className="block-left__text">1. Общие положения</div>
                  <div className="block-left__text">
                    2. Основные определения
                  </div>
                  <div className="block-left__text _ppr">
                    3. Порядок предоставления игрового времени на кортах
                  </div>
                  <div className="block-left__text">4. Оплата услуг</div>
                  <div className="block-left__text">
                    5. Правила поведения на территории и кортах
                  </div>
                  <div className="block-left__text">6. Прочие положения</div>
                </div>
                <div className="rules__block-right">
                  <div className="block-right_rule">
                    <div className="block-right_rule__title">
                      3.1. ТК предоставляет Членам клуба:
                    </div>
                    <div className="block-right_rule__text">
                      <ul className="rule__list">
                        <li className="rule__item">
                          <div className="rule__text">Разовое посещение;</div>
                        </li>
                        <li className="rule__item">
                          <div className="rule__text">
                            Абонементы с фиксированным временем;
                          </div>
                        </li>
                        <li className="rule__item">
                          <div className="rule__text">
                            Абонементы на 30 и 50 часов;
                          </div>
                        </li>
                        <li className="rule__item">
                          <div className="rule__text">
                            Индивидуальные занятия с тренером;
                          </div>
                        </li>
                        <li className="rule__item">
                          <div className="rule__text">
                            «Клуб любителей тенниса»;
                          </div>
                        </li>
                        <li className="rule__item">
                          <div className="rule__text">
                            Детские группы разных возрастов и уровня подготовки;
                          </div>
                        </li>
                        <li className="rule__item">
                          <div className="rule__text">Взрослые группы</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="block-right_rule">
                    <div className="block-right_rule__title">
                      3.2. Минимальное время:
                    </div>
                    <div className="block-right_rule__text">
                      <ul className="rule__list">
                        <li className="rule__item">
                          <div className="rule__text">
                            Разового посещения — 60 минут;
                          </div>
                        </li>
                        <li className="rule__item">
                          <div className="rule__text">
                            Разового посещения на летних кортах — 55 минут;
                          </div>
                        </li>
                        <li className="rule__item">
                          <div className="rule__text">
                            Абонемента — 30 часов;
                          </div>
                        </li>
                        <li className="rule__item">
                          <div className="rule__text">
                            Индивидуальное занятие с тренером — 1 час;
                          </div>
                        </li>
                        <li className="rule__item">
                          <div className="rule__text">
                            Занятия с тренером в группах (детских/взрослых) —
                            согласно действующего расписания групп.
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="block-right_rule">
                    <div className="block-right_rule__title">
                      3.3. Игровое время на основании заявок (брони)
                    </div>
                    <div className="block-right_rule__text">
                      <div className="rule__big-text">
                        ТК предоставляет игровое время на основании заявок
                        (брони) Членов клуба с учетом расписания работы корта,
                        проведения соревнований, клубных мероприятий,
                        производства ремонтно-профилактических работ.
                        Бронирование игрового времени осуществляется через
                        администратора ТК. Бронирование может производиться
                        непосредственно в Комплексе, либо по телефону. 3.4 ТК не
                        несет ответственности за сохранение расписания игрового
                        времени за Членом клуба после окончания срока действия
                        абонемента, а также в случае нарушения срока оплаты
                        услуг. 3.5 Абонемент имеют право приобретать только
                        Члены ТК. Приобретение абонементов тренерами запрещено.
                        3.6. Отмена игрового времени может производится не
                        позднее 24 часов до начала занятия и отыгрываться в
                        течение сезона на равноценном времени, либо, при
                        желании, на более дорогом, с доплатой. Не отмененное
                        вовремя занятие считается состоявшимся и оплачивается по
                        текущему тарифу. 3.7. При проведении соревнований,
                        Клубных мероприятиях, технических неисправностях, не
                        позволяющих эксплуатацию кортов, ТК имеет право
                        производить изменения в расписании. При этом ТК
                        обязуется заблаговременно уведомить Члена клуба по
                        телефону об изменении в расписании, а также предоставить
                        возможность равнозначно компенсировать пропущенное
                        игровое время в удобное для Члена клуба время с учетом
                        занятости кортов. 3.8. Компенсация (обоюдно
                        согласованное равноценное игровое время) для занятий в
                        ТК предоставляется также в случаях:
                      </div>
                      <ul className="rule__list">
                        <li className="rule__item">
                          <div className="rule__text">
                            когда Член клуба заблаговременно (не менее суток)
                            известил администратора ТК о невозможности посещения
                            занятия;
                          </div>
                        </li>
                        <li className="rule__item">
                          <div className="rule__text">
                            неблагоприятных погодных условий для игры на
                            открытых кортах, и невозможности предоставления
                            закрытой площадки;
                          </div>
                        </li>
                      </ul>
                    </div>
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

export default About;
