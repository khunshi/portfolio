import styles from './Home.module.css'
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import Links from './Links'

export default function Home() {
  
  const {text, count} = useTypewriter({
      words: ['<cO', '<CODD', '<cODE /', '<Code />'],
      loop: 1,
      delaySpeed: 500,
      typeSpeed: 100,
      deleteSpeed: 100
    })
  return (
    <section className={styles.section}>
      <div  className={styles.typewriter}>
        <span>
          {text}
        </span>
        <Cursor cursorStyle={
            "|"} />
      </div>
      <div className="links">
        <Links />
      </div>
    </section> 
  )
}