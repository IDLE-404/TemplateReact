import styles from './Button.module.css'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ className = '', ...props }: ButtonProps) => {
  return <button className={`${styles.button} ${className}`} {...props} />
}

export default Button