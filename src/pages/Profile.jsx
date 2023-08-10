import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { api } from "../utils/api";
import { Link } from "react-router-dom";
// import { useUserContext } from "../utils/UserContext";

export function Profile() {
    const info = Cookies.get("email")

    // const user = useUserContext()

    const [userData, setUserData] = useState('');

    useEffect (() => {
        api.get('/v1/users/show/1')
        .then((res) => {
            setUserData(res.data)
        })
    }, []);

    function AdminRender({ isadmin }) {
        if (info != "") {
            if (isadmin) {
                return (
                    <>
                        <div className="m-5 h-fit rounded-xl bg-gray-300 shadow-md shadow-teal-500 grid text-xl">
                            <ul className="m-5">
                                <h2>
                                    {userData.name}
                                </h2>
                                <p>
                                    {userData.email}
                                </p>
                            </ul>
                        </div>
                        <div className="bg-neutral-500 w-1/2 h-1/2 items-center justify-self-center mb-14 shadow-md shadow-teal-600 rounded-full
                        text-2xl font-semibold flex justify-center">
                            <Link to="/newpost" className="m-5 hover:text-orange-500 duration-200">Criar Post</Link>
                        </div>
                    </>
                )
            }
        }
    }

    return (
        <div className="h-fit min-h-screen bg-gray-100 grid text-xl overflow-scroll">
            <h1 className="text-5xl my-5 h-fit justify-self-center">Perfil do Usuário</h1>

            <AdminRender isadmin={userData.is_admin}></AdminRender>

            {/* <div className="m-5 h-fit rounded-xl bg-gray-300 shadow-md shadow-teal-500 grid text-xl">
            {
                (info &&
                <pre className="m-5 w-1/2 bg-lime-400 rounded-full grid justify-self-center">
                    <code className="my-28 justify-self-center">{JSON.stringify(info, null, 2)}</code>
                </pre>
                )
            }
            </div> */}
        </div>
    )
}
