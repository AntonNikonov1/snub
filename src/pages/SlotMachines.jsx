import React from 'react'
import { AdvantagesTable } from '../components/AdvantagesTable'
import { GalleryCard } from '../components/GalleryCard'
import { Title } from '../components/Title'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const SlotMachines = () => {
  return (
    <section className="pt-screen">
      <Header />
      <div className="container">
        <Title>корпуса игровых автоматов</Title>

        <AdvantagesTable
          leftTable={[
            'Можно сделать плавные закругленные края, чего не возможно достичь изделиям из металла.',
            'Корпуса игровых автоматов имеют легкий вес.',
          ]}
          rightTable={[
            'В производстве катера применяются материалы финской фирмы Ашланд.',
            'Имеем возможность разработать и изготовить корпуса игровых автоматов или отдельные детали под заказ по вашим требованиям и в соотвецтви с вашими пожеланиями по вашим чертежам.',
          ]}
        />

        <section className="pt80 pb80">
          <Title>Галерея работ</Title>

          <div className="gallery-card__wrapper">
            <GalleryCard uri="https://live-production.wcms.abc-cdn.net.au/866ee6a08734359e49a462c4ab69a2fd?impolicy=wcms_crop_resize&cropH=2001&cropW=3000&xPos=0&yPos=0&width=862&height=575" />
            <GalleryCard uri="https://live-production.wcms.abc-cdn.net.au/866ee6a08734359e49a462c4ab69a2fd?impolicy=wcms_crop_resize&cropH=2001&cropW=3000&xPos=0&yPos=0&width=862&height=575" />
            <GalleryCard uri="https://live-production.wcms.abc-cdn.net.au/866ee6a08734359e49a462c4ab69a2fd?impolicy=wcms_crop_resize&cropH=2001&cropW=3000&xPos=0&yPos=0&width=862&height=575" />
            <GalleryCard uri="https://live-production.wcms.abc-cdn.net.au/866ee6a08734359e49a462c4ab69a2fd?impolicy=wcms_crop_resize&cropH=2001&cropW=3000&xPos=0&yPos=0&width=862&height=575" />
          </div>
        </section>
      </div>
      <Footer />
    </section>
  )
}
