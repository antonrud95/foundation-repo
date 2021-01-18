import Image from 'next/image'
import Link from "next/link";
import Fade from 'react-reveal/Fade';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faFacebookSquare, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = ({logo, text, socials, footerNav, footerItems, mobileLogo, mobileTitle, mobileText}) => {
    return(
        <div>
            <div className='container mx-auto md:px-15 max-w-1176'>
                <div className='pt-40 pb-30 lg:pb-60 md:flex'>
                    <Fade bottom>
                        <div className='md:max-w-360'>
                            <div className='md:hidden pb-28 px-15 md:px-0 text-center'>
                                <Image src={mobileLogo.url} width={60} height={60}/>
                                <p className='text-20-25 font-bold'>{mobileTitle}</p>
                                <p className='text-20-25'>{mobileText}</p>
                            </div>
                            <div className='hidden md:block pb-28 px-15 md:px-0'>
                                <Image src={logo.logoimage[1].url} width={299} height={60}/>
                            </div>
                            <p className='hidden md:block md:mb-25'>{text}</p>
                            <div className='flex pb-40 border-b border-grey px-15 md:border-none md:px-0'>
                                {socials.map((item, index) => {
                                    return(
                                        <div className='mr-xxs' key={item.id}>
                                            <Image src={item.url} width={index === 1 ? 135 : 116} height={40} key={item.id} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom delay={200}>
                        <div className='px-15 md:px-0 md:flex'>
                            {footerItems.map((item, index) => {
                                return(
                                    <div key={item.id} className='flex flex-col mt-sm md:mt-0 md:ml-40 lg:ml-108 lg:pt-20'>
                                        <p className='text-22-28 mb-16'>{item.title}</p>
                                        {item.directions.map((direction, index) => (
                                            <Link href='/' key={index}>
                                                <a className='text-18-30 text-lowertitle mb-4 hover:text-black'>
                                                    {direction}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                )
                            })}
                        </div>
                    </Fade>
                </div>
            </div>
            <div className='md:border-t border-work xl:pt-15'>
                <div className='mb-sm md:mb-0 lg:mx-auto md:max-w-1176 md:flex items-center justify-between xl:pb-15'>
                    <Fade bottom delay={300}>
                        <div className='px-15 mb-sm md:mb-0'>
                            {footerNav.map((item, index) => {
                                return(
                                    <Link href='/' key={index}>
                                        <a className='text-14-22 mr-xxs text-lowertitle hover:text-black'>
                                            {item}
                                        </a>
                                    </Link>
                                )
                            })}
                        </div>
                    </Fade>
                    <Fade bottom delay={350}>
                        <div className='px-15'>
                            <Link href='/'>
                                <a>
                                    <FontAwesomeIcon icon={faTwitter} className='mr-xxs text-text text-opacity-60'/>
                                </a>
                            </Link>
                            <Link href='/'>
                                <a>
                                    <FontAwesomeIcon icon={faFacebookSquare} className='mr-xxs text-text text-opacity-60'/>
                                </a>
                            </Link>
                            <Link href='/'>
                                <a>
                                    <FontAwesomeIcon icon={faLinkedinIn} className='text-text text-opacity-60'/>
                                </a>
                            </Link>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}
export default Footer