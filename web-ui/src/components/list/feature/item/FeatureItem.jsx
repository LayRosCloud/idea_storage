import styles from '../Feature.module.css'

function FeatureItem({item}) {
    return (
        <div className={styles.feature_card}>
            <div className={styles.feature_icon}>{item.icon}</div>
            <h3>{item.header}</h3>
            <p>{item.description}</p>
        </div>
    )
}

export default FeatureItem