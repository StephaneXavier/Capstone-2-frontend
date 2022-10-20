import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({logout}) => {
const navigate = useNavigate()

useEffect(() => {

logout();
navigate('/')


},[])

return(
    <h1>Logging out...</h1>
)

}

export default Logout