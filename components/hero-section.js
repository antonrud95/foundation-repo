import Button from '../components/button';
import Fade from 'react-reveal/Fade';
import classnames from 'classnames'

const Hero = ({ title, text, buttons, image }) => {
  const generalStyles = 'w-full mb-15 md:mb-0 md:max-w-160 shadow-button capitalize rounded-2px text-18-18 py-15 px-28'
    return (
      <div className='pt-100 pb-35 lg:pb-126 lg:pt-180 bg-hero'>
        <div className='container mx-auto max-w-1410 relative'>
          <div className='container mx-auto px-15 max-w-1176'>
            <div className='xl:max-w-700 relative z-300'>
              <Fade bottom>
                <h1 className='text-dark text-h1 mb-24 lg:mb-32'>{title}</h1>
              </Fade>
              <Fade bottom delay={200}>
                <p className='text-dark text-24-34 mb-32 lg:mb-58 xl:max-w-456'>{text}</p>
              </Fade>
              <Fade bottom delay={300}>
                <div>
                  {buttons.map((button, index) => (
                    <Button 
                      type={button.type} 
                      link={button.link} 
                      key={button.id}
                      additionalClassName={index === 0 ? classnames(generalStyles, 'text-white bg-blue mr-xxs') : classnames(generalStyles, 'text-blue bg-white')}
                    >
                      {button.name}
                    </Button>
                  ))}
                </div>
              </Fade>
            </div>
          </div>
          <div className='hidden 2xl:block 2xl:absolute top-0 right-25 2xl:max-w-796'>
            <img src={image.url}/>
          </div>
        </div>
        <div className='mt-15 md:mt-sm xl:absolute top-160 right-25 xl:max-w-796 2xl:hidden'>
            <img src={image.url}/>
        </div>
      </div>
    );
  }
  
  export default Hero;