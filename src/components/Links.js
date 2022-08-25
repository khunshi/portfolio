import {FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import styles from './Links.module.css'
import pdf from '../cv/BrunoSantosCV.pdf'

export default function Links() {
  return (
    <div>
      <div className={styles.button}> 
        <a href={pdf}>
        <button> Download CV </button>
        </a>
      </div>
      <div>
        <ul className={styles.ul}>
          <li> 
            <a href="https://www.linkedin.com/in/bruno-santos-60a4b123a" target="blank_"> 
              <FaLinkedin />
            </a>
          </li>
          <li> 
            <a className={styles.a} href="https://github.com/khunshi" target="blank_">
              <FaGithub />
            </a>
          </li>
          <li> 
            <a href="https://www.instagram.com/brunokhunshi/" target="blank_">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}