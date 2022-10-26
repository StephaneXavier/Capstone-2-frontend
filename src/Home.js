import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { getDistance } from 'geolib';
import WashroomApi from "./api";
import WashroomCard from "./WashroomCard";
import { findClosestCityWashroom, userDeniesLocation, compareCityAndDBWashrooms } from './helpers'

const GOOGLE_URL = 'https://www.google.com/maps/search/'

const Home = ({ cityWashrooms }) => {

    const [nearestWashroom, setNearestWashroom] = useState();
    const [userLocation, setUserLocation] = useState();


    function userSharesLocation(position) {

        const { longitude, latitude } = position.coords
        async function findNearestWashroom() {
            const nearestCityWashroom = findClosestCityWashroom(longitude, latitude, cityWashrooms);
            const nearestDBWashroom = await WashroomApi.getClosestWashroom(longitude, latitude);

            const nearestWashroomObj = compareCityAndDBWashrooms({ longitude, latitude }, nearestDBWashroom, nearestCityWashroom);
            const nearestWashroomCoords = nearestWashroomObj.geometry ?
                { latitude: nearestWashroomObj.geometry.y, longitude: nearestWashroomObj.geometry.x }
                :
                { latitude: nearestWashroomObj.latitude, longitude: nearestWashroomObj.longitude };

            setNearestWashroom(nearestWashroomCoords)

        }
        findNearestWashroom()
    }


    function onClick() {
        const options = { timeout: 10000 };
        window.navigator.geolocation.getCurrentPosition(userSharesLocation, userDeniesLocation, options)
    }


    return (
        <div>

            {cityWashrooms ?
                <>

                    {
                        nearestWashroom ?
                            <>
                                <a href={`${GOOGLE_URL + nearestWashroom.latitude + ' ' + nearestWashroom.longitude}`} > Nearest Washroom </a>
                            </>


                            :
                            <Button className='rounded' onClick={onClick}>Find a washroom!</Button>
                    }

                </>
                :

                <h1>fetching data...</h1>

            }

        </div>
    )
}

export default Home