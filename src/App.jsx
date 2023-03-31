import React, { useState } from 'react'
import profile from './assets/cat.jpg'
import './index.css'

function App() {
  return (
    <nav className="navbar">
    <div className="container">
      <a className="navbar-brand fw-bold text-primary" href="#">ALABIM</a>
      
      <div className="nav_menu">
        <ul className="nav_list list-unstyled d-flex justify-content-around align-items-center justify-content-md-center gap-md-5">
          <li className="nav-item">
            <a className="nav-link d-flex flex-column align-items-center" href="#">
            <i className="ri-home-2-line nav_icon"></i>
              <span className='text_smaller'>Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex flex-column align-items-center" href="#">
            <i className="ri-user-3-line nav_icon"></i>
              <span className='text_smaller'>About</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex flex-column align-items-center" href="#">
            <i className="ri-pencil-ruler-line nav_icon"></i>
              <span className='text_smaller'>Skill</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex flex-column align-items-center" href="#">
            <i className="ri-briefcase-3-line nav_icon"></i>
              <span className='text_smaller'>Portofolio</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link d-flex flex-column align-items-center" href="#">
            <i className="ri-message-3-line nav_icon"></i>
              <span className='text_smaller'>Contactme</span>
            </a>
          </li>
        </ul>
      </div>

    <div className='nav_img overflow-hidden d-lg-none'>
      <img src={profile} alt="car"/>
    </div>
    </div>
  </nav>
  )
}

export default App
