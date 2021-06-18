export const bodyScroll = (isScroll) => {
  if (isScroll) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'unset'
  }
}
