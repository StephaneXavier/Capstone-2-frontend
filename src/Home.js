import React from "react";
import { Button } from "reactstrap";
import {getDistance} from 'geolib';
import WashroomApi from "./api";


const Home = ({ cityWashrooms }) => {
    
    function findClosestCityWashroom(longitude, latitude) {
        
        let shortestBathroomId = { distance: Infinity };
        for (let washroom of cityWashrooms) {
            let currentDistance = getDistance({ latitude, longitude }, { latitude: washroom.geometry.y, longitude: washroom.geometry.x })
            if (currentDistance < shortestBathroomId.distance) {
                shortestBathroomId = { ...washroom, currentDistance }
            }
        }
        console.log(shortestBathroomId)
    }

    const onClick = () => {

        const getUserCoords = async (coordObj) => {
            let { longitude, latitude } = coordObj.coords;
            const nearestAPIwashroom = findClosestCityWashroom(longitude,latitude);
            const nearestDBWashroom = await WashroomApi.getClosestWashroom(longitude,latitude);
            const nearesWashroom = nearestAPIwashroom < nearestDBWashroom? nearestAPIwashroom : nearestDBWashroom
            console.log('nearest washroom is', nearesWashroom )

        };
        window.navigator.geolocation.getCurrentPosition(getUserCoords)

    }

    return (
        <div>
            <Button class='rounded' onClick={onClick}>Find a washroom!</Button>
        </div>
    )
}

export default Home