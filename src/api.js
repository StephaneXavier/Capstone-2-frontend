import axios from 'axios';
require("dotenv").config();

const DB_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

const CITY_OF_OTTAWA_URL = "https://maps.ottawa.ca/arcgis/rest/services/PublicWashrooms/MapServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json"


class WashroomApi {

    static async getAllCityApi() {
        try {
            const day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format().toUpperCase()
            const dateObj = new Date()
            const time = `${dateObj.getHours()}:${dateObj.getMinutes()}`
            const result = await axios.get(CITY_OF_OTTAWA_URL)
            const cityWashrooms = result.data.features
            const openDay = `HOURS_${day}_OPEN`
            const closedDay = `HOURS_${day}_CLOSED`

            const openCityWashrooms = []
            // for every washroom in the returned list, check to see if it is currently open (day and hour)
            for (let washroom of cityWashrooms) {
                if ((time >= washroom.attributes[openDay]) && (time <= washroom.attributes[closedDay])) {
                    openCityWashrooms.push(washroom)
                }
            }


            return openCityWashrooms
        } catch (e) {
            console.log(`API error`, e)
        }
    }

    static async getAllDBWashrooms() {
        try {
            const result = await axios.get(DB_URL + 'washroom')
            return result.data.washrooms
        } catch (e) {
            console.log(e)
        }
    }


    // returns 'someTokenForSpecificUserInHere'
    static async userLogin(userLoginInfo) {
        try {
            const { username, password } = userLoginInfo
            const options = {
                url: DB_URL + 'auth/login',
                method: 'POST',
                data: {
                    username,
                    password
                }
            }
            const result = await axios(options)
            return result.data.token
        } catch (e) {
            console.log(e)
        }
    }

    // gets all the submissions for a particular user

    static async getUserSubmissions(username, token) {
        try {

            const result = await axios.get(DB_URL + `user/submission/${username}`, {
                headers: {
                    authorization: token
                }
            })

            return result.data.washrooms

        } catch (e) {

        }
    }

    static async registerNewUser(username, password) {
        try {
            const token = await axios.post(DB_URL + 'auth/register', { username, password })
            return token.data.token

        } catch (e) {
            console.log(e)
        }
    }

    static async submitNewWashroom(washroomInfo, userInfo) {
        try {
            const { username, token } = userInfo
            const newWashroom = await axios.post(DB_URL + 'washroom', { washroomInfo, username, _token: token })
            return newWashroom.data
        } catch (e) {

        }
    }

    static async getClosestWashroom(longitude, latitude) {
        try {
            const washroom = await axios.get(DB_URL + 'washroom/getClosest', { params: { longitude, latitude } })
            return washroom.data.shortestBathroomId
        } catch (e) {
            console.log(e)
        }
    }

    static async deleteWashroom(id, token) {
        try {
            await axios.delete(DB_URL + `washroom/${id}`, {
                headers: {
                    authorization: token
                }
            
            })
            return true
        }catch(e){
            console.log(e)
            
        }
    }



    // END OF CLASS
}

export default WashroomApi