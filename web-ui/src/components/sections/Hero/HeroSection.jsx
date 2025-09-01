import styles from './Hero.module.css'
import WrapContainer from "../../list/wrap-container/WrapContainer";

function HeroSection() {
    return (
        <section className={styles.hero}>
            <WrapContainer>
                <div className={styles.hero_content}>
                    <div className={styles.hero_text}>
                        <h1>Структурируйте свои идеи проектов в одном месте</h1>
                        <p>Protobin помогает разработчикам организовывать идеи, описывать локации и страницы,
                            ставить задачи и создавать единый user flow для вашего проекта.</p>
                        <div className={styles.hero_buttons}>
                            <a href="#" className="btn btn-primary">Начать бесплатно</a>
                            <a href="#" className="btn btn-outline">Узнать больше</a>
                        </div>
                    </div>
                    <div className={styles.hero_image}>
                        <div className={styles.hero_image_back}>
                            <span style={{fontSize: "5rem"}}>🎯</span>
                        </div>
                    </div>
                </div>
            </WrapContainer>
        </section>
    )
}

export default HeroSection