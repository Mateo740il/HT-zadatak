import React from 'react'

const Footer = () => {

const today=new Date()
  return (
    <footer className='footer'>
        <p>Copyright &copy; {today.getFullYear()} Mateo Bukić</p>
    </footer>
  )
}

export default Footer