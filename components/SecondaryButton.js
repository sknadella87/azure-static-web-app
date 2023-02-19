import classNames from "classnames";

export default function SecondaryButton({ children, onClick, className }) {
    return (
        <button onClick={onClick}
          className={classNames("bg-white border-2 flex border-magneta-primary rounded-full mb-4", className)}
        >
        <span className="text-black text-base px-6 py-3">{children}</span>
      </button>
    )
  }