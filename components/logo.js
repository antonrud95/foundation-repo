import Link from "next/link";

const Logo = ({mobile, desktop}) => {
    return (
        <>
          <div className='flex h-48 md:hidden'>
          <Link href="/">
              <a>
                <img src={mobile} className='h-full'/>
              </a>
            </Link>
          </div>
          <div className='hidden md:flex h-62'>
            <Link href="/">
                <a>
                  <img src={desktop} className='h-full'/>
                </a>
            </Link>
          </div>
        </>
    );
  }
  
  export default Logo;