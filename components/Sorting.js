
import Image from 'next/image'
import useToggle from '../lib/hooks/useToggle';

const Sorting = ({ order, setOrder }) => {
    const { open, toggle, containerProps } = useToggle('sorting');

    const filters = [{
        filter: "Status",
        filterKey: 'status',
        options:[{
            label: 'Approved',
            value: 'Approved'
        }, {
            label: 'Pending',
            value: 'Pending'
        }, {
            label: 'Archieved',
            value: 'Archieved'
        }, 
            
        ]},
           {
               filter:"Data Source",
               filterKey:"source",
               options:[
                {
                   label:"Thermal First",
                   value:"Thermal"
               },
               {
                label:"Mass Properties First",
                value:"Mass Properties"
            },
            {
                label:"Propulsion First",
                value:"Propulsion"
            },
    
           ]},
     
        {
            filter:"Loads Model",
            filterKey: 'modals',
            options:[
            {
                label:"QSIM First",
                value:"QSIM"
            },
            {
                label:"Thor First",
                value:"Thor"
            },  
        ]}
    ]

    console.log({order})

    const orderBy = (order, option) => {
        console.log({order, option})
        setOrder({ [order]: option });
        toggle();
    }

  return (
    <div className="relative" {...containerProps}>

        <div className="flex" onClick={toggle}>Sort By         
        <Image
                data-cy="chevron logo"
                src={'../../icons/chevron.svg'}
                alt="VG Logo"
                width={20}
                height={20}
                className="cursor-pointer"
        /></div>
           
        {open && (
            <div className="w-64 absolute right-0 bg-white">
                {filters.map(({ filter, filterKey, options })=>(
                    <div key={filterKey}>
                        <h3 className="text-base leading-6 p-[8px] mt-2">{filter}</h3>
                        <div className=" ">
                            {options.map(({ label, value }) => (
                                <div
                                    key={label}
                                    className="flex p-[8px] border-b-2  "
                                    onClick={() => orderBy(filterKey, value)}>
                                    {label}
                                    {order && value === order[filterKey] && (
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
export default Sorting