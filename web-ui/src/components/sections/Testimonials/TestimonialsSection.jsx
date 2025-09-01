import SectionTitle from "../Title/SectionTitle";
import styles from './Testimonials.module.css'
import TestimonialsList from "../../list/testimonials/TestimonialsList";
import WrapContainer from "../../list/wrap-container/WrapContainer";

function TestimonialsSection() {
    const list = [
        {
            comment: 'Protobin полностью изменил то, как я подхожу к планированию своих проектов. Теперь я могу визуализировать всю структуру до написания первой строки кода.',
            fullName: 'Алексей Иванов',
            post: 'Full-stack разработчик'
        },
        {
            comment: 'Как геймдизайнер, я ценю возможность детально описать каждую локацию и увидеть общую картину игры. Инструмент просто незаменим!',
            fullName: 'Мария Смирнова',
            post: 'Геймдизайнер'
        },
        {
            comment: 'Комментарии и feedback от сообщества помогли мне улучшить мой проект еще на этапе планирования. Экономия времени и ресурсов колоссальная!',
            fullName: 'Дмитрий Петров',
            post: 'Indie разработчик'
        }
    ]
    return (
        <section className={styles.testimonials} id="testimonials">
            <WrapContainer>
                <SectionTitle header='Что говорят разработчики'
                              description='Присоединяйтесь к растущему сообществу разработчиков, использующих Protobin'
                />
                <TestimonialsList list={list}/>
            </WrapContainer>
        </section>
    )
}

export default TestimonialsSection