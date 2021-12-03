import styles from '../styles/meme.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                className={'lowercase'}
            >
                Made with Love - Concave Finance Discord
            </a>
        </footer>
    )
}