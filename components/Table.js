import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Tag from '../components/Tag'
import SecondaryButton from '../components/SecondaryButton'

const Field = (content, index) => [
    <Link className="underline text-purple-primary" href={'./'}>{content}</Link>,
    <Tag status={content} />
][index] || content;

const limit = 15;

const slice = (data, viewAll) => viewAll
    ? data
    : data.slice(0, limit);

const filterData = (data, filter) => {
    if (!filter) return data;
    
    const [[filterKey, filterValue]] = Object.entries(filter);

    return data.filter(row => {
        return row[filterKey] === filterValue;
    })
};

const orderMap = {
    showFirst: ['status'],
    comparison: ['dateAsc', 'dateDesc']
}

const sortData = (data, order) => {
    if (!order) return data;
    
    const [[orderKey, orderValue]] = Object.entries(order);

    console.log({orderKey, orderValue, data})

    return data.sort(a => {
        return a[orderKey] === orderValue ? -1 : 1;
    })
}

const Table = ({
    data,
    columns,
    viewAll,
    filter,
    order,
    toggleViewAll
}) => {
    const filteredData = sortData(filterData(data, filter), order);

  return (
      <div className=" max-w-screen-lg m-auto">
            <table className="w-full border-collapse text-sm">
                <thead className="border-b-purple-primary border-b-2">
                    <tr>
                        {columns.map(head=><th className="text-left p-3">{head.header}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {slice(filteredData, viewAll).map(row => <tr>
                        {columns.map((col, index)=><td className="text-left p-3">
                            {Field(row[col.field], index)}
                        </td>
                        )}
                            <span className="p-4 ml-6"> <Image
                                src="/icons/tooltip.svg"
                                alt="alert"
                                width={20}
                                height={20}
                                className=""
                            /></span>
                    </tr>
                    )}
                </tbody>
                <tfoot></tfoot>
            </table>

            {(!viewAll && filteredData.length > limit) &&
                <SecondaryButton children="Show all" onClick={toggleViewAll} className="m-auto" />
            }
            {viewAll &&
                <SecondaryButton children="Show less" onClick={toggleViewAll} className="m-auto" />
            }
        </div>
    );
};

export default Table
