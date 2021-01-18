import {useState} from 'react';
import Button from './button';
import classnames from 'classnames';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const HiringSection = ({title, text, button, hiringItems}) => {
    const [hovered, setHovered] = useState(false)
    const [getIndex, setGetIndex] = useState()
    return(
        <div className='container mx-auto px-15 max-w-1176 py-50 lg:py-110'>
            <div className='text-center max-w-555 mx-auto'>
                <Fade bottom>
                    <h2 className='text-40-40 mb-xs'>{title}</h2>
                </Fade>
                <Fade bottom delay={200}>
                    <p className='text-24-34 mb-sm'>{text}</p>
                </Fade>
                <Fade bottom delay={250}>
                    <Button
                        type={button.type}
                        link={button.link}
                        additionalClassName={'w-full md:max-w-250 text-white text-18-18 bg-blue py-15 px-28 shadow-button capitalize rounded-2px mb-40'}
                    >
                        {button.name}
                    </Button>
                </Fade>
            </div>
            <Fade bottom delay={300}>
                <div>
                    {hiringItems.map((item, index) => {
                        const hoveredItem = () => {
                            setHovered(!hovered)
                            setGetIndex(index)
                        }
                        const textStyles = 'text-22-28 max-w-127 mb-6 pt-20 md:max-w-full md:pt-0 md:mb-0'
                        const textSecondStyles = 'text-18-24 text-opacity-50 mb-xs md:mb-0 md:mr-64'
                        return(
                            <div key={item.id} className='border border-work rounded-8px pl-20 mb-15 flex max-w-750 mx-auto md:h-80 hover:bg-sky' onMouseEnter={hoveredItem} onMouseLeave={hoveredItem}>
                                <div className='w-full md:flex md:items-center justify-between'>
                                    <p className={!hovered || index !== getIndex ? textStyles : classnames(textStyles, 'text-white')}>{item.job}</p>
                                    <p className={!hovered || index !== getIndex ? classnames(textSecondStyles, 'text-dark') : classnames(textSecondStyles, 'text-white text-opacity-100')}>{item.city}</p>
                                </div>
                                <div className='flex bg-link w-full max-w-50 md:bg-transparent items-center'>
                                    <FontAwesomeIcon icon={faChevronRight} className={!hovered || index !== getIndex ? 'hidden md:block' : 'hidden md:block text-white'}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Fade>
        </div>
    )
}
export default HiringSection