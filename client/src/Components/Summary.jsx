import { Notebook, Star } from 'lucide-react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Spinner from '../assets/bouncing-squares (1).svg'; // your animated SVG

const SummaryCard = ({ img, title, genus, synonym, onclick }) => {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  const text_formatter = (text_to_be_formatted) =>
    text_to_be_formatted.split("\n\n").map(section => section.trim());

  const getPlantInfo = async (plant) => {
  const res = await fetch('http://127.0.0.1:5000/api/app/ai_info', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ plant_info: plant })
  });

  if (!res.ok) return toast.error('Res not ok!');

  const data = await res.json();

  // Safely check the structure
  const ai_message = data?.data?.choices?.[0]?.message?.content;
  if (!ai_message) {
    return toast.error('No response from AI API!');
  }

  const paragraphs = text_formatter(ai_message);
  toast.loading('Redirecting to Results');
  navigate('/results', { state: { paragraphs } });
};

  const handleClick = (plant) => getPlantInfo(plant);

  return (
    <div className="relative">
      {!loaded && (
        <div className="absolute inset-0 z-10 flex justify-center items-center bg-base-100 rounded-2xl">
          <img src={Spinner} alt="Loading..." className="w-16 h-16" />
        </div>
      )}

      <div
        className={`PlantCard bg-base-100 rounded-2xl py-4 px-3 flex justify-between items-end transform transition-opacity duration-200 shadow-sm hover:scale-105 hover:shadow-md cursor-pointer m-4 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onClick={onclick}
      >
        <div className="Main flex items-center gap-4">
          <div className="img">
            <img
              src={img}
              alt=""
              className='aspect-[16/9] object-cover rounded-md'
              onLoad={() => setLoaded(true)}
            />
          </div>
          <div className="Text">
            <h1>{title}</h1>
            <div className="SecondaryText flex flex-col text-neutral-400">
              <p>Genus: {genus}</p>
              <span>Synonym: {synonym}</span>
            </div>
          </div>
        </div>
        <div className="Other flex flex-col justify-center gap-2">
          <Star size={30} className='text-red-400' />
          <Notebook size={30} className='text-primary' onClick={() => handleClick(title)} />
        </div>
      </div>
    </div>
  );
}

export default SummaryCard;
