import SummaryCard from '@/Components/Summary';
import React, {useState } from 'react'
import { useLocation } from "react-router-dom";
import ExtraSummaryCard from '@/Components/ExtraSummaryCard';

const SummaryPage = () => {
  const location = useLocation();
  const [plant] = useState(location.state?.plant || null);

  return (
    <main className='bg-base-300 w-full h-full'>
       <section className='flex justify-center pt-40'>
        <SummaryCard title={plant.common_name} img={plant.image_url} synonym={plant.synonyms[0]} genus={plant.genus} />
       </section>
       <section className='flex justify-center p-4 '>
          <ExtraSummaryCard bill={plant.bibliography} year={plant.year} rank={plant.rank} author={plant.author} sciname={plant.scientific_name} synonyms={plant.synonyms}/>
       </section>
    </main>
  )
}

export default SummaryPage;