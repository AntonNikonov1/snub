import React, { useEffect } from 'react'
import { AdvantagesTable } from '../components/AdvantagesTable'
import { Title } from '../components/Title'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ROUTER_KEY } from '../Router/routerKeys'

export const BathSauna = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="pt-screen">
      <Header activePage={ROUTER_KEY.BATH_SAUNA} />

      <div className="container">
        <section>
          <Title>Турецкая баня ХАМАМ</Title>

          <AdvantagesTable
            leftTable={[
              'Очищает организм от вредных веществ и повышает жизненный тонус. ',
              'Помогает в лечении заболеваний, таких как бронхит, астма, обычная простуда и предупреждает головные боли. ',
              'ак же, как известно, бани способствуют похудению, хаммам – не исключение, так же пар помогает бороться с проявлениями целлюлита.',
            ]}
            rightTable={[
              'Огромный выбор вариантов парных.',
              'Быстрая и удобная сборка парной.',
              'Возможно исполнение различных цветов на выбор ..',
              'Возможность по наружи обшить кабину панелями',
            ]}
          />
        </section>

        <section className="pt80">
          <Title>Требования к установке</Title>
          <ul className="numeric-list">
            <li className="numeric-item">
              Пол должен быть покрыт плиткой и иметь небольшой уклон к центру,
              где расположен дренаж.
            </li>
            <li className="numeric-item">
              Слив в канализацию диаметром не менее 40 мм.
            </li>
            <li className="numeric-item">Вентиляция, ведущая на улицу.</li>
            <li className="numeric-item">Электропитание</li>
            <li className="numeric-item">
              Постоянная подача холодной воды, под давлением от 2 до 5 бар.
            </li>
            <li className="numeric-item">
              В некоторых областях с жесткой водой, требуется подготовка воды
              (рекомендуется при коммерческом использовании).
            </li>
            <li className="numeric-item">
              Свободное место для парового генератора на максимальном расстоянии
              5 м от паровой кабины.
            </li>
          </ul>
        </section>
        <section className="pt80">
          <Title>Модели турецких парных бань</Title>
          <ul className="numeric-list">
            <li className="numeric-item">
              На рисунке показаны основные варианты сборки паровых комнат.
            </li>
            <li className="numeric-item">
              Огромное количество возможных вариантов, с изменением ширины,
              длины и расположением двери.
            </li>
            <li className="numeric-item">Вход 77 х 192 см без порога.</li>
            <li className="numeric-item"> Цвет дверного стекла – бронза.</li>
          </ul>
        </section>

        <section className="pt80 pb80">
          <Title>Возможные варианты и цены на парные</Title>

          <img
            src="https://schoolsw3.com/html/img_girl.jpg"
            alt="options for paired"
            width="100%"
          />
        </section>
      </div>
      <Footer />
    </section>
  )
}
