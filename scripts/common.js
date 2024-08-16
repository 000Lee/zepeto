const gnb = document.querySelector('nav .gnb')
const mWrap = document.querySelector('.m_nav_wrap')
const gnbClone = gnb.cloneNode(true)
mWrap.appendChild(gnbClone)
