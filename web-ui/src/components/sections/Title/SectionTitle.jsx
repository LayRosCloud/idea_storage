import styles from './SectionTitle.module.css'


function SectionTitle({header, description}) {
    return (
        <div className={styles.section_title}>
            <h2>{header}</h2>
            <p>{description}</p>
        </div>
    )
}

export default SectionTitle