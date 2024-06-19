import styles from './Icon.module.css';

export type IconSize =
  | 'small'
  | 'medium'
  | 'large'
  | 'extra-large'


export type IconName =
  | 'Colored'
  | 'ColoredElse'


interface Props {
  name: IconName;
  size?: IconSize;
  className?: string;
}

export const Icon = ({ name, size = 'medium', className = '' }: Props) => (
  <img
    data-testid={name}
    // src={Icons[name]}
    alt={name.split(/(?=[A-Z])/).join(' ')}
    className={`${styles.icon} ${styles[size]} ${className}`}
  />
);