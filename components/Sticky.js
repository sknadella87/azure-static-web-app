import Link from 'next/link'
const Sticky = ()=>{
    return(
        <div className=" gap-4 sticky font-bold text-gray-tertiary  flex flex-col">
            <Link href="#1">Getting Started</Link>
            <Link href="#2">Basic Information</Link>
            <Link href="#3"> Communication</Link>
        </div>
    )
}
export default Sticky