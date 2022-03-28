import React from 'react'
import { Image } from 'react-bootstrap'
import Logo from '../img/Logo.svg'

const Header = () => {
  return (
    <header className='d-flex justify-content-lg-start justify-content-center'>
        <Image className="logo align-self-center " src={Logo} alt="Logo"/>
    </header>
  )
}

export default Header