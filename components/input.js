import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

const Input = ({text, type}) => {
    return(
        <div className='flex text-lg items-center border-white border-b-2 w-full md:max-w-297 max-h-50 pb-20 mb-xs md:mb-58 lg:mb-0 lg:mr-58'>
            <FontAwesomeIcon icon={faCircle} className='text-white mr-25'/>
            <input placeholder={text} type={type} className='bg-transparent w-full focus:outline-none text-18-24 text-white'/>
        </div>
    )
}
export default Input