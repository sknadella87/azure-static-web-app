
import Image from 'next/image'
import useToggle from '../lib/hooks/useToggle';

const Filter= ({ filter, setFilter }) => {
    const { open, toggle, containerProps } = useToggle('filter');

    const filters = [{
        filter: "Program",
        options:[ 
            "Delta","Spaceship 1","Spaceship 2","White Knight 1","White Knight 2","Other"
        ]},
    ]

    const filterBy = (filter, option) => {
        console.log('filter by', filter, option)
        setFilter({ [filter.toLowerCase()]: option });
        toggle();
    }

  return (
    <div className="relative" {...containerProps}>
        <div className="flex" onClick={toggle}>Filter By         
        <Image
                data-cy="chevron logo"
                src={'../../icons/chevron.svg'}
                alt="VG Logo"
                width={20}
                height={20}
                className="cursor-pointer"
        /></div>
           
        {open && (
            <div className="w-64 absolute bg-white right-0">
                {filters.map(({ filter, options })=>(
                    <div key={filter}>
                        <h3 className="text-base leading-6">{filter}</h3>
                        <div className="">
                            {options.map(option => (
                                <div className="flex" key={option} onClick={() => filterBy(filter, option)}>
                                    {option}
                                    {option === filter && (
                                         <Image
                                         data-cy="chevron logo"
                                         src={'../../icons/check.svg'}
                                         alt="VG Logo"
                                         width={20}
                                         height={20}
                                         className="cursor-pointer ml-auto"
                                 />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}
export default Filter