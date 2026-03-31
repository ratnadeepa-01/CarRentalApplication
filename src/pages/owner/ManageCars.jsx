import React, { useEffect, useState } from 'react'
import { dummyCarData } from '../../assets/assets';
import Title from '../../components/Title';

const ManageCars = () => {

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
        </table>
      </div>
    </div>
  )
}

export default ManageCars