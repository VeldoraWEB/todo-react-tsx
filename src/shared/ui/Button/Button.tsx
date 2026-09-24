import { ReactNode } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  className?: string;
  isDisabled?: boolean;
  onClick?: () => void;
  children: ReactNode 
  type?:'button' | 'submit' | 'reset';
}

const Button = (props: ButtonProps) => {
    const {
      className = '',
      type = 'button',
      children,
      isDisabled,
      onClick,
    } = props
    return (
      <button 
      className={`${styles.button} ${className} `}
      type={type}
      disabled = {isDisabled}
      onClick={onClick}>
        {children}
      </button>
    )
}

export default Button