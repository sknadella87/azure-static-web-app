const Dropdown = ({ value, onChange, options = [],placeholder,name}) => (
  <select className="w-full p-2 block border-b-2 border-purple-secondary mb-2 font-bold">
    {options.map(option => <option key={option}>{option}</option>)}
  </select>
)

const textInputs = ['text', 'email', 'number'];

const Input = (props) => {
  const { label, type = 'text' } = props;
  console.log({ props })

  return (
    <div>
      <label>{label}
        {type === 'dropdown' && (<Dropdown {...props} /> ) }
        {type === 'textarea' && (<textarea {...props} className="w-full p-2 block border-2 border-purple-secondary my-4 h-48" />)}
        {textInputs.includes(type) && (
          <input {...props} className="w-full p-2 block border-b-2 border-purple-secondary mb-4" />
        )}
      </label>
    </div>
  )
}
export default Input