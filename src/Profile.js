import React from "react";
import { UserInfoContext } from "./App";
import { useContext } from "react";
import WashroomCard from "./WashroomCard";

const Profile = () => {

    let userInfo = useContext(UserInfoContext)
    console.log('***************')
    console.log(userInfo.submissions)
    console.log(userInfo.submissions[0].id)
    console.log('***************')

    return (

        <div>

        {userInfo.submissions.map(e => <WashroomCard washroomInfo = {e} ></WashroomCard>)}

        </div>

    )

}

export default Profile