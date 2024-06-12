import styles from './Div.module.css'
import classNames from 'classnames'

export const Div = () => {
    const currentDay = new Date().getDay()
    const isWeekend = currentDay === 0 || currentDay === 6
    const weekendOrNot = isWeekend ? true : false
    return (
        <div className={classNames(styles.container, {[styles.weekend]: weekendOrNot})}>
            <h1>Div</h1>
        </div>
    )
}