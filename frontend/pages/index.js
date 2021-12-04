import styles from '../styles/meme.module.css'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import { MetaHead } from '../components/head'
import { Minter } from '../components/minter'

export default function Home() {
  function componentDidMount() {
    document.querySelector("body").classList.add('body')
  }

  return (
    <div className={styles.mainContainer}>
      <MetaHead />
      <Navbar />
      <div className={styles.container}>

        <hero className={styles.hero}>
          {/*<h1 className={styles.title}>*/}
          {/*  Welcome to <br /><a>Concave NFT Minting</a>*/}
          {/*</h1>*/}

          {/*<Minter />*/}
        </hero>
          <herotext className={styles.herotext}>
              100% on the Blockchain
          </herotext>

          <herotext2 className={styles.herotext2}>
              A different kind of NFT
          </herotext2>

          <main className={styles.main}>
              {/*<h1 className={styles.title}>*/}
              {/*  Welcome to <br /><a>Concave NFT Minting</a>*/}
              {/*</h1>*/}

              {/*<Minter />*/}
          </main>

        <Footer />
      </div>
    </div>
  )
}