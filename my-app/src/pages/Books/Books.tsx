import styles from './Books.module.css'

export const Books = () => {
    return (
        <div className={styles.page}>
            <h1>Books</h1>
            <div className={styles.txt}>            <span>Collection of owned books. Later to be divided in series.</span>
            <span>Should add sort button of some kind.</span></div>

        </div>
    )
}