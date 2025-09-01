import WrapContainer from "../list/wrap-container/WrapContainer";

function Footer() {
    return (
        <footer>
            <WrapContainer>
                <div className="footer-content">
                    <div className="footer-column">
                        <h3>Protobin</h3>
                        <p>Инструмент для разработчиков, который помогает структурировать идеи, планировать проекты и
                            коллаборировать с сообществом.</p>
                    </div>
                    <div className="footer-column">
                        <h3>Навигация</h3>
                        <ul className="footer-links">
                            <li><a href="#">Главная</a></li>
                            <li><a href="#features">Возможности</a></li>
                            <li><a href="#how-it-works">Как работает</a></li>
                            <li><a href="#testimonials">Отзывы</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Ресурсы</h3>
                        <ul className="footer-links">
                            <li><a href="#">Блог</a></li>
                            <li><a href="#">Документация</a></li>
                            <li><a href="#">Поддержка</a></li>
                            <li><a href="#">Сообщество</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Контакты</h3>
                        <ul className="footer-links">
                            <li><a href="#">Email: info@protobin.com</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Telegram</a></li>
                            <li><a href="#">GitHub</a></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; 2025 ProtoBin-Leafall. Все права защищены.</p>
                </div>
            </WrapContainer>
        </footer>
    )
}

export default Footer;