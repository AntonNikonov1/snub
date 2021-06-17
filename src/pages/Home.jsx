import React, { useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { AdvantagesTable } from '../components/AdvantagesTable'
import { Button } from '../components/Button'
import { GalleryCard } from '../components/GalleryCard'
import { OurServicesCard } from '../components/OurServicesCard/OurServicesCard'
import { Title } from '../components/Title'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Modal } from '../components/Modal'
import { ROUTER_KEY } from '../Router/routerKeys'

export const Home = () => {
  const [isModalOpen, seIsModalOpen] = useState(false)
  return (
    <section>
      <Header />

      <div className="container">
        <main className="intro">
          <Title isIntro>Работа со стеклопластиком</Title>
          <Button onClick={() => seIsModalOpen(true)}>Обратный звонок</Button>

          <div className="intro__year">
            <span>15+ лет</span>
          </div>
        </main>
        <Modal isModalOpen={isModalOpen} seIsModalOpen={seIsModalOpen}>
          amnasm
        </Modal>

        <AdvantagesTable
          leftTable={[
            'Изготавливаем скоростной каютный катер под подвесной и стационарный с водометом двигатель.',
            'Наша фирма изготавливает корпуса к игровым автоматам, из стеклопластика, различных моделей и цветов.',
            'Изготавливаем, продаем, устанавливаем, ремонтируем обслуживаем водные горки, водные атракционы и изделия из стеклопластика.',
            'Мы предлагаем для Вас сборные турецкие парные ХАМАМ.',
          ]}
          rightTable={[
            'Опытные сотрудники',
            'Професианальное оборудование',
            'Сложные работы',
            'Красивые изделия',
          ]}
        />

        <section className="pt100">
          <Title>Наши услуги</Title>
          <Router>
            <div className="our-service-item__wrapper">
              <OurServicesCard
                isSmallCard
                title="Водные горки"
                linkName={ROUTER_KEY.WATERS_SLIDES}
              />
              <OurServicesCard
                title="турецкая баня ХАМАМ"
                linkName={ROUTER_KEY.BATH_SAUNA}
              />
              <OurServicesCard
                title="скоростные катера"
                linkName={ROUTER_KEY.SPEED_BOAT}
              />
              <OurServicesCard
                isSmallCard
                title="Игровые автоматы"
                linkName={ROUTER_KEY.SLOT_MACHINES}
              />
            </div>
          </Router>
        </section>

        <section className="pt100 pb100">
          <Title>Галерея работ</Title>

          <div className="gallery-card__wrapper">
            <GalleryCard uri="https://live-production.wcms.abc-cdn.net.au/866ee6a08734359e49a462c4ab69a2fd?impolicy=wcms_crop_resize&cropH=2001&cropW=3000&xPos=0&yPos=0&width=862&height=575" />
            <GalleryCard uri="https://live-production.wcms.abc-cdn.net.au/866ee6a08734359e49a462c4ab69a2fd?impolicy=wcms_crop_resize&cropH=2001&cropW=3000&xPos=0&yPos=0&width=862&height=575" />
            <GalleryCard uri="https://live-production.wcms.abc-cdn.net.au/866ee6a08734359e49a462c4ab69a2fd?impolicy=wcms_crop_resize&cropH=2001&cropW=3000&xPos=0&yPos=0&width=862&height=575" />
            <GalleryCard uri="https://live-production.wcms.abc-cdn.net.au/866ee6a08734359e49a462c4ab69a2fd?impolicy=wcms_crop_resize&cropH=2001&cropW=3000&xPos=0&yPos=0&width=862&height=575" />
          </div>

          <Button>Посмотреть больше</Button>
        </section>
      </div>

      <Footer />
    </section>
  )
}
