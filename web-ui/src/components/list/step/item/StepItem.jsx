import styles from '../Step.module.css'

function StepItem({item}) {
    return (
        <div className={styles.step}>
            <div className={styles.step_number}>{item.id}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
        </div>
    )
}

export default StepItem