import styles from '../css/Header.module.css'

interface Header {
    title1: string,
    title2: string,
    subtitle: string,
}

function Header({title1, title2, subtitle}:Header) {
    return (
        <section id={styles["header"]}>
            <h1>
                <strong>{title1.toUpperCase()}</strong>
                <span>{title2.toUpperCase()}</span>
            </h1>
            <div>
                <p>{subtitle}</p>
            </div>
        </section>
    )
}

export default Header
