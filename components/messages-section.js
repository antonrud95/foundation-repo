import Fade from 'react-reveal/Fade';

const MessagesSection = ({image, underimage, uppertitle, title, text, picture, name, position}) => {
    return(
        <div className='bg-messages-bg py-50'>
            <div className='container mx-auto px-15 max-w-1176 md:flex'>
                <Fade bottom>
                    <div>
                        <img src={image.url} className='md:max-w-425 xl:ml-sm xl:mt-xs'/>
                        <p className='hidden md:block text-14-22 text-lowertitle text-center'>{underimage}</p>
                    </div>
                </Fade>
                <div className='md:max-w-519 md:ml-auto'>
                    <Fade bottom delay={200}>
                        <h5 className='text-22-34 text-orange mb-16 md:mb-24 pt-30 md:pt-0'>{uppertitle}</h5>
                    </Fade>
                    <Fade bottom delay={250}>
                        <h2 className='text-40-40 lg:text-56-56 mb-16 md:mb-sm tracking-h2'>{title}</h2>
                    </Fade>
                    <Fade bottom delay={300}>
                        <p className='text-24-34 mb-45'>{text}</p>
                    </Fade>
                    <Fade bottom delay={350}>
                        <div className='bg-white py-30 px-20 shadow-button border-b-3 border-blue'>
                            <p className='text-20-28 mb-25'>
                                “Great widgets. Great selection. Great design and<span className='font-bold'> easy to implement.</span> Definitely a huge time saver for a web developer!”
                            </p>
                            <div className='flex'>
                                <div className='mr-11'>
                                    <img src={picture.url}/>
                                </div>
                                <div>
                                    <p className='text-16-22 font-bold'>{name}</p>
                                    <p className='text-16-22'>{position}</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}
export default MessagesSection