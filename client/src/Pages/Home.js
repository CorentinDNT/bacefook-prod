import React, { useContext, useState } from "react";
import { UidContext } from "../Components/AppContext";
import LeftNav from "../Components/LeftNav";
import CreatePost from "../Components/Post/CreatePost";
import Thread from "../Components/Thread";
import Log from "../Components/Log";
import Trend from "../Components/Trend";
import FrendSuggestion from "../Components/FrendSuggestion";

export default function Home() {
    const uid = useContext(UidContext);
    return (
        <div className="home">
            <LeftNav />
            <div className="main">
                <div className="home-header">
                    {uid ? (
                        <CreatePost />
                    ) : (
                        <Log signin={true} signup={false} />
                    )}
                </div>
                <Thread />
            </div>
            <div className="right-side">
                <div className="right-side-container">
                    <div className="wrapper">
                        <Trend />
                        {uid && <FrendSuggestion />}
                    </div>
                </div>
            </div>
        </div>
    );
}
