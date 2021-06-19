import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTER_KEY } from '../../Router/routerKeys'
import { bodyScroll } from '../../utils/bodyScroll'

export const Header = ({ activePage }) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

  useEffect(() => {
    bodyScroll(isHamburgerOpen)
  }, [isHamburgerOpen])

  return (
    <header className="header">
      <nav className="nav">
        <Link to={ROUTER_KEY.HOME} className="nav__logo">
          ФОП Меляницкий
        </Link>

        <ul className={isHamburgerOpen ? 'nav__list open' : 'nav__list'}>
          {navigationList.map((item, indx) => (
            <li className="nav__item" key={indx}>
              <Link
                to={item?.navigation}
                className={
                  activePage === item.navigation
                    ? 'nav__link active'
                    : 'nav__link'
                }
              >
                {item?.name}
              </Link>
            </li>
          ))}
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

const navigationList = [
  { name: 'Главная', navigation: ROUTER_KEY.HOME },
  { name: 'Водные горки', navigation: ROUTER_KEY.WATERS_SLIDES },
  { name: 'Турекцкая баня', navigation: ROUTER_KEY.BATH_SAUNA },
  { name: 'Игровые автоматы', navigation: ROUTER_KEY.SLOT_MACHINES },
  { name: 'Cкоростной катер', navigation: ROUTER_KEY.SPEED_BOAT },
]
