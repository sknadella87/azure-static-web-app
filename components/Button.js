export default function Button({ children}) {
  return (
      <button
        className= "bg-[linear-gradient(90deg,#BF08C0,#6F19F7)] px-6 py-3 rounded-full text-white text-base flex mt-6"
      >
     {children}
      </button>
  
  )
}
