import React from 'react'

export const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <ul className="footer__list">
        <li className="footer__item">
          <h2>Киев, улица Кемеровская, 6</h2>
          <a
            href="https://www.google.com/maps/place/%D0%94%D0%BD%D0%B5%D0%BF%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9+%D1%80%D0%B0%D0%B9%D0%BE%D0%BD,+%D0%9A%D0%B8%D0%B5%D0%B2,+02000/@50.4491704,30.6128455,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4cff7e3e02319:0xd484ffedc4ca3ea9!8m2!3d50.4492519!4d30.6147695"
            target="_blank"
          >
            Открыть на карте
          </a>
        </li>
        <li className="footer__item">
          <h2>Пн - Пт 8:00 - 18:00</h2>
          <p>Сб - Вс 8:00 - 16:00</p>
        </li>
        <li className="footer__item">
          <a href="tel: +380 50 357 35 73">+380 50 357 35 73</a>
          <a href="mailto: email@gmail.com">email@gmail.com</a>
        </li>
      </ul>
    </div>
  </footer>
)
