import React, { useEffect } from 'react'
import { AdvantagesTable } from '../components/AdvantagesTable'
import { Button } from '../components/Button'
import { ExampleWork } from '../components/ExampleWork'
import { GalleryCard } from '../components/GalleryCard'
import { Title } from '../components/Title'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ROUTER_KEY } from '../Router/routerKeys'

export const Waterslides = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="pt-screen">
      <Header activePage={ROUTER_KEY.WATERS_SLIDES} />

      <div className="container">
        <section>
          <Title>водные горки</Title>

          <AdvantagesTable
            leftTable={[
              'Водная горка будет идеальным дополнением для бассейна в загородном доме или гостинице на берегу моря.',
              'Горки из такого материала устойчивы к различным негативным факторам, благодаря чему не поддаются к деформации.',
              'Еще одним плюсом стеклопластика является скользящая поверхность.',
            ]}
            rightTable={[
              'Мы готовы  изготовить горки по вашим эскизам и индивидуальному заказу!',
            ]}
          />
        </section>

        <section className="pt80">
          <Title>Пример водной горки</Title>

          <ExampleWork
            uri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNcUMn-KxwgTPWA4t8hb-xOdoPHvEl4E7HsQ&usqp=CAU"
            descriptionList={[
              'Ширина желоба 800 мм. высота бортов 600мм',
              'Стандартная горка имеет полный оборот 360 градусов.',
              'Угол спуска 13%.',
              'Диаметр водной горки по наруже желоба составляет 3,5 метра.',
              'Высота стартовой площадки 3.3 метра.',
              'Водная горка комплектуется лестницей из стеклопластика с шириной ступеней 700 мм и углом подъема 45%. монтаж водной горки',
              'Учитывая что, водная горка набирается из секций, любые параметры можно менять по вашему желанию: угол высота и т.д. градусов.',
            ]}
            price={9000}
          />
        </section>
        <section className="pt80 pb80">
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
