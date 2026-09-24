import { AnchorHTMLAttributes, ReactNode } from 'react'
import { BASE_URL } from "@/shared/constants"

interface RouterLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: ReactNode;
}

const RouterLink = (props: RouterLinkProps) => {
    const {
        to,
        children,
        ...rest
    } = props

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      window.history.pushState({}, '', to)
      window.dispatchEvent(new PopStateEvent('popstate'))
    }

    return (
      <a href={`${BASE_URL}${to}`} onClick={handleClick} {...rest}>
        {children}
      </a>
    )
}   

export default RouterLink