
import Link from 'next/link'
const LinkSecondaryContainer = ({subtitle,title, link}) =>{
    return(
        <div className="bg-white p-12  shadow-[0px_4px_8px_rgba(0,0,0,0.25)] h-[672px] w-96 m-auto max-w-screen-lg">
          <h3>{title}</h3>
       
            <h5>{subtitle}</h5>
          <Link className="underline text-purple-primary leading-6 py-4" href={'./'}>{link}</Link>
          <Link className="underline text-purple-primary leading-6 py-4" href={'./'}>{link}</Link>
          </div> 
      
    );
}
export default LinkSecondaryContainer