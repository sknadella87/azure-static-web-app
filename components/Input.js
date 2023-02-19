
const Input = () => {
  return (
    <div className={input.input}>
      <label htmlFor="sort">text:</label>
      <form>
        <input
          type="text"
          className={input.inputfield}
          value="Last days remining"
        />
      </form>
    </div>
  )
}
export default Input