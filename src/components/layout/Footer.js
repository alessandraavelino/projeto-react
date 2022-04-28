import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import styles from './Footer.module.css'

function Footer() {
  return (
      <footer className={styles.footer}>
          <ul className={styles.social_list}>
              <li>
                  <FaFacebook />
              </li>
              <li>
                  <FaInstagram />
              </li>
              <li>
                  <FaLinkedin />
              </li>
              <li className>
                  <FaGithub />
              </li>
          </ul>
          <p><span>projects manager</span> &copy; ale | hora de codar</p>
      </footer>

    
  )
}

export default Footer