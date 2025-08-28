import PlantCard from '@/Components/PlantCard';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import  Spinner  from '../assets/bouncing-squares (1).svg';

const HomePage = () => {
  const [info, setInfo] = useState([]);
  const navigate = useNavigate(); 
  const [loading, setLoading] = useState(false);
  const handleFetch = async () => {
    try{
      setLoading(true)
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
      const limited_plant = plant.slice(0,8)
      setInfo(limited_plant);
    }
    catch (e) {
      console.log('error', e)
      toast.error('Failed to Fetch data')
    }
    finally{
      setLoading(false)
    }
      
    }
    const handleClick = (plant) => {
      navigate(`/get_plant/${plant.id}`, {state:{plant}})
    }

    useEffect(() => {
      handleFetch()
    }, [])

  return (
<main className='bg-base-300 w-full h-screen'>
  {loading ? (
    <div className="flex justify-center items-center h-64">
      <img src={Spinner} alt="Loading..." className="w-16 h-16" />
    </div>
  ) : (
    <section className="Popular p-4">
      <h1 className='text-3xl font-black mb-4'>Popular Plants ☘️</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {info.map((card, idx) => (
          <PlantCard
            key={idx}
            title={card.common_name}
            img={card.image_url}
            synonym={card.synonyms[0]}
            genus={card.genus}
            onclick={() => handleClick(card)}
          />
        ))}
      </div>
    </section>
  )}
</main>)
}
export default HomePage