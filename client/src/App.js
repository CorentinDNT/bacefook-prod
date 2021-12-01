import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUSer } from "./actions/userActions.js";
import { UidContext } from "./Components/AppContext.js";
import Routes from "./Components/Routes/index.js";

function App() {
    const [uid, setUid] = useState(null);
    const dispatch = useDispatch();

    useEffect(async () => {
        const fetchToken = async () => {
            await axios({
                method: "get",
                url: `${process.env.REACT_APP_API_URL}jwtid`,
                withCredentials: true,
            })
                .then((res) => setUid(res.data))
                .catch((err) => console.log("No Token"));
        };
        fetchToken();

        if (uid) dispatch(getUSer(uid));
    }, [uid]);

    return (
        <UidContext.Provider value={uid}>
            <div className="App">
                <Routes />
            </div>
        </UidContext.Provider>
    );
}

export default App;
