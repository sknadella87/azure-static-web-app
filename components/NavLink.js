import classNames from 'classnames'
import Link from 'next/link'

const NavLink = ({ children, className, isActive, href='/' }) => {
    const activeClass = ['border-magneta-primary', 'font-bold'];
    console.log(isActive);
    return (
        <Link
            href={href}
            className={classNames(
                "px-6 py-7 border-b-[6px]",
                ...activeClass.map(cl => `hover:${cl}`),
                isActive && activeClass,
                className
            )}>{children}</Link>
    )
  }
  export default NavLink