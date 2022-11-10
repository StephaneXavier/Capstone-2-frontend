import React, { useState, useEffect } from "react";
import { Button, Col, Row, Input, FormGroup, Label } from "reactstrap";
import WashroomApi from "./api";
import { findClosestCityWashroom, userDeniesLocation, compareCityAndDBWashrooms } from './helpers'

const GOOGLE_URL = 'https://www.google.com/maps/search/'

const Home = ({ cityWashrooms }) => {

    const [nearestWashroom, setNearestWashroom] = useState();
    const [userLocation, setUserLocation] = useState();
    const [toggle, setToggle] = useState(false)


    useEffect( () => {
        console.log(toggle)
    }, [toggle])


    function userSharesLocation(position) {
        const { longitude, latitude } = position.coords
        async function findNearestWashroom() {

            const nearestCityWashroom = findClosestCityWashroom(longitude, latitude, cityWashrooms);
            const nearestDBWashroom = await WashroomApi.getClosestWashroom(longitude, latitude);
            console.log(nearestCityWashroom)

            if(!toggle || !nearestCityWashroom){
                setNearestWashroom({...nearestDBWashroom})
                return
            }

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

    function resetLocation() {
        setNearestWashroom(null)
    }

    return (
        <div>
            <Row>
                <Col xs={4}></Col>
                <Col xs={4}>
                    {cityWashrooms ?
                        <>

                            {
                                nearestWashroom ?
                                    <>
                                        <a href={`${GOOGLE_URL + nearestWashroom.latitude + ' ' + nearestWashroom.longitude}`} > Nearest Washroom </a> <br></br>
                                        <Button onClick={resetLocation}> reset location </Button>
                                    </>


                                    :
                                    <>
                                        <FormGroup switch>
                                            <Input
                                                type="switch"
                                                checked={toggle}
                                                onClick={() => {
                                                    setToggle(!toggle);
                                                }}
                                            />
                                            <Label check>Include city washrooms</Label>
                                        </FormGroup>
                                        <Button className='rounded' onClick={onClick}>Find a washroom!</Button>

                                    </>


                            }

                        </>
                        :

                        <h1>fetching data...</h1>

                    }
                </Col>

            </Row>


        </div>
    )
}

export default Home