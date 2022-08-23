import styles from './Navbar1.module.css'
import {Link} from 'react-scroll'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="sobre" spy={true} smooth={true} offset={50} duration={500}> Sobre </Link>
      <a> Habilidades </a>
      <a> Projetos </a>
      <a> Contato </a>
    </nav>
  )
}