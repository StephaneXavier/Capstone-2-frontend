import { useState } from 'react';
import  WashroomApi  from './api'


const useLocalStorage = () => {
    const initialState = JSON.parse(window.localStorage.getItem('userInfo')) || { username: '', token: '',  submissions: [] };

    const [userInfo, setUserInfo] = useState(initialState);

    async function getUserDetails(username, token) {
        const userSubmissions = await WashroomApi.getUserSubmissions(username, token);
        
        const completeUserInfo = {
            username: username,
            token: token,
            submissions: userSubmissions ? userSubmissions : []
        }
        window.localStorage.setItem('userInfo', JSON.stringify(completeUserInfo))
        setUserInfo(completeUserInfo)
    }


    function clearUserInfo() {
        window.localStorage.clear();
        setUserInfo({})
    }



    return [userInfo, getUserDetails, clearUserInfo]

}

export default useLocalStorage;
