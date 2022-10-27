import React from 'react';
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Button } from 'reactstrap';

const GOOGLE_URL = 'https://www.google.com/maps/search/'

const WashroomCard = ({ washroomInfo, handleDeleteProfile }) => {

    const { id, washroom_type, longitude, latitude, opens_at, closes_at } = washroomInfo
    
    function handleDeleteCard(e){
        handleDeleteProfile(id)
    }

    return (
        <Card
            style={{
                width: '18rem'
            }}
        >
            {/* <img
    alt="Sample"
    src="https://picsum.photos/300/200"
  /> */}
            <CardBody>
                <CardTitle tag="h5">
                    {washroomInfo.washroom_type}
                </CardTitle>
                {opens_at ?
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Hours of operation: {opens_at} to {closes_at}
                    </CardSubtitle>
                    :
                    null
                }

                <CardText>
                    <a href={GOOGLE_URL+latitude+' '+longitude}>Location</a>: {longitude} ; {latitude}
                </CardText>
                <Button className='bg-danger' onClick={handleDeleteCard}>
                    Delete
                </Button>
            </CardBody>
        </Card>
    )

}

export default WashroomCard