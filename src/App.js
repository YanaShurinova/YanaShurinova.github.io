import './App.css'
import dom from './images/dom.jpg'
import statistics from './images/statistics.jpg'
import box from './images/box.jpg'
import person from './images/person.jpg'
import Introduction from "./components/Introduction/Introduction";
import Capability from "./components/capability/Capability"
import MyButton from "./components/button/MyButton"
import present from './images/present.jpg'
import star from './images/star.jpg'
import dop1 from './images/dop1.jpg'
import dop2 from './images/dop2.jpg'
import dop3 from './images/dop3.jpg'
import Question from "./components/questions/Question"


function App() {

  return (
    <div>
        <div className="navPane">
            <a className="navPaneSub" href="https://t.me/palleton_bot">СЕРВИС ПАЛЛЕТОН</a>
            <a className="navPaneSub" href="https://t.me/palleton_chat">ЧАТ ПОДДЕРЖКИ</a>
            <a className="navPaneBig" href="https://t.me/mpdashboard_bot">ПАЛЛЕТОН</a>
            <a className="navPaneSub" href="#">ТАРИФЫ СЕРВИСА</a>
            <a className="navPaneSub" style={{cursor:'pointer'}}>ПЛАТНЫЕ УСЛУГИ</a>
        </div>
        <Introduction mainString={"ПАЛЛЕТОН -"+"\n"+"сервис по аналитике склада"}
                      subString="Ежедневные продажи, капитализация складов, уведомления о необходимости допоставки товара"
                      button="Начать пользоваться ботом"
        />
        <div className="capabilities_text">
            Возможности сервиса ПАЛЛЕТОН<br/>
            <div className="capabilities">
                <Capability path={dom}
                            mainString="Капитализация складов"
                            subString="Подробная информация о капитализации складов на Wildberries и OZON"/>
                <Capability path={statistics}
                            mainString="Аналитика продаж"
                            subString="Получите информацию о продажах сразу на всех маркетплейсах, где размещен ваш товар"/>
                <Capability path={box}
                            mainString="Уведомления о допоставках на OZON/WB"
                            subString="Сервис сообщит вам о необходимости допоставить на склады заканчивающийся товар за 30 дней до того, как он закончится"/>
                <Capability path={person}
                            mainString="Топ возвратов"
                            subString="Сервис предоставит информацию о товарах, которые чаще всего возвращают клиенты"/>
            </div>
            <MyButton string="Узнать подробнее о возможностях сервиса"/>
        </div>
        <Introduction mainString="Тариф Базовый - бесплатно всегда"
                      subString="Основные функции сервиса бесплатны для всех селлеров"
                      button="Начать пользоваться ботом"
        />
        <div className="capabilities_text">
            Как мы работаем?<br/>
        </div>
        <div className="work">
            <figure className="figure">
                <div className="numbers_one">
                    1<p/>
                </div>
                <div className="numbers_one">
                    2<p/>
                </div>
                <div className="numbers_one">
                    3
                </div>
            </figure>
            <div className="workFirstBig">
                Подписываетесь на бота
            </div>
            <div className="workFirstSmall">
                Необходимо подписаться и запустить
                бота MP_DASHBOARD в телеграме
            </div>
            <div className="workSecondBig">
                Сообщаете API ключ и Cliet Id
            </div>
            <div className="workSecondSmall">
                Эти данные необходимо для функционирования бота. Нигде больше ваш ключ не будет использоваться.
            </div>
            <div className="workThird">
                Все функции базового тарифа доступны!
            </div>
        </div>
        <hr className="line"/>
        <div className="capabilities_text">
            Тарифы сервиса ПАЛЛЕТОН<br/>
        </div>
        <div className="tariffs">
            <div className="tariffs_free">
                <img className="tariffs_img" src={present} alt="present"/>
                <div className="tariffs_type" >
                    Базовый
                </div>
                <div className="tariffs_text">
                    Капитализация складов OZON/WB - 4 запроса в месяц<br/>
                    Сводка продаж за день - 15 запросов в месяц<br/>
                    Уведомление о необходимости допоставки товаров - 1 раз в<br/> месяц<br/>
                    Топ возвратов за неделю - 2 раза в месяц<br/>
                </div>
                <div className="price">
                    <div className="price_before">
                        999 ₽ / месяц
                    </div>
                    <div className="price_after">
                        Бесплатно всегда
                    </div>
                </div>
                <div className="myLink">
                    <a style={{textDecoration:'none'}} href="https://t.me/palleton_bot">Начать пользоваться ботом</a>
                </div>
            </div>
            <div className="tariffs_not_free">
                <img className="tariffs_img" src={star} alt="present"/>
                <div className="tariffs_type" >
                    ПроСеллер - безлимитные запросы
                </div>
                <div className="tariffs_text">
                    Капитализация складов <strong>с географией по регионам</strong> для OZON/WB<br/>
                    Сводка продаж за день/неделю <strong>с подробной информацией о проданных товарах</strong><br/>
                    Уведомление о необходимости допоставки товара для <strong>всех</strong><br/> товаров<br/>
                    Топ возвратов за <strong>неделю, месяц, квартал</strong><br/>
                    <strong>Нет рекламы</strong><br/>
                </div>
                <div className="price">
                    <div className="price_before">
                        2999 ₽ / месяц
                    </div>
                    <div className="price_after">
                        1999 ₽ / месяц
                    </div>
                </div>
                <div className="myLink">
                    <a style={{textDecoration:'none'}} href="#">Купить</a>
                </div>
            </div>
        </div>
        <Introduction mainString="Бесплатный месяц тарифа ПроСеллер - для новых пользователей"
                      subString="Основные функции сервиса бесплатны для всех селлеров"
                      button="Начать пользоваться ботом"
        />
        <hr className="line"/>
        <div className="capabilities_text">
            Дополнительные услуги от ПАЛЛЕТОН<br/>
        </div>
        <div className="subtext">
            Самые популярные услуги по низким ценам
        </div>
        <div className="dops">
            <div className="dops_img">
                <img style={{width:'22em',height:'30em'}} src={dop1} alt="dop1"/>
            </div>
            <div className="dops_img">
                <img style={{width:'22em',height:'30em'}} src={dop2} alt="dop2"/>
            </div>
            <div className="dops_img">
                <img style={{width:'22em',height:'30em'}} src={dop3} alt="dop3"/>
            </div>
        </div>
        <hr className="line"/>
        <div className="capabilities_text">
            Частые вопросы<br/>
        </div>
        <Question question="Сколько стоит ваш сервис?"
                  answer="На данный момент сервис бесплатный для всех."/>
        <Question question="Обязательно ли давать API ключи?"
                  answer="Да, наш сервис использует данные из вашего кабинета для аналитики."/>
        <Question question="Конфиденциальны ли данные, сообщаемые ботом?"
                  answer="Да, абсолютно. Никто не увидит данные вашего кабинета и историю сообщений с ботом. Политика конфиденциальности."/>
        <hr className="line"/>
        <div className="capabilities_text">
            Остались вопросы?<br/>
        </div>
        <div className="subtext">
            Задавайте вопросы и предлагайте свои в нашем чате поддержке
        </div>
        <div className="myLink">
            <a style={{textDecoration:'none'}} href="#">Чат поддержки</a>
        </div>
        <div className="end">
            <br/><br/>
            <div className="links">
                <div className="links_one">
                    <a href="">Главная страница</a>
                </div>
                <div className="links_one">
                    <a href="https://t.me/palleton_bot">Сервис ПАЛЛЕТОН</a>
                </div>
                <div className="links_one">
                    <a href="https://t.me/palleton_chat">Чат поддержки</a>
                </div>
                <div className="links_one">
                    <a href="#">Политика конфиденциальности</a>
                </div>
            </div>
            <div className="links_two">
                <a href="#">ПАЛЛЕТОН</a>
            </div>
            <div className="ip">
                © 2022. Все права защищены. ИП Сковородин Артём Сергеевич. ИНН 631904610328
            </div>
        </div>

    </div>

  );
}

export default App;
