import React, { useContext } from "react";
import { UidContext } from "../Components/AppContext";
import Log from "../Components/Log";
import UpdateProfil from "../Components/Profil/UpdateProfil";

export default function Profil() {
    const uid = useContext(UidContext);
    console.log(uid);
    return (
        <div className="profil-page">
            {uid ? (
                <UpdateProfil />
            ) : (
                <div className="log-container">
                    <Log signin={false} signup={true} />
                    <div className="img-container">
                        <img src="./img/log.svg" alt="login-image" />
                    </div>
                </div>
            )}
        </div>
    );
}
