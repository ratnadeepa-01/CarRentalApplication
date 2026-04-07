import React, { useState, useEffect } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import CarCard from '../components/CarCard'
import { useAppContext } from '../context/AppContext'
import { useSearchParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Cars = () => {

  const { cars, axios } = useAppContext()

  const [searchParams] = useSearchParams()

  const pickupLocation = searchParams.get('pickupLocation')
  const pickupDate = searchParams.get('pickupDate')
  const returnDate = searchParams.get('returnDate')

  const [input, setInput] = useState("")
  const [availableCars, setAvailableCars] = useState([])
  const [filteredCars, setFilteredCars] = useState([])

  const isSearchData = pickupLocation && pickupDate && returnDate

  // API call to check available cars
  const searchCarAvailability = async () => {

    try {

      const { data } = await axios.post(
        '/api/bookings/check-availability',
        { location: pickupLocation, pickupDate, returnDate }
      )

      if (data.success) {

        setAvailableCars(data.availableCars)
        setFilteredCars(data.availableCars)

        if (data.availableCars.length === 0) {
          toast("No cars available")
        }

      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  //Apply search filter
  const applyFilter = () => {

    if (input === "") {
      setFilteredCars(availableCars)
      return
    }

    const filtered = availableCars.filter(car =>
      car.brand.toLowerCase().includes(input.toLowerCase()) ||
      car.model.toLowerCase().includes(input.toLowerCase()) ||
      car.category.toLowerCase().includes(input.toLowerCase()) ||
      car.transmission.toLowerCase().includes(input.toLowerCase())
    )

    setFilteredCars(filtered)
  }

  //Run API or load cars
  useEffect(() => {

    if (isSearchData) {
      searchCarAvailability()
    } else {
      setAvailableCars(cars)
      setFilteredCars(cars)
    }

  }, [cars])

  //  Run filter when typing
  useEffect(() => {
    applyFilter()
  }, [input])

  return (
    <div>

      {/* Header Section */}

      <div className='flex flex-col items-center py-20 bg-light max-md:px-4 pb-10'>

        <Title
          title='Available Cars'
          subTitle='Browse our selection of premium vehicles available for your next adventure'
        />

        <div className='flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow'>

          <img
            src={assets.search_icon}
            alt=""
            className='w-4.5 h-4.5 mr-2'
          />

          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type='text'
            placeholder='Search by make, model, category, transmission'
            className='w-full h-full outline-none text-gray-500'
          />

          <img
            src={assets.filter_icon}
            alt=""
            className='w-4.5 h-4.5 ml-2'
          />

        </div>

      </div>

      {/* Cars List */}

      <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-10'>

        <p className='text-gray-500 xl:px-20 max-w-7xl mx-auto'>
          Showing {filteredCars.length} Cars
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 xl:px-20 max-w-7xl mx-auto'>

          {filteredCars.map((car, index) => (
            <div key={index}>
              <CarCard car={car} />
            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default Cars