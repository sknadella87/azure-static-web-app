import classNames from 'classnames'
import SecondaryButton from './SecondaryButton'

const Card = ({ children, title, subtitle, className }) => (
  <div className={classNames("bg-white p-4 mb-4 shadow-[0px_4px_8px_rgba(0,0,0,0.25)] h-72 flex flex-col", className)}>
     <h3 className="capitalize title text-left text-xl font-bold mb-8"> {title}</h3>
     <h4>{subtitle}</h4>
      <p className="flex flex-col">{children}</p>
      <SecondaryButton children="Download Guide" className="ml-auto mt-auto" />
   </div>   
)

export default Card
