import {FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import styles from './Links.module.css'

export default function Links() {
  return (
    <div>
      <div className={styles.button}> 
        <button> Download CV </button>
      </div>
      <div>
        <ul className={styles.ul}>
          <li> <FaLinkedin/>
          </li>
          <li> <FaGithub />
          </li>
          <li> <FaInstagram />
          </li>
        </ul>
      </div>
    </div>
  )
}