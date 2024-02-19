import styles from './Header.module.css'
import pugialliLogo from '/pugialli-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={pugialliLogo} alt="Logotipo Pugialli" />
        </header>
    );
}