import {useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import Link from "next/link";
import Button from './button'

import Logo from '../components/logo'

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const MobileMenu = ({ isShown, toggle, items, logo, desktoplogo, type, link, children }) => {
  const menuRef = useRef(null)
  useEffect(() => {
    isShown ? disableBodyScroll(menuRef.current) : clearAllBodyScrollLocks()
  }, [isShown])
  const closeClickHandler = (e) => {
    e.preventDefault()
    enableBodyScroll(menuRef.current)
    clearAllBodyScrollLocks()
    toggle(false)
  }
  return (
    <div className={isShown ? 'block' : 'hidden'} ref={menuRef}>
      <div className={'fixed right-0 left-0 top-0 bottom-0 z-1000 bg-white'}>
        <div className='flex items-center py-8 lg:py-56 px-15 justify-between'>
          <Logo mobile={logo} desktop={desktoplogo}/>
          <FontAwesomeIcon icon={faTimes} onClick={closeClickHandler} className='text-text'/>
        </div>
        <nav className={'flex flex-col items-center pt-40'}>
            {items.map((item, index) => {
                return(
                    <Link href={item.href} key={index} >
                        <a className='transition duration-500 ease-in-out text-18-25 text-text mb-xl'>
                            {item.link}
                        </a>
                    </Link>
                )
            })}
        </nav>
        <div className='flex justify-center'>
          <Button 
            type={type}
            link={link}
            additionalClassName={'text-white text-18-18 bg-blue py-15 px-28 shadow-button capitalize rounded-2px'}
          >
            {children}
          </Button>
        </div>
      </div>
    </div>
  )
}

MobileMenu.propTypes = {
  isShown: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  items: PropTypes.any.isRequired,
}

export default MobileMenu
