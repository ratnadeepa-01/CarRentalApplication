import imagekit from "../configs/imagekit.js";
import User from "../models/User.js";
import Car from "../models/Car.js";

import fs from 'fs';

// api to change role of user

export const changeRoleToOwner = async (req,res)=>{
    try {
        const {_id} = req.user;
        await User.findByIdAndUpdate(_id,{role: 'owner'})
        res.json({
            success: true,
            message: 'Now you can list cars'
        })
    } catch (error) {
        console.log(error.message);
        res.json({
            success: false,
            message: error.message
        })
    }
}

// api to list car

export const addCar = async (req,res)=>{
    try {
        const {_id} = req.user;
        let car = JSON.parse(req.body.carData);
        const imageFile = req.file;

        // upload image to imagekit
       const response = await imagekit.files.upload({
            file: fs.readFileSync(imageFile.path).toString("base64"),
            fileName: imageFile.originalname,
            folder: "/cars"
        });

        //optimization through imagekit URL transformation
        const optimizedImageURL = `${response.url}?tr=w-1280,q-auto,f-webp`;

        const image = optimizedImageURL;
        await Car.create({...car, owner: _id, image})
            console.log("FILE:", req.file, optimizedImageURL);

        res.json({
            success: true,
            message: "Car Added"
        })

    } catch (error) {
        console.log(error.message);
        res.json({
            success: false,
            message: error.message
        })
    }
}

//API to list owner cars
export const getOwnerCars = async(req, res)=>{
  try {
    const {_id} = req.user;
    const cars = await Car.find({owner: _id})
    res.json({success: true, cars})
  } catch (error) {
    console.log(error.message);
    res.json({
        success: false,
        message: error.message
    })
  }
}

// API to Toggle Car Availability
export const toggleCarAvailability = async(req, res)=>{
    try {
    const {_id} = req.user;
    const {carId} =req.body
    const car = await Car.findById(carId)

    // checking is car belongs to the user
    if(car.owner.toString()!== _id.toString()){
        return res.json({
            success: false,
            message: "unauthorized"
        });
    }
    car.isAvailable = !car.isAvailable;
    await car.save();

    res.json({success: true, message: "Availability Toggled"})
  } catch (error) {
    console.log(error.message);
    res.json({
        success: false,
        message: error.message
    })
  }
}

// API to delete car
export const deleteCar = async(req, res)=>{
    try {
    const {_id} = req.user;
    const {carId} =req.body
    const car = await Car.findById(carId)

    // checking is car belongs to the user
    if(car.owner.toString()!== _id.toString()){
        return res.json({
            success: false,
            message: "unauthorized"
        });
    }
    car.owner = null;
    car.isAvailable = false;
    await car.save();

    res.json({success: true, message: "Car removed"})
  } catch (error) {
    console.log(error.message);
    res.json({
        success: false,
        message: error.message
    })
  }
}

// API to get Dashboard data
export const getDashboardData = async(req,res)=>{
    try {
        const {_id, role} = req.user;

        if(role !== 'owner'){
            return res.json({
                success: false,
                message: "unauthorized"
            })
        }

        const cars = await Car.find({owner: _id})

    } catch (error) {
        console.log(error.message);
        res.json({
            success: false,
            message: error.message
        })
    }
}