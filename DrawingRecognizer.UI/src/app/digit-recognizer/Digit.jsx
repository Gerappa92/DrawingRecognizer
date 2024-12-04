import BoxSection from '../components/Layout/BoxSection';
import Container from '../components/Layout/Container';
import styles from './Digit.module.css';  // Importing styles

export default function Digit({ digit }) {
    return (
        <BoxSection margin="20px 400px" padding="40px">
            <Container>
                <p className={styles.question}>Is it?</p>
                <p className={styles.digit}>{digit}</p>
            </Container>
        </BoxSection>
    )
}
