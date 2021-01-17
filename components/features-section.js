import {useState} from 'react'
import Fade from 'react-reveal/Fade';

const FeaturesSection = ({main, leftimage, featureItems, dropItems}) => {
    const [dropdown, setDropdown] = useState(false)
    const [getIndex, setGetIndex] = useState()
    return(
        <div className='container mx-auto max-w-1440 relative md:py-35 lg:py-70'>
            <Fade bottom delay={400}>
                <div className='hidden md:block max-w-297 lg:max-w-555 xl:max-w-700 absolute top-35 right-0 lg:top-70'>
                    <img src={main.url}/>
                </div>
            </Fade>
            <div className='hidden xl:block max-w-90 absolute left-0 top-258'>
                <img src={leftimage.url}/>
            </div>
            <div className='container mx-auto px-15 max-w-1176 lg:pb-131'>
                <div className='md:hidden'>
                    {featureItems.map((item, index) => {
                        return(
                            <div key={item.id} className='border-b border-grey pt-40'>
                                <Fade bottom>
                                    <h5 className='text-22-34 text-green mb-16'>{item.uppertitle}</h5>
                                    <h2 className='text-40-40 tracking-title mb-15'>{item.title}</h2>
                                    <p className='text-24-34 mb-sm'>{item.text}</p>
                                    <img src={item.image.url} className='mx-auto'/>
                                    <p className='text-14-22 text-center text-lowertitle mt-xs mb-40'>{item.lowertitle}</p>
                                </Fade>
                            </div>
                        )
                    })}
                </div>
                <div className='hidden md:block max-w-470'>
                    <Fade bottom>
                        <h5 className='text-22-34 text-green mb-24'>Features</h5>
                    </Fade>
                    <Fade bottom delay={200}>
                        <h2 className='text-56-56 tracking-h2 mb-sm'>
                            Easily find leads and customers
                        </h2>
                    </Fade>
                    <Fade bottom delay={300}>
                        <p className='text-24-34 mb-40'>
                            Send one-off and automated email, push, and in-app messages to people. Create better stories.
                        </p>
                    </Fade>
                </div>
                <Fade bottom delay={350}>
                    <div className='hidden md:block'>
                        {dropItems.map((item, index) => {
                            const dropshow = () => {
                                setDropdown(!dropdown)
                                setGetIndex(index)
                            }
                            return(
                                <div key={item.id} className='border-b border-dark border-opacity-15 max-w-456 mb-xs pb-20 cursor-pointer' onClick={dropshow}>
                                    <div className='flex items-center'>
                                        <img src={item.picture.url} className='mr-15'/>
                                        <h4 className='text-22-26 text-sky'>{item.title}</h4>
                                    </div>
                                    <div className={!dropdown || index !== getIndex ? 'hidden' : 'block'}>
                                        <p className='text-18-26 pt-8'>
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Fade>
            </div>
        </div>
    )
}
export default FeaturesSection