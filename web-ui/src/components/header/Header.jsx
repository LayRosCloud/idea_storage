import ProfileButton from "../buttons/ProfileButton";
import styles from './Header.module.css'

function Header() {
    return (
        <header>
            <div className='container'>
                <nav>
                    <div className={styles.logo}>Proto<span>bin</span></div>
                    <ul className={styles.nav_links}>
                        <li><a href="#features">Возможности</a></li>
                        <li><a href="#how-it-works">Как работает</a></li>
                        <li><a href="#testimonials">Отзывы</a></li>
                        <li><ProfileButton/></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;