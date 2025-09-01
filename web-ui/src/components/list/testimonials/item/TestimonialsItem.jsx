import styles from '../TestimonialsList.module.css'

function TestimonialsItem({item}) {
    return (<div className={styles.testimonial_card}>
        <div className={styles.testimonial_text}>
            "{item.comment}"
        </div>
        <div className={styles.testimonial_author}>
            <div className={styles.author_avatar}>{item.fullName[0]}</div>
            <div className={styles.author_info}>
                <h4>{item.fullName}</h4>
                <p>{item.post}</p>
            </div>
        </div>
    </div>)
}

export default TestimonialsItem