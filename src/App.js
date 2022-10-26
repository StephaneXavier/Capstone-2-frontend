import './App.css';
import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';
import WashroomApi from './api';
import Register from './Register';
import useLocalStorage from './UseLocalStorage';
import Logout from './Logout';
import SubmitWashroom from './SubmittWashroom';
import Profile from './Profile';



let UserInfoContext = createContext();

function App() {

    const [cityWashrooms, setCityWashrooms] = useState();
    const [userInfo, setUserInfo, clearUserInfo] = useLocalStorage();


    useEffect(() => {
        async function getAllWashrooms() {
            const resultCityWashrooms = await WashroomApi.getAllCityApi()
           
            setCityWashrooms(resultCityWashrooms)
        }

        getAllWashrooms()
    }, [])


    function loginUser(userLoginInfo) {
        async function getToken() {
            clearUserInfo()
            const token = await WashroomApi.userLogin(userLoginInfo);
            setUserInfo(userLoginInfo.username, token)
        }
        getToken()
    }

    function registerUser(userInfo) {
        async function submitRegistration() {
            const { username, password } = userInfo
            const token = await WashroomApi.registerNewUser(username, password)
            setUserInfo(username, token)
        }
        submitRegistration()
    }

    function submitNewWashroom(washroomInfo) {
        async function submitWahsroom() {
            const result = await WashroomApi.submitNewWashroom(washroomInfo, userInfo)
            setUserInfo(userInfo.username, userInfo.token)
        }
        submitWahsroom()
    }

    return (
        <BrowserRouter>
            <UserInfoContext.Provider value={userInfo} >
                <NavBar userInfo={userInfo} />
                <Routes>
                    <Route path="/" element={<Home cityWashrooms={cityWashrooms} />}></Route>
                    <Route path="/login" element={<Login loginUser={loginUser} ></Login>} ></Route>
                    <Route path="/register" element={<Register registerUser={registerUser}></Register>}></Route>
                    <Route path="/logout" element={<Logout logout={clearUserInfo}></Logout>}></Route>
                    <Route path="/profile" element={<Profile></Profile>}></Route>
                    <Route path="/submit-washroom" element={<SubmitWashroom submitNewWashroom={submitNewWashroom}></SubmitWashroom>}></Route>
                   
                </Routes>
            </UserInfoContext.Provider>
        </BrowserRouter>


    );
}

export { UserInfoContext }
export default App;
