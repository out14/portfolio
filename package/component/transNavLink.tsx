import {  NavLink, type LinkProps } from 'react-router-dom'
import { usePageTransition } from './wave'
import cn from 'classnames';

export const TransitionNavLink = ({
    to,
    className,
    ...props
}: LinkProps) => {

    const { transitionTo } = usePageTransition()

    return (
        <NavLink
            {...props}
            to={to}
            className={({ isActive }) =>
                cn(
                    className,
                    {
                        on: isActive
                    }
                )
            }
            onClick={(e) => {
                e.preventDefault()
                transitionTo(to.toString())
            }}
        />
    )
}