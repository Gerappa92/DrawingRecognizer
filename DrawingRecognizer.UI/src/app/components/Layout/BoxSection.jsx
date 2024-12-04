import styles from "./BoxSection.module.css"

export default function BoxSection({ children, margin, padding}) {
    return(
        <section className={styles.boxSection} style={{ margin: margin, padding: padding}}>
            {children}
        </section>
    )
}