import PropTypes from 'prop-types'
import classnames from 'classnames'
import Link from "next/link";

const Button = ({ children, additionalClassName, type, link }) => {
  const defaultClasses =
    'transform hover:scale-105 active:scale-95 transition duration-300 ease-in-out focus:outline-none font-bold'
  return (
    <Link href={link}>
        <button
        className={classnames(defaultClasses, additionalClassName)}
        type={type}
        >
        {children}
        </button>
    </Link>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  additionalClassName: PropTypes.string.isRequired,
  type: PropTypes.string,
  link: PropTypes.string.isRequired,
}

export default Button