import FeatureList from "../../list/feature/FeatureList";
import styles from './Feature.module.css'
import SectionTitle from "../Title/SectionTitle";
import WrapContainer from "../../list/wrap-container/WrapContainer";


function FeatureSection() {
    const list = [
        {icon: '📋', header: 'Структурирование идей', description: 'Все инструменты, которые вам нужны для планирования, организации и реализации вашего проекта'},
        {icon: '🗺️', header: 'Описание локаций и страниц', description: 'Детально опишите каждую локацию игры или страницу приложения, добавляя все необходимые\n' +
                '                            элементы и функциональность.'},
        {icon: '✅️', header: 'Управление задачами', description: 'Создавайте, назначайте и отслеживайте задачи для реализации вашего проекта от концепции до\n' +
                '                            завершения.'},
        {icon: '💬️', header: 'Комментарии и коллаборация', description: 'Делитесь своими проектами и получайте ценные комментарии от других разработчиков.'},
        {icon: '🔗', header: 'Визуальный User Flow', description: 'Создавайте интерактивные диаграммы связей между элементами проекта, подобно Miro, но\n' +
                '                            специализированные под нужды разработчиков.'},
        {icon: '🤖', header: 'ИИ-помощник (скоро)', description: 'В будущем: ИИ, который поможет вам развивать идеи и даже создавать MVP для ваших\n' +
                '                            проектов.'},
    ]

    return (
        <section className={styles.features} id="features">
            <WrapContainer>
                <SectionTitle header='Мощные возможности для разработчиков' description='Все инструменты, которые вам нужны для планирования, организации и реализации вашего проекта'/>
                <FeatureList list={list}/>
            </WrapContainer>
        </section>
    )
}

export default FeatureSection