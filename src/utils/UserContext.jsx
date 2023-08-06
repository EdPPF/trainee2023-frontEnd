import { createContext, useContext, useState } from "react";
import { api } from "./api";

const userContext = createContext(null);

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState();

    async function login({email, password}) {
        return api.post("/v1/users/login", {email, password})
            .then((res) => {
                setUser(res.data.user);
                api.defaults.headers.common["X-User-Token"] =
                    res.data.authentication_token;
                api.defaults.headers.common["X-User-Email"] =
                    res.data.user.email;
            });
    };

    function logout() {};

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
