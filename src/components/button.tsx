import { ReactNode, MouseEventHandler } from "react"

type ButtonProps = {
  type?: string,
  onClick?: MouseEventHandler,
  className?: string,
  children: ReactNode
}

type ButtonStyle = 'default' | ''

const Button = ({type, onClick, className, children} : ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
        {children}
    </button>
  )
}

export default Button