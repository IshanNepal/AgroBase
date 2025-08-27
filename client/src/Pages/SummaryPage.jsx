import ExtraSummaryCard from '@/Components/ExtraSummaryCard';
import PlantCard from '@/Components/PlantCard';
import React, {useState } from 'react'
import { useLocation } from "react-router-dom";

const SummaryPage = () => {
  const location = useLocation();
  const [plant, setPlant] = useState(location.state?.plant || null);

  return (
    <main className='bg-base-300 w-full h-screen'>
       <section className='flex justify-center pt-40'>
        <ExtraSummaryCard title={plant.common_name} img={plant.image_url} synonym={plant.synonyms[0]} genus={plant.genus} />
       </section>
       <section className='flex justify-center pt-40'>
        
       </section>
    </main>
  )
}
export default SummaryPage;