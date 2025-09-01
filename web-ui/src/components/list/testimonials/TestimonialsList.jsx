import styles from "../../sections/Testimonials/Testimonials.module.css";
import TestimonialsItem from "./item/TestimonialsItem";


function TestimonialsList({list}) {
    return (<div className={styles.testimonial_grid}>
        {list.map(item => <TestimonialsItem key={item.fullName} item={item}/>)}
    </div>)
}

export default TestimonialsList