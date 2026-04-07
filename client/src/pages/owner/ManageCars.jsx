import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets';
import Title from '../../components/owner/Title';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const ManageCars = () => {

  const { isOwner, axios, currency } = useAppContext()
  const [cars, setCars] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(null); // stores carId to delete

  const fetchOwnerCars = async ()=>{
    try {
      const {data} = await axios.post('/api/owner/cars')
      if(data.success){
        setCars(data.cars)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const toggleAvailability = async (carId) => {
    try {
      const {data} = await axios.post('/api/owner/toggle-car', {carId})
      if(data.success){
        fetchOwnerCars()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const deleteCar = async () => {
    try {
      const {data} = await axios.post('/api/owner/delete-car', {carId: confirmDelete})
      if(data.success){
        fetchOwnerCars()
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setConfirmDelete(null)
    }
  }

  useEffect(()=>{
    isOwner && fetchOwnerCars()
  },[isOwner])

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
            {cars.map((car,index)=>(
              <tr key={index} className='border-t border border-gray-200'>

                <td className='p-3 flex items-center gap-3'>
                  <img src={car.image} alt="" className='h-12 w-12 aspect-square
                  rounded-md object-cover' />
                  <div className='max-md:hidden'>
                    <p className='font-medium'>{car.brand} {car.model}</p>
                    <p className='text-xs text-gray-500'>{car.seating_capacity} . {car.transmission}</p>
                  </div>
                </td>
                <td className='p-3 max-md:hidden'>
                  {car.category}
                </td>
                <td className='p-3'>{currency}{car.pricePerDay}/day</td>
                <td className='p-3 max-md:hidden'>
                  <span className={`px-3 py-1 rounded-full text-xs ${car.isAvailable ? 'bg-green-100' : 'bg-red-100 text-red-500'}`}>
                    {car.isAvailable ? 'Available' : 'Unavailable'}
                  </span>
                </td>

                <td className='flex items-center p-3'>
                  <img onClick={()=>toggleAvailability(car._id)} src={car.isAvailable ? assets.eye_close_icon : assets.eye_icon} 
                  alt="" className='cursor-pointer'/>
                  <img onClick={()=>setConfirmDelete(car._id)} src={assets.delete_icon} 
                  alt="" className='cursor-pointer'/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {confirmDelete && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm'>
          <div className='bg-white rounded-xl shadow-2xl p-6 w-full max-w-sm mx-4 animate-fadeIn'>
            <div className='flex flex-col items-center text-center gap-3'>
              <div className='w-14 h-14 rounded-full bg-red-100 flex items-center justify-center'>
                <img src={assets.delete_icon} alt='delete' className='w-6 h-6'/>
              </div>
              <h2 className='text-lg font-semibold text-gray-800'>Delete Car</h2>
              <p className='text-sm text-gray-500'>Are you sure you want to remove this car from the platform? This action cannot be undone.</p>
            </div>
            <div className='flex gap-3 mt-6'>
              <button
                onClick={() => setConfirmDelete(null)}
                className='flex-1 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all text-sm font-medium'
              >
                Cancel
              </button>
              <button
                onClick={deleteCar}
                className='flex-1 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-all text-sm font-medium'
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default ManageCars