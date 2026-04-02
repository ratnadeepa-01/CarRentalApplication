import React, { useEffect, useState } from 'react'
import { assets, dummyCarData } from '../../assets/assets';
import Title from '../../components/owner/Title';

const ManageCars = () => {

  const currency = import.meta.env.VITE_CURRENCY

  const [cars, setCars] = useState([]);

  const fetchOwnerCars = async ()=>{
    setCars(dummyCarData);
  }

  useEffect(()=>{
    fetchOwnerCars()
  },[])
  return (
    <div className='pxx-4 pt-10 md:px-10 w-full'>

      <Title title='Manage Cars' subTitle='View all listed cars, update their
      details, or remove them from the booking platform.'/>

      <div className='max-w-3xl w-full rounded-md overflow-hidden border
      border-gray-200 mt-6'>
        <table className='w-full border-collapse text-left text-sm text-gray-600'>
          <thead className='text-gray-500'>
            <tr>
              <th className='p-3 font-medium'>Car</th>
              <th className='p-3 font-medium max-md:hidden'>Category</th>
              <th className='p-3 font-medium'>Price</th>
              <th className='p-3 font-medium max-md:hidden'>Status</th>
              <th className='p-3 font-medium'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((cars,index)=>(
              <tr key={index} className='border-t border border-gray-200'>

                <td className='p-3 flex items-center gap-3'>
                  <img src={cars.image} alt="" className='h-12 w-12 aspect-square
                  rounded-md object-cover' />
                  <div className='max-md:hidden'>
                    <p className='font-medium'>{cars.brand} {cars.model}</p>
                    <p className='text-xs text-gray-500'>{cars.seating_capacity} . {cars.transmission}</p>
                  </div>
                </td>
                <td className='p-3 max-md:hidden'>
                  {cars.category}
                </td>
                <td className='p-3'>{currency}{cars.pricePerDay}/day</td>
                <td className='p-3 max-md:hidden'>
                  <span className={`px-3 py-1 rounded-full text-xs ${cars.isAvailable ? 'bg-green-100' : 'bg-red-100 text-red-500'}`}>
                    {cars.isAvailable ? 'Available' : 'Unavailable'}
                  </span>
                </td>

                <td className='flex items-center p-3'>
                  <img src={cars.isAvailable ? assets.eye_close_icon : assets.eye_icon} 
                  alt="" className='cursor-pointer'/>
                  <img src={assets.delete_icon} 
                  alt="" className='cursor-pointer'/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageCars