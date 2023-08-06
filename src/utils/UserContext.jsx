import { createContext, useContext, useEffect, useState } from "react";
import { api } from "./api";
import Cookies from "js-cookie";

const userContext = createContext(null);

function handleSetDefaultHeaders(email, authentication_token) {
    api.defaults.headers.common["X-User-Token"] = authentication_token;
    api.defaults.headers.common["X-User-Email"] = email;
}

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState();

    async function login({email, password}) {
        return api.post("/v1/users/login", {email, password})
            .then((res) => {
                setUser(res.data.user);
                handleSetDefaultHeaders(
                    res.data.email, res.data.authentication_token
                );

                Cookies.set("authentication_token", res.data.authentication_token);
                Cookies.set("email", res.data.email);
            });
    };

    function logout() {
        Cookies.remove("authentication_token");
        Cookies.remove("email");

        handleSetDefaultHeaders("", "");
        setUser(null);
    };

    useEffect(() => {
        const email = Cookies.get("email");
        const authentication_token = Cookies.get("authentication_token");
        if (email && authentication_token){
            handleSetDefaultHeaders(email, authentication_token);
            // api.get("/users/login").then(res => setUser(res.data));
            setUser({email: email});
        }
    }, [])

    return (
        <userContext.Provider value={{ user, login, logout }}>
            {children}
        </userContext.Provider>
    );
};

export function useUserContext() {
    const ctx = useContext(userContext);
    if (!ctx) throw Error("Use useUserContext dentro do provider.");

    return ctx;
}
