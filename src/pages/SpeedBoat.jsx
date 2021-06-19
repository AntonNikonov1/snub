import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { AdvantagesTable } from '../components/AdvantagesTable'
import { GalleryCard } from '../components/GalleryCard'
import { Table } from '../components/Table'
import { Title } from '../components/Title'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ROUTER_KEY } from '../Router/routerKeys'

export const SpeedBoat = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="pt-screen">
      <Header activePage={ROUTER_KEY.SPEED_BOAT} />

      <div className="container">
        <section>
          <Title>скоростной катер</Title>

          <AdvantagesTable
            leftTable={[
              'На катер возможна установка максимально мощного двигателя с водометной установкой OPTIMAX.',
              'Форма днища спроектирована таким образом, что даже пересекая волны перпендикулярно он не подпрыгивает создавая неудобств вам и вашим пассажирам.',
              'На ходу катер почти не соприкасается своим днищем с поверхностью воды, зона соприкосновения с водой всего чуть более метра, при этом он отлично держится за воду.',
            ]}
            rightTable={[
              'В производстве катера применяются материалы финской фирмы Ашланд.',
              'Возможно изготовление катера под подвесной или стационарный двигатель.',
              'С двигателем 90 сил катер практически моментально выходит на глиссирование и совсем не чувствителен к нагрузке.',
            ]}
          />
        </section>

        {/* <ReactPlayer
          url="https://www.youtube.com/watch?v=34Na4j8AVgA"
          width="100%"
          className="player"
          volume={0}
        /> */}

        <section className="table-container pt80">
          <Table
            leftListTitle="ДЕТАЛЬ"
            rightListTitle="ПАРАМЕТР"
            leftList={[
              'Длина катера',
              'Ширина катера',
              'Высота борта',
              'Длина каюты',
              'Ширина каюты',
              'Высота транца',
              'Вес без двигателя',
              'Пассажировместимость',
              'Предельная нагрузка',
            ]}
            rightList={[
              '6,2 м',
              '2,15 м',
              '0,99 м',
              '2,5 м',
              '1,77 м',
              '508 мм.',
              '450 кг.',
              '5 человек',
              '600 кг.',
            ]}
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
        </section>
      </div>
      <Footer />
    </section>
  )
}
