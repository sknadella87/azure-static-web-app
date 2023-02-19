import TextBlock from '../components/TextBlock'
import FileAlerts from '../components/FileAlerts'
import Button from '../components/Button'
import Image from 'next/image'
const Hero= ({title}) => {
  const isResourcePage =
  typeof window === 'undefined' ||
  window.location.pathname === '/'
    return (
      <div className="shadow-lg">
          <div className="flex max-w-screen-lg m-auto py-[80px]">  <div>
        <TextBlock title="Intake Process"/>
        {isResourcePage && 
        <Button><Image
          data-cy="VG upload logo"
          onClick={() => Router.push('/')}
          src={'../../icons/upload-icon-white.svg'}
          alt="VG Upload Logo"
          width={20}
          height={20}
          className="cursor-pointer"
        />
       <span className="px-4"> Upload File </span></Button>}
       </div>
         
        </div>
        </div>
    
    )
  }
  export default Hero