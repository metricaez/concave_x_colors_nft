import styles from '../styles/meme.module.css'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import { MetaHead } from '../components/head'
import { Minter } from '../components/minter'

export default function Home() {

  return (
    <div className={styles.mainContainer}>
      <MetaHead />
      <Navbar />
      <div className={styles.container}>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <br /><a>Concave NFT Minting</a>
          </h1>

          <Minter />
        </main>

        <Footer />
      </div>
    </div>
  )
}