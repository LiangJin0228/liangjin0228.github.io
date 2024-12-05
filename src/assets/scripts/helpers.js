function handleScrollTo (target = 'top') {
  if (target === 'top') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  } else {
    const targetEl = document.querySelector(`#${target}`)
    window.scrollTo({
      top: target === 'about-me' ? targetEl.offsetTop : targetEl.offsetTop - 64,
      behavior: 'smooth',
    })
  }
}

export { handleScrollTo }
