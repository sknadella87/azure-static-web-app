
import React, {useState,useEffect} from 'react'
import Hero from '../components/Hero'
import Table from '../components/Table'
import {tableData} from '../data'
import Sorting  from '../components/Sorting'
import Filter from '../components/Filter'

export default function Home() {
  const [viewAll, setViewAll] = useState(false);
  const [filter, setFilter] = useState();
  const [order, setOrder] = useState();

  const columns = [
    {field:"name",header:"File Name"},
    {field:"status",header:"Status"},
    {field:"submitter",header:"Submitter"},
    {field:"date",header:"Date"},
    {field:"version",header:"Version"},
    {field:"source",header:"Data Source"},
    {field:"program",header:"Program"},
    {field:"modals",header:"Loads Modal"},
    {field:"file",header:"File Type"},
  ]

  const toggleViewAll = () => setViewAll(viewAll => !viewAll)

  return (

    <div>
      <Hero title="Intake Process"/>
      <h2 className="uppercase max-w-screen-lg m-auto pt-[80px] pb-[16px]">File Library</h2>
      <div className="max-w-screen-lg m-auto flex mb-4 justify-end gap-4">
      <Filter filter={filter} setFilter={setFilter} />
      <Sorting order={order} setOrder={setOrder} />
      </div>

     <Table
      data={tableData}
      viewAll={viewAll}
      filter={filter}
      order={order}
      columns={columns}
      toggleViewAll={toggleViewAll}
      />
    
    </div>
  )
}
