import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTER_KEY } from '../../Router/routerKeys'
import { bodyScroll } from '../../utils/bodyScroll'

export const Header = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

  useEffect(() => {
    bodyScroll(isHamburgerOpen)
  }, [isHamburgerOpen])

  return (
    <header className="header">
      <nav className="nav">
        <Link to={ROUTER_KEY.HOME} className="nav__logo">
          Фоп Меляницккий
        </Link>

        <ul className={isHamburgerOpen ? 'nav__list open' : 'nav__list'}>
          <li className="nav__item">
            <Link to={ROUTER_KEY.HOME} className="nav__link">
              Главная
            </Link>
          </li>
          <li className="nav__item">
            <Link to={ROUTER_KEY.WATERS_SLIDES} className="nav__link">
              Водные горки
            </Link>
          </li>
          <li className="nav__item">
            <Link to={ROUTER_KEY.BATH_SAUNA} className="nav__link">
              Туркцкая баня
            </Link>
          </li>
          <li className="nav__item">
            <Link to={ROUTER_KEY.SLOT_MACHINES} className="nav__link">
              Игровые автоматы
            </Link>
          </li>
          <li className="nav__item">
            <Link to={ROUTER_KEY.SPEED_BOAT} className="nav__link">
              Cкоростной катер
            </Link>
          </li>
        </ul>

        <button
          className={isHamburgerOpen ? 'hamburger open' : 'hamburger'}
          onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
        >
          <span className="hamburger__stripes"></span>
        </button>
      </nav>
    </header>
  )
}
