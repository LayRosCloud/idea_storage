import StepItem from "./item/StepItem";
import styles from './Step.module.css'

function StepList({list}) {
    return (
        <div className={styles.steps}>
            {list.map(item => <StepItem key={item.id} item={item}/>)}
        </div>
    )
}

export default StepList