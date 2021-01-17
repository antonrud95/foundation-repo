import Link from "next/link";
import Fade from 'react-reveal/Fade';
import Button from './button'

const CommunicateSection = ({uppertitle, title, text, button, image, underimage, communicateItems}) => {
    return(
        <div className='container max-w-1176 mx-auto px-15 py-50 xl:py-110'>
            <div className='md:flex justify-between'>
                <div className='md:max-w-456'>
                    <Fade bottom>
                        <h5 className='text-22-34 text-lightblue mb-16 md:mb-24'>{uppertitle}</h5>
                    </Fade>
                    <Fade bottom delay={200}>
                        <h2 className='text-40-40 lg:text-56-56 mb-16 md:mb-sm tracking-h2 md:max-w-425'>{title}</h2>
                    </Fade>
                    <Fade bottom delay={250}>
                        <p className='text-24-34 mb-sm md:mb-40'>{text}</p>
                    </Fade>
                    <Fade bottom delay={300}>
                        <Button 
                            type={button.type}
                            link={button.link}
                            additionalClassName={'text-white text-18-18 bg-blue py-15 px-28 shadow-button capitalize rounded-2px mb-40'}
                        >
                            {button.name}
                        </Button>
                    </Fade>
                </div>
                <Fade bottom delay={350}>
                    <div>
                        <img src={image.url} className='md:max-w-425'/>
                        <p className='text-14-22 text-lowertitle text-center pt-15'>{underimage}</p>
                    </div>
                </Fade>
            </div>
            <span className='block w-150 h-1 bg-dark opacity-10 mt-35'/>
            <Fade bottom delay={400}>
                <div className='pt-40 md:flex justify-between'>
                    {communicateItems.map((item, index) => {
                        return(
                            <div key={item.id} className='mb-32 md:w-32% xl:w-4/12 lg:max-w-360'>
                                <div>
                                    <p className='text-18-26'><span className='text-18-26 font-bold mr-4'>{item.title}</span>{item.text}</p>
                                </div>
                                <Link href={item.navlink.href}>
                                    <a className='text-18-26 font-bold text-sky underline mt-4'>
                                        {item.navlink.link}
                                    </a>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </Fade>
        </div>
    )
}
export default CommunicateSection