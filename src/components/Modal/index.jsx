import React, { useEffect, useRef } from 'react'
import { ModalTitle } from './ModalTitle'
import { Input } from '../Input'
import { Button } from '../Button'
import { bodyScroll } from '../../utils/bodyScroll'

export const Modal = ({ isModalOpen, seIsModalOpen }) => {
  const modalRef = useRef()

  const closeModal = (event) => {
    if (modalRef.current === event.target) seIsModalOpen(false)
  }
  useEffect(() => {
    bodyScroll(isModalOpen)
  }, [isModalOpen])

  if (!isModalOpen) return null

  return (
    <div className="modal" onClick={(e) => closeModal(e)} ref={modalRef}>
      <div className="modal__container">
        <div className="modal__content">
          <ModalTitle>
            Оставте свои контакты и мы свяжемся с Вами в ближайшие время
          </ModalTitle>

          <form className="modal__form">
            <Input title="Введите ваше имя" />
            <Input title="Введите ваш номер телефона" />

            <Button className="mt20">Отправить</Button>
          </form>

          <button
            onClick={() => seIsModalOpen(false)}
            className="modal__close-btn"
          >
            X
          </button>
        </div>
      </div>
    </div>
  )
}
