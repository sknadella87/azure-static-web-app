
import Hero from '../components/Hero'
import Card from '../components/Card'
import LinkContainer from '@/components/LinkContainer'
import LinkSecondaryContainer from '../components/LinkSecondaryContainer'


export default function Resource({title,children}) {
 

  return (

    <div>
      <Hero title="Resource Hub"/>
      <h2 className="max-w-screen-lg m-auto uppercase py-[40px]"> Links and Tools Library</h2>

    <div className="flex  max-w-screen-lg m-auto">
      <div class="flex-col">
     <LinkContainer subtitle="Loads Inputs data Repository" title="Intake Process" content="Explore input data for key Loads models. Review, inquiry & download  existing files, or upload and approve new ones." link="Explore Intake Process"/>
     <LinkContainer subtitle="Downselect" title="Potato Plots Jupyter Notebook" content="Use this tool to create potato plot visualization and uncover the relationships between different load cases. Streamline the process of identifying critical cases across a whole ship." link="Start Downselect Process"/>
     <LinkContainer subtitle="DATA ACCESS" title="Azure DevOps VG Instance" content="Centralized access point for data pipelines, cloud data storage, and tools" link="Access Azure DevOps"/>
     </div>
     <LinkSecondaryContainer  className=" flex-row" subtitle="Onboarding/Ops" title="Other Links and Tools" link="Loads end-to-end process flow" />

     </div>

      <div className="thin-border"></div>
      <div className="max-w-screen-lg m-auto">
      <h3 className=" uppercase py-[40px]">User Guides</h3>
      <p className="mb-12">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <div className="grid grid-cols-2 ">
    <Card title="Azure User Guide">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet pharetra sem, in vestibulum urna. Nulla porttitor posuere</Card>
    <Card title="Potato Plots User Guide">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet pharetra sem, in vestibulum urna. Nulla porttitor posuere</Card>
    <Card title="Quality Engineering User Guide">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet pharetra sem, in vestibulum urna. Nulla porttitor posuere</Card>
    <Card title="VM & MATLAB User Guide">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet pharetra sem, in vestibulum urna. Nulla porttitor posuere</Card>
    <Card title="Data User Guide">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet pharetra sem, in vestibulum urna. Nulla porttitor posuere</Card>
    <Card title="Data User Guide">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet pharetra sem, in vestibulum urna. Nulla porttitor posuere</Card>

    </div>
    

      </div>
   
    </div>
  )
}
