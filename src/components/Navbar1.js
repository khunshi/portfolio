import styles from './Navbar1.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="#"> Sobre </a>
      <a href="#"> Habilidades </a>
      <a href="#"> Projetos </a>
      <a href="#"> Contato </a>
    </nav>
  )
}