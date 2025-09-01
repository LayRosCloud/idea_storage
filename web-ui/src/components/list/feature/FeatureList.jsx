import FeatureItem from "./item/FeatureItem";
import styles from './Feature.module.css'

function FeatureList({list}) {
    return (
        <div className={styles.features_grid}>
            {list.map(item => <FeatureItem key={item.icon} item={item}/>)}
        </div>
    )
}

export default FeatureList