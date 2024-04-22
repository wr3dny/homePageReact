import styles from './Lego.module.css'
import { LEGO } from '../../consts/lego';


export const Lego = () => {

    const handleOOP = () => {
        if(LEGO.map(lego => lego.oop === true)){
            return "oop"
        }
        return "notOop"
    }

    return (
        <div className={styles.div}>
            <h3>WISHLIST</h3>
            <hr/>
            <div className={styles.gridContainer}>
                {LEGO.map((lego) => (
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