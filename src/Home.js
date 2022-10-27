import React, { useState,  } from "react";
import { Button } from "reactstrap";
import WashroomApi from "./api";
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

    function resetLocation(){
        setNearestWashroom(null)
    }

    return (
        <div>

            {cityWashrooms ?
                <>

                    {
                        nearestWashroom ?
                            <>
                                <a href={`${GOOGLE_URL + nearestWashroom.latitude + ' ' + nearestWashroom.longitude}`} > Nearest Washroom </a> <br></br>
                                <Button onClick={resetLocation}> reset location </Button>
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