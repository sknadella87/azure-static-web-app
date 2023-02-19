
import Link from 'next/link'
const LinkContainer = ({subtitle,title,content,link}) =>{
    return(
        <div className="w-1/2">
            <div className="thin-border"></div>
          <h5 className="pt-2">{subtitle}</h5>
       
            <h3 className="py-2">{title}</h3>
            <p className="py-4">{content}</p>
          <Link className="underline text-purple-primary leading-6 py-4" href={'./'}>{link}</Link>
        
        </div>
    );
}
export default LinkContainer