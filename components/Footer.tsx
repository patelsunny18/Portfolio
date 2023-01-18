import React from 'react'
import { SiReact, SiTypescript, SiNextdotjs, SiBootstrap, SiVercel, SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer id='footer'>
      <div className="footer-text">
        Designed & built by Sunny Patel
      </div>
      <div className="footer-tech-list">
        <SiReact size={'1.7em'} />
        <SiTypescript size={'1.7em'} />
        <SiBootstrap size={'1.7em'} />
        <SiNextdotjs size={'1.7em'} />
        <SiVercel size={'1.7em'} />
        <SiGithub size={'1.7em'} />
      </div>
    </footer>
  )
}