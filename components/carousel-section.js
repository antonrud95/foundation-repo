import CarouselBody from './carousel'
import classnames from 'classnames'
import Fade from 'react-reveal/Fade';

const CarouselSection = ({images, baloon, title, carouselItems}) => {
    const logoStyles = 'mb-1 min-h-93 w-32 flex items-center justify-center md:w-2/12 bg-white md:min-h-75'
    const generateClassnames = (index) => {
        switch (index) {
          case 0:
            return 'max-w-77 max-h-55 md:max-w-105 max-h-75'
            break
          case 1:
            return 'w-78 h-21 md:w-110 h-30'
            break
          case 2:
            return 'max-w-35 max-h-40 md:max-w-44 max-h-50'
            break
          case 3:
            return 'max-w-77 max-h-13 md:max-w-153 max-h-26'
            break
          case 4:
            return 'max-w-49 max-h-28 md:max-w-76 max-h-43'
            break
          case 5:
            return 'max-w-76 max-h-25 md:max-w-127 max-h-42'
            break
          default:
            break
        }
    }
    return(
        <div className='container max-w-1440 mx-auto border-b border-grey'>
            <div className='container mx-auto max-w-1176'>
                <div className='flex items-center flex-wrap justify-between bg-grey md:bg-white md:pt-45 md:pb-77'>
                    <Fade bottom>
                        {images.map((logo, index) => {
                            return(
                                <div className={logoStyles} key={logo.id}>
                                    <div className={classnames(generateClassnames(index))}>
                                        <img src={logo.url} className='w-full h-full'/>
                                    </div>
                                </div>
                            )
                        })}
                    </Fade>
                </div>
                <Fade bottom delay={200}>
                    <div className='px-15 text-center overflow-hidden'>
                        <h2 className='text-center text-sky font-bold text-24-30 mb-sm'>{title}</h2>
                        <CarouselBody>
                            {carouselItems.map((item, index) => {
                                return(
                                    <div className='text-center max-w-750' key={item.id}>
                                        <p className='text-24-34 mb-35'>{item.text}</p>
                                        <p className='text-16-24 font-bold'>{item.name}</p>
                                        <p className='text-16-24'>{item.position}</p>
                                    </div>
                                )
                            })}
                        </CarouselBody>
                    </div>
                </Fade>
            </div>
            <div className='px-15 xl:px-0 md:max-w-273 ml-auto negative'>
                <img src={baloon.url} className='mt-100'/>
            </div>
        </div>
    )
}
export default CarouselSection