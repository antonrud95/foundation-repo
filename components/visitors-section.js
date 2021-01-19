import Fade from 'react-reveal/Fade';
import classnames from 'classnames'
import Button from './button'

const VisitorsSection = ({uppertitle, title, text, buttons, visitorsItems}) => {
    let widthStyle
    const getWidthStyles = (index) => {
        switch(index) {
            case 0:
                return widthStyle = 'w-138 h-195'
            case 1: 
                return widthStyle = 'w-142 h-195'
            case 2:
                return widthStyle = 'w-160 h-195'
            case 3:
                return widthStyle = 'w-119 h-195'
            
        }
    }
    return(
        <div className='bg-ocean bg-opacity-7 py-50 lg:py-110'>
            <div className='container mx-auto px-15 max-w-1176'>
                <div className='text-center md:max-w-555 mx-auto'>
                    <Fade bottom>
                        <h5 className='text-22-34 mb-16 md:mb-24'>{uppertitle}</h5>
                    </Fade>
                    <Fade bottom delay={200}>
                        <h2 className='text-40-40 mb-16 md:mb-sm tracking-h2'>{title}</h2>
                    </Fade>
                    <Fade bottom delay={250}>
                        <p className='text-24-34 mb-35'>{text}</p>
                    </Fade>
                    <Fade bottom delay={300}>
                        <div className='mb-40 lg:mb-108'>
                            {buttons.map((button, index) => {
                                const buttonStyles = 'text-18-18 py-15 px-28 shadow-button capitalize rounded-2px mb-11 md:mx-6 w-full md:max-w-160'
                                return(
                                    <Button
                                    key={button.id} 
                                    type={button.type}
                                    link={button.link}
                                    additionalClassName={index === 0 ? classnames(buttonStyles, 'text-white bg-blue') : classnames(buttonStyles, 'text-blue bg-white')}
                                    >
                                        {button.name}
                                    </Button>
                                )
                            })}
                        </div>
                    </Fade>
                </div>
                <Fade bottom delay={350}>
                    <div className='md:flex justify-between flex-wrap'>
                        {visitorsItems.map((item, index) => {
                            return(
                                <div className='group w-full md:w-2/4 lg:w-1/4 lg:max-w-260 h-300 flex flex-col items-center justify-start pt-22 shadow-button bg-white hover:bg-sky transition duration-300 ease-in-out mb-15 md:mb-0' key={item.id}> 
                                    <img src={item.image.url} className={classnames(getWidthStyles(index), widthStyle)}/>
                                    <p className='text-22-28 font-bold mt-24 capitalize group-hover:text-white'>{item.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </Fade>
            </div>
        </div>
    )
}
export default VisitorsSection