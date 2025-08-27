import PlantCard from '@/Components/PlantCard';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [info, setInfo] = useState([]);
  const navigate = useNavigate(); 
  const handleFetch = async () => {
    try{
      const res = await fetch('http://127.0.0.1:5000/api/app/home');

      if (!res.ok) {
        console.log(res);
        toast.error('Unscessfull attempt at getting data')
      }
      const data = await res.json()
      if (data.error) {
        return toast.error('Unsucessfull')
      }

      console.log(data);
      const plant = data.info;
      toast.success('success');
      setInfo(plant);
    }
    catch (e) {
      console.log('error', e)
      toast.error('Failed to Fetch data')
    }
      
    }
    const handleClick = (plant) => {
      navigate(`/get_plant/${plant.id}`, {state:{plant}})
    }

    useEffect(() => {
      handleFetch()
    }, [])

  return (
    <main className='bg-base-300 w-full h-full'>
        <section className="Popular p-4">
          <h1 className='text-3xl font-black mb-4'>Popular Plants ☘️</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {info.map((card, idx) => (
            <PlantCard key={idx} title={card.common_name} img={card.image_url} synonym={card.synonyms[0]} genus={card.genus} onclick={() => handleClick(card)}/>
          ))}
          </div>
        </section>
    </main>
  )
}
export default HomePage