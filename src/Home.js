import React from "react";
import { Button } from "reactstrap";
import {getDistance} from 'geolib'


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

        const getUserCoords = (coordObj) => {
            let { longitude, latitude } = coordObj.coords;
            findClosestCityWashroom(longitude,latitude);
            
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