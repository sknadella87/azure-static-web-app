import classNames from "classnames"

const mappedBg = {
  approved: 'green-primary',
  pending: '#E9B757',
  progress: '#785C94',
  archived: '#CECED1',
}

const Tags = ({status}) => {
    return (
      <div className={classNames("w-full rounded-full text-center px-4", `bg-${mappedBg[status.toLowerCase()]}`)}>
        {status}
     </div>
    )
  }
  export default Tags