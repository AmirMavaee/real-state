import React from 'react'
import Footer from './Footer'
import Header from './Header'


function Layouts({children}) {
  return (
    <div style={{position:"relative"}}>
        <Header/>
        <div>{children}</div>
        <Footer/>
    </div>
  )
}

export default Layouts