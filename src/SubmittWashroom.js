import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { redirect } from 'react-router-dom';

const SubmitWashroom = ({ submitNewWashroom }) => {
    const initialState = { washroomType: '', longitude: '', latitude: '', opensAt: '', closesAt: '' }
    const [washroomInfo, setwashroomInfo] = useState(initialState);



    const handleChange = (e) => {
        const { name, value } = e.target
        setwashroomInfo({ ...washroomInfo, [name]: value })

    }

    const onGeoLocate = (e) => {
        e.preventDefault();
        let userLocation = (location) => {
            setwashroomInfo({ ...washroomInfo, longitude: location.coords.longitude, latitude: location.coords.latitude })
        }
        window.navigator.geolocation.getCurrentPosition(userLocation)
    }

    function handleSubmit(e) {
        e.preventDefault();
        submitNewWashroom(washroomInfo);
        setwashroomInfo(initialState);
        console.log('current submittedWashroom data is', washroomInfo)
        redirect('/')
    }

    return (
        <Form onSubmit={handleSubmit} >
            <FormGroup >
                <Label for="washroomType"></Label>
                <Input

                    value={washroomInfo.washroomType}
                    onChange={handleChange}
                    id="washroomType"
                    name="washroomType"
                    placeholder="washroomType"
                    type="text"
                />
            </FormGroup>
            <FormGroup >
                <Label for="longitude"></Label>
                <Input

                    value={washroomInfo.longitude}
                    onChange={handleChange}
                    id="longitude"
                    name="longitude"
                    placeholder="longitude"
                    type="longitude"
                />
            </FormGroup>

            <FormGroup >
                <Label for="latitude"></Label>
                <Input

                    value={washroomInfo.latitude}
                    onChange={handleChange}
                    id="latitude"
                    name="latitude"
                    placeholder="latitude"
                    type="latitude"
                />
                <Button onClick={onGeoLocate}>Prefill my location</Button>
            </FormGroup>

            <FormGroup >
                <Label for="opensAt"></Label>
                <Input

                    value={washroomInfo.opensAt}
                    onChange={handleChange}
                    id="opensAt"
                    name="opensAt"
                    placeholder="opensAt"
                    type="opensAt"
                />
            </FormGroup>

            <FormGroup >
                <Label for="closesAt"></Label>
                <Input

                    value={washroomInfo.closesAt}
                    onChange={handleChange}
                    id="closesAt"
                    name="closesAt"
                    placeholder="closesAt"
                    type="closesAt"
                />
            </FormGroup>
            <Button>
                Submit
            </Button>
        </Form>
    )
}

export default SubmitWashroom