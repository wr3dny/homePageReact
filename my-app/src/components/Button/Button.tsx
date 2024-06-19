import styles from './Button.module.css'
import classNames from 'classnames'
import { Icon, IconSize, IconName } from '../../components/Icon/Icon';

type ButtonVariant = 'primary' | 'secondary' | 'theriart'
type ButtonSize = 'small' | 'medium' | 'large'

interface BaseProps {
    type: 'icon' | 'standard';
    variant: ButtonVariant;
    size: ButtonSize;
    onClick: () => void;
    className?: string;
    disabled?: boolean;
    iconSize?: IconSize

}

interface IconButtonProps extends BaseProps {
    type: 'icon';
    iconName: IconName;
  }
  
  interface ButtonProps extends BaseProps {
    type: 'standard';
    label: string;
    leftIconName?: IconName;
    rightIconName?: IconName;
  }

type Props = IconButtonProps | ButtonProps;

export const Button = (props: Props) => {
  const {
    type,
    variant,
    size,
    onClick,
    className = '',
    disabled = false,
    iconSize = 'small',
  } = props;

  return (
    <div
      tabIndex={0}
      aria-disabled={disabled}
      role="button"
      className={classNames(
        className,
        styles.container,
        styles[variant],
        styles[size],
        {
          [styles.disabled]: disabled,
          [styles.iconOnly]: type === 'icon',
        },
      )}
      onClick={onClick}
    >
      {type === 'icon' && <Icon name={props.iconName} size={iconSize} />}
      {type === 'standard' && (
        <>
          {props.leftIconName && (
            <Icon name={props.leftIconName} size={iconSize} />
          )}
          <span className={`${styles.label} ${styles[`${size}-label`]}`}>
            {props.label}
          </span>
          {props.rightIconName && (
            <Icon name={props.rightIconName} size={iconSize} />
          )}
        </>
      )}
    </div>
  );
};
