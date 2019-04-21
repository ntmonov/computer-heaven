import React from 'react'
import homeImg from '../../images/home.webp'

function HomePage () {
  return (
    <div className='jumbotron jumbotron-fluid bg-primary mb-0'>
      <div className='container'>
        <h1 className='display-4'>МАГАЗИН ЗА КОМПЮТРИ И КОМПЮТЪРНИ КОМПОНЕНТИ</h1>
        <p className=''>НАДЕЖДНА КОНСУЛТАЦИЯ ПРИ ЗАКУПУВАНЕ – НА МЯСТО ИЛИ ОНЛАЙН</p>
        <p className=''>НАШИТЕ СЪТРУДНИЦИ ЩЕ ВИ ПОМОГНАТ ПРИ ИЗБОРА НА КОМПЮТЪР ОТНОСНО ЖЕЛАНИЕТО ВИ ЗА ФУНКЦИОНАЛНИ ХАРАКТЕРИСТИКИ, КОНФИГУРАЦИИ, СОФТУЕР</p>
        <img src={homeImg} style={imgStyle} alt='logo' />
      </div>
    </div>
  )
}

const imgStyle = {
  width: '40%',
  height: '40%'
}

export default HomePage
