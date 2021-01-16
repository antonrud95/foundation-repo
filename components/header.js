import { useState } from 'react'
import Link from "next/link";
import Logo from './logo'
import MobileMenu from './mobile-menu'
import Button from './button'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Fade from 'react-reveal/Fade';
import classnames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = ({ logo, button, navlinks }) => {
  const [isMenuShown, toggleMenu] = useState(false)
  const [isOnTop, setOnTop] = useState(true)
  const openClickHandler = () => {
    toggleMenu(true)
  }
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (currPos.y >= -50) {
        setOnTop(true)
      } else {
        setOnTop(false)
      }
    },
    [isOnTop]
  )
    const navStyles = 'fixed right-0 left-0 top-0 z-1000'
    return (
      <header className={isOnTop ? classnames(navStyles, 'py-8 lg:py-40 transition-nav') : classnames(navStyles, 'bg-white pt-5 pb-0 md:py-15 lg:py-25 transition-nav')}>
        <div className="container max-w-1176 mx-auto px-15">
          <div className='flex items-center justify-between '>
            <Fade top>
              <Logo 
                mobile={logo.logoimage[0].url}
                desktop={logo.logoimage[1].url}
              />
            </Fade>
            <MobileMenu items={navlinks} isShown={isMenuShown} toggle={toggleMenu} logo={logo.logoimage[0].url} desktoplogo={logo.logoimage[1].url} type={button.type} link={button.link} children={button.name}/>
            <FontAwesomeIcon icon={faBars} onClick={openClickHandler} className={'block lg:hidden text-dark'}/>
            <div className='hidden lg:flex items-center'>
              <Fade top delay={300}>
                <nav className='hidden lg:flex items-center'>
                    {navlinks.map((link, index) => {
                      return(
                        <Link href={link.href} key={index}>
                                <a className={index === 0 ? 'transition duration-500 ease-in-out text-18-25 text-text mr-64 font-bold' : 'transition duration-500 ease-in-out text-18-25 text-text mr-64'}>
                                  {link.link}
                                </a>
                            </Link>
                        )
                    })}
                </nav>
              </Fade>
              <Fade top delay={400}>
                <div className='hidden lg:flex'>
                  <Button 
                    type={button.type}
                    link={button.link}
                    additionalClassName={'text-white text-18-18 bg-blue py-15 px-28 shadow-button capitalize rounded-2px'}
                  >
                    {button.name}
                  </Button>
                </div>
              </Fade>

            </div>
          </div>
        </div>
      </header> 
    );
  }
  
  export default Header;