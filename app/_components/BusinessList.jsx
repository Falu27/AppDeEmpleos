import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function BusinessList({businessList, title}) {
  return (
    <div className='mt-5'>
        <h2 className='text-bold text-[22px]'>{title}</h2>
        <div className='grid grid-cols-2 md:grid-cols-3
        lg:grid-cols-4 gap-6 mt-5'>
            {businessList.length>0? businessList.map((business, index)=>(
                <div key={index} 
                className='mb-4 shadow-md rounded-lg hover:shadow-yellow-500 hover:shadow-lg shadow-primary hover:scale-105 transition-all ease-out'>
                    <Image src={business?.images[0].url} alt={business.name}  width={500} height={200} className='h-[150px] md:h-[200px] object-cover rounded-lg' 
                    />
                    <div className='flex flex-col items-baseline p-3 gap-1'>
                      <h2 className='p-1 bg-primary text-black rounded-full px-2 text-[12px]'>{business.category.name}</h2>
                      <h2 className='font-bold text-lg pt-1'>{business.name}</h2>
                      <h2 className='text-primary'>{business.contactPerson}</h2>
                      <h2 className='text-gray-300 text-sm'>{business.adress}</h2>
                      <Button className='rounded-full text-black'>Contratar</Button>
                    </div>
                </div>
            ))
          :
          [1,2,3,4,5,6].map((item, index)=>(
            <div key={index} className='w-full h-[300px] bg-slate-600 rounded-lg animate-pulse'>
              </div>
          ))
}
          <div>

            </div>
          
        </div>
    </div>
  )
}

export default BusinessList