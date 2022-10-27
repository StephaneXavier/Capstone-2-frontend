import React from "react";
import { UserInfoContext } from "./App";
import { useContext } from "react";
import WashroomCard from "./WashroomCard";
import WashroomApi from "./api";

const Profile = ({onDelete}) => {

    let userInfo = useContext(UserInfoContext)
    

    function handleDeleteProfile(id){
        onDelete(id)
    }
    
    return (

        <div>

        {userInfo.submissions.map(e => <WashroomCard key={e.id} washroomInfo = {e} handleDeleteProfile={handleDeleteProfile} ></WashroomCard>)}

        </div>

    )

}

export default Profile