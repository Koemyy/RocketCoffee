import styles from '../css/Header.module.css'

function Header() {
    return (
        <section id={styles["header"]}>
            <h1>
                <strong>ROCKET</strong>
                <span>COFFEE</span>
            </h1>
            <div>
                <p>Aberto todos os dias. 8h - 21h</p>
            </div>
        </section>
    )
}

export default Header
