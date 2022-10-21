import React from 'react';
import { Card, CardBody, CardSubtitle, CardText, CardTitle, Button } from 'reactstrap';


const WashroomCard = ({ washroomInfo }) => {

    const { washroom_type, x_coordinate, y_coordinate, opens_at, closes_at } = washroomInfo
    console.log('%%%%%%%%%%')
    console.log(washroomInfo)
    console.log(washroomInfo.x_coordinate)
    console.log('%%%%%%%%%%')

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
                    Location: {x_coordinate} ; {y_coordinate}
                </CardText>
                <Button class='bg-danger'>
                    Delete
                </Button>
            </CardBody>
        </Card>
    )

}

export default WashroomCard