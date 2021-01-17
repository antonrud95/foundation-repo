import classnames from 'classnames'

const InfoLogo = ({infoBlocks, logos}) => {
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
        <div>
            <div className='bg-grey py-45 md:py-77'>
                <div className='container mx-auto px-15 max-w-1176 md:flex'>
                    {infoBlocks.map((block, index) => {
                        return(
                            <div key={block.id} className='mb-xs md:mb-0 md:mr-sm max-w-555'>
                                <h3 className='text-dark font-bold text-22-32'>{block.titles[0].title}</h3>
                                <p className='text-dark text-22-32'>{block.texts[0].text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='bg-grey md:bg-white md:py-30'>
                <div className='mx-auto max-w-1232'>
                    <div className='flex items-center flex-wrap justify-between'>
                        {logos.map((logo, index) => {
                            return(
                                <div className={logoStyles} key={logo.id}>
                                    <div className={classnames(generateClassnames(index))}>
                                        <img src={logo.url} className='w-full h-full'/>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default InfoLogo