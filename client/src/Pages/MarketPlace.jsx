import BookCard from '@/Components/BookCard';
import { Book } from 'lucide-react';
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useEffect } from 'react';



const MarketPlace = () => {
    const [Books, setBooks] = useState([]);

useEffect(() => {
  setBooks(dummy_data);
}, []); // 

    const dummy_data = [
        {
            "id": 1,
            "title": "Modern Farming Techniques",
            "author": "John Green",
            "description": "A comprehensive guide to modern sustainable farming methods and innovations.",
            "image_url": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
            "category": "Farming",
            "price": 25.99
        },
        {
            "id": 2,
            "title": "Organic Horticulture",
            "author": "Lisa Brown",
            "description": "Learn the essentials of organic gardening and horticultural practices.",
            "image_url": "https://images.unsplash.com/photo-1606761562274-95df5eb6f786",
            "category": "Horticulture",
            "price": 19.99
        },
        {
            "id": 3,
            "title": "Agro-tech Innovations",
            "author": "Michael Foster",
            "description": "Explore the latest technological advancements in agriculture and smart farming.",
            "image_url": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b",
            "category": "Technology",
            "price": 29.99
        },
        {
            "id": 4,
            "title": "Soil Health and Fertility",
            "author": "Anita Sharma",
            "description": "A practical guide to maintaining soil health and increasing crop yield naturally.",
            "image_url": "https://images.unsplash.com/photo-1524594157360-1a91a9a9b5f4",
            "category": "Agronomy",
            "price": 22.50
        },
        {
            "id": 5,
            "title": "Pest Management in Crops",
            "author": "Rajesh Kumar",
            "description": "Techniques and strategies to control pests in crop fields safely and efficiently.",
            "image_url": "https://images.unsplash.com/photo-1587394813513-3499d1b1fce4",
            "category": "Crop Protection",
            "price": 18.75
        },
        {
            "id": 2,
            "title": "Organic Horticulture",
            "author": "Lisa Brown",
            "description": "Learn the essentials of organic gardening and horticultural practices.",
            "image_url": "https://images.unsplash.com/photo-1606761562274-95df5eb6f786",
            "category": "Horticulture",
            "price": 19.99
        },
        {
            "id": 3,
            "title": "Agro-tech Innovations",
            "author": "Michael Foster",
            "description": "Explore the latest technological advancements in agriculture and smart farming.",
            "image_url": "https://images.unsplash.com/photo-1518609878373-06d740f60d8b",
            "category": "Technology",
            "price": 29.99
        },
        {
            "id": 4,
            "title": "Soil Health and Fertility",
            "author": "Anita Sharma",
            "description": "A practical guide to maintaining soil health and increasing crop yield naturally.",
            "image_url": "https://images.unsplash.com/photo-1524594157360-1a91a9a9b5f4",
            "category": "Agronomy",
            "price": 22.50
        },
        {
            "id": 5,
            "title": "Pest Management in Crops",
            "author": "Rajesh Kumar",
            "description": "Techniques and strategies to control pests in crop fields safely and efficiently.",
            "image_url": "https://images.unsplash.com/photo-1587394813513-3499d1b1fce4",
            "category": "Crop Protection",
            "price": 18.75
        }
    ]


  return (
    <main className='bg-base-300 w-full h-full'>
        <section className="Market grid sm:grid-cols-2 gap-4 p-4 grid-cols-1">
            {Books.map((book, idx) =>(
                <BookCard  title={book.title} author={book.author} desc={book.description}key={idx} img={book.image_url}/>
            ))}
        </section>
    </main>
  )
}

export default MarketPlace