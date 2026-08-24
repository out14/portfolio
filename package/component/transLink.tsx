import { Link, type LinkProps } from 'react-router-dom'
import { usePageTransition } from './wave'

export const TransitionLink = ({
    to,
    ...props
}: LinkProps) => {

    const { transitionTo } = usePageTransition()

    return (
        <Link
            {...props}
            to={to}
            onClick={(e) => {
                e.preventDefault()
                transitionTo(to.toString())
            }}
        />
    )
}