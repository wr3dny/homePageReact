import styles from './Lego.module.css'
import { LEGO } from '../../consts/lego';


export const Lego = () => {

    const sortedLEGO = [...LEGO].sort((a, b) => a.minPrice - b.minPrice);

    return (
        <div className={styles.header}>
            <h3>WISHLIST</h3>
            <h4>cenami rosnąco</h4>
            <hr/>
            <div className={styles.gridContainer}>
                {sortedLEGO.map((lego) => (
                    <div className={styles.gridItem}>
                        <a className={styles.a}
                            href={lego.url}
                            target="_self"
                        >
                            <img src={lego.img} alt={lego.name} className={lego.owned.toString()} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}