import SectionTitle from "../Title/SectionTitle";
import StepList from "../../list/step/StepList";
import styles from './HowItWorks.module.css'
import WrapContainer from "../../list/wrap-container/WrapContainer";

function HowItWorksSection() {
    const list = [
        {
            id: 1,
            title: 'Создайте проект',
            description: 'Зарегистрируйтесь и начните новый проект, дайте ему название и описание.'
        },
        {
            id: 2,
            title: 'Добавьте элементы',
            description: 'Создавайте страницы, локации, задачи и описывайте их особенности.'
        },
        {
            id: 3,
            title: 'Постройте связи',
            description: 'Визуально свяжите элементы между собой, создавая user flow.'
        },
        {
            id: 4,
            title: 'Поделитесь и получайте фидбэк',
            description: 'Делитесь проектом с сообществом и получайте ценные комментарии.'
        }
    ]

    return (
        <section className={styles.how_it_works} id="how-it-works">
            <WrapContainer>
                <SectionTitle
                    header='Как работает Protobin'
                    description='Всего несколько шагов от идеи к структурированному проекту'/>
                <StepList list={list}/>
            </WrapContainer>
        </section>
    )
}

export default HowItWorksSection