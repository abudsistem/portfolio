import styles from '../page.module.css' 

export default function Footer() {
    return(
        <footer className={`${styles.footer}`} >
            <section>
                <p>copyright</p>
            </section>
            <section className={`${styles.footerLinks}`}>
                <a href="https://openai.com" target="_blank" rel="noopener noreferrer">
                    Contact
                </a>
                <a href="https://openai.com" target="_blank" rel="noopener noreferrer">
                    RSS
                </a>
                <a href="https://github.com/abudsistem" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                <a href="https://openai.com" target="_blank" rel="noopener noreferrer">
                    Twitter
                </a>
                <a href="https://openai.com" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
                <a href="https://www.instagram.com/eddleobor/" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
    
            </section>
        </footer>
    
    )
}