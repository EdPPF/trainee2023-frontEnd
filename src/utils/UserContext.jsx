import { createContext, useContext, useState } from "react";

const userContext = createContext(null);

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState();

    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    );
};

export function useUserContext() {
    const ctx = useContext(userContext);
    if (!ctx) throw Error("Use useUserContext dentro do provider.");

    return ctx;
}
