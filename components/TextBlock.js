
const TextBlock = ({
    subtitle,
    title,
    children = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi enim eros, varius nec porttitor quis, ornare vitae augue. Phasellus sed mi ut urna ultricies ullamcorper. Suspendisse lacus risus, gravida ut mattis eu.',
  }) => {
    return (
      <div data-cy="" className="">
        <h1 className="uppercase">{title}</h1>
        <p className="font-['mulishRegular'] w-1/2 text-gray-tertiary mt-[28px]">
          {children}
        </p>
        </div>
        
    )
  }
  
  export default TextBlock
