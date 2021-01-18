import Image from 'next/image'
import Button from './button'
import Fade from 'react-reveal/Fade';

const TrialSection = ({image, title, text, button, placeholder, undertext, link}) => {
    return(
        <div className='bg-grey py-50 lg:py-77'>
            <div className='container mx-auto px-15 lg:max-w-960 md:flex'>
                <Fade bottom>
                    <div className='max-w-230 md:max-w-273 mx-auto mb-40 md:mb-0 xl:m-0 xl:min-w-270'>
                        <Image src={image.url} width={270} height={296}/>
                    </div>
                </Fade>
                <Fade bottom delay={300}>
                    <div className='md:max-w-470 md:pl-40 xl:ml-100 xl:pl-0 xl:max-w-full'>
                        <h2 className='text-40-40 mb-16'>{title}</h2>
                        <p className='text-24-34 mb-40 md:mb-25'>{text}</p>
                        <div className='mb-xxs xl:flex'>
                            <input placeholder={placeholder} className='w-full text-center mb-11 xl:mb-0 text-18-18 py-15 text-text rounded-2px border border-work xl:min-w-385 xl:mr-xxs'/>
                            <Button 
                                type={button.type} 
                                link={button.link}
                                additionalClassName={'text-white text-18-18 bg-blue py-15 px-28 shadow-button capitalize rounded-2px w-full'}
                            >
                                {button.name}
                            </Button>
                        </div>
                        <p className='text-14-22 text-lowertitle'>{undertext}<span className='text-blue underline'>{link}</span></p>
                    </div>
                </Fade>
            </div>
        </div>
    )
}
export default TrialSection