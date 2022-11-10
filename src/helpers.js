import { getDistance } from 'geolib';

 function findClosestCityWashroom(longitude, latitude, cityWashrooms) {

    let shortestBathroom;
    for (let washroom of cityWashrooms) {
        if (!shortestBathroom) {
            let firstWashroomDistance = getDistance({ latitude, longitude }, { latitude: washroom.geometry.y, longitude: washroom.geometry.x })
            shortestBathroom = { ...washroom, distance: firstWashroomDistance }
        }
        let currentDistance = getDistance({ latitude, longitude }, { latitude: washroom.geometry.y, longitude: washroom.geometry.x })

        if (currentDistance < shortestBathroom.distance) {
            shortestBathroom = { ...washroom, distance: currentDistance }
        }
    }

    return shortestBathroom
};


function userDeniesLocation(err) {
    if (err.code == 1) {
        alert("Change your settings to allow location sharing");
    } else if (err.code == 2) {
        alert("Error: Position is unavailable!");
    }
}


function compareCityAndDBWashrooms(userLocation,DBWashroom, cityWashroom){
    const {longitude, latitude} = userLocation
    const DBWashroomDistance = getDistance({latitude, longitude}, {latitude: DBWashroom.latitude, longitude: DBWashroom.longitude})
    const cityWashroomDistance = getDistance({latitude, longitude}, {latitude: cityWashroom.geometry.y, longitude: cityWashroom.geometry.x})

    const result = DBWashroomDistance < cityWashroomDistance ? DBWashroom : cityWashroom

    return result
}


export {findClosestCityWashroom, userDeniesLocation, compareCityAndDBWashrooms}