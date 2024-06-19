import styles from './Lego.module.css'
import { LEGO } from '../../consts/lego';


export const Lego = () => {

    const priceLvl = {
        200: 200,
        400: 400,
        600: 600,
        800: 800, 
        1000:1000,
        1500: 1500,
        2000: 2000,
    }

const price200 = 200
const price300 = 300
const price700 = 700



    const over200 = LEGO.filter(lego => lego.minPrice < price200);
    const sortedLEGO200 = [...over200].sort((a, b) => a.minPrice - b.minPrice);
    const over300 = LEGO.filter(lego => lego.minPrice < price300);
    const sortedLEGO300 = [...over300].sort((a, b) => a.minPrice - b.minPrice);
    const over700 = LEGO.filter(lego => lego.minPrice < price700);
    const sortedLEGO700 = [...over700].sort((a, b) => a.minPrice - b.minPrice);

    return (
        <div className={styles.header}>
            <h3>WISHLIST</h3>
            <h4>cenami rosnąco</h4>
            <hr/>
            <h4>do {price200}</h4>
            <div className={styles.gridContainer}>
                {sortedLEGO200.map((lego) => (
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
            <h4>do {price300}</h4>
            <div className={styles.gridContainer}>
                {sortedLEGO300.map((lego) => (
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
            <h4>do {price700}</h4>
            <div className={styles.gridContainer}>
                {sortedLEGO700.map((lego) => (
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