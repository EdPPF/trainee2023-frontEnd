import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { api } from "../utils/api";

export function Profile() {
    const email = Cookies.get("email")
    const [user, setUser] = useState({});

    useEffect(() => {
        api.get(`/v1/users/show_by_email/${email}`)
           .then((res) => {
                // alert(res.data.name)
                setUser(res.data)
           })
    }, []);

    return (
        <div className="h-fit min-h-screen bg-gradient-to-b from-gray-100 to-white text-xl overflow-scroll">
            <div className="flex items-baseline">
                {user && (
                    <h1 className="m-5 h-fit justify-self-start w-fit bg-gray-500 rounded-lg flex items-baseline">
                        <p className="my-2 ml-10 text-blue-900 text-5xl">{user.name}</p>
                        <p className="mr-5 ml-2 text-blue-950 bg-orange-500/50 rounded-md">#{user.id}</p>
                    </h1>
                )}

                {user && (
                    <div className="bg-gray-600 rounded-lg h-fit">
                        <p className="m-2 text-slate-200 italic">{user.email}</p>
                    </div>
                )
                }
            </div>
            <hr className="border-neutral-900 border-2 rounded-xl m-5"/>
            <img src="src/assets/images/Depois_Pensamos_Sobre_Isso.png" alt="Home"
            className="mt-5 rounded-xl"
            />
        </div>
    )
}
