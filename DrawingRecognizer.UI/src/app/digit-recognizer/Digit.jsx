import styles from './Digit.module.css';  // Importing styles

export default function Digit({digit}){
    return(
        <div className={styles.container}>
            <p className={styles.question}>Is it?</p>
            <p className={styles.digit}>{digit}</p>
        </div>
    )
}
  