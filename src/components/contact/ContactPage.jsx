import React from 'react'
import contact1 from '../../images/contact1.jpg'
import contact2 from '../../images/contact2.jpg'

function ContactPage () {
  return (
    <div className='container bg-primary'>
      <div className='row m-3'>
        <div className='col-md-6'><img src={contact1} style={imgStyle} alt='CH Logo' className='p-0' /></div>
        <div className='col-md-6'><img src={contact2} style={imgStyle} alt='CH Logo' className='p-0' /></div>
      </div>
      <div className='row m-3'>
        <div className='col-md-6'><h5>Address: </h5><p style={{ fontWeight: 'bold' }}>гр. София, 1000, ул. Средец, No: 20</p></div>
        <div className='col-md-6'><h5>Email: </h5><p><a href='mailto:sales@ioncomputers.bg' style={{ color: 'white' }}>computerheaven@gmail.com</a></p></div>
      </div>
      <div className='row m-3'>
        <div className='col-md-6'><h5>Phone: </h5><p style={{ fontWeight: 'bold' }}>0888 777 545, 0899 345 654</p></div>
        <div className='col-md-6'><h5>Working hours: </h5><p style={{ fontWeight: 'bold' }}>Понеделник - Петък 9:30 - 18:30, Събота - 10:00 - 16:00</p></div>
      </div>
    </div>
  )
}

const imgStyle = {
  width: 400
}

export default ContactPage
