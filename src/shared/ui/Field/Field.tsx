import { ReactNode } from 'react'
import styles from './Field.module.scss'

interface FieldProps {
  className?: string;
  id?: string;
  label?: string;
  value?: string;
  onInput?: (e: any) => void;
  type?: string;
  error?: string;
  ref?: any;
}

const Field = (props: FieldProps) => {
    const {
      className = '',
      id,
      label,
      type = 'text',
      value,
      onInput,
      ref,
      error
    } = props 
    return(
         <div className={`${styles.field} ${className}`}>
          <label
            className={styles.label}
            htmlFor={id}
          >
            {label}
          </label>
          <input
            className={`${styles.input} ${error ? styles.isInvalid : ''} `}
            id={id}
            placeholder=" "
            autoComplete="off"
            type = {type}
            value={value}
            onInput = {onInput}
            ref={ref}
          />
          {error && (
            <span className= {styles.error} title={error}>{error}</span>
          )}
        </div>
    )
}

export default Field;