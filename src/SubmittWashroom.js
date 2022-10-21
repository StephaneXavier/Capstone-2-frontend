import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { redirect } from 'react-router-dom';

const SubmitWashroom = ({ submitNewWashroom }) => {
    const initialState = { washroomType: '', xCoordinate: '', yCoordinate: '', opensAt: '', closesAt: '' }
    const [washroomInfo, setwashroomInfo] = useState(initialState);



    const handleChange = (e) => {
        const { name, value } = e.target
        setwashroomInfo({ ...washroomInfo, [name]: value })

    }

    const onGeoLocate = (e) => {
        e.preventDefault();
        let userLocation = (location) => {
            setwashroomInfo({ ...washroomInfo, xCoordinate: location.coords.longitude, yCoordinate: location.coords.latitude })
        }
        window.navigator.geolocation.getCurrentPosition(userLocation)
    }

    function handleSubmit(e) {
        e.preventDefault();
        submitNewWashroom(washroomInfo);
        setwashroomInfo(initialState);
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
                <Label for="xCoordinate"></Label>
                <Input

                    value={washroomInfo.xCoordinate}
                    onChange={handleChange}
                    id="xCoordinate"
                    name="xCoordinate"
                    placeholder="xoordinate"
                    type="xCoordinate"
                />
            </FormGroup>

            <FormGroup >
                <Label for="yCoordinate"></Label>
                <Input

                    value={washroomInfo.yCoordinate}
                    onChange={handleChange}
                    id="yCoordinate"
                    name="yCoordinate"
                    placeholder="yCoordinate"
                    type="yCoordinate"
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