import Cookies from "js-cookie";
import { useUserContext } from "../utils/UserContext";

export function Profile() {
    const info = Cookies.get("email")
    const pfp = Cookies.get()

    return (
        <div className="h-fit min-h-screen bg-gray-100 grid text-xl">
            <h1 className="text-5xl my-5 h-fit justify-self-center">Profile</h1>
            <div className="m-5 h-fit rounded-xl bg-gray-300 shadow-md shadow-teal-500 grid text-xl">
            {
                (info &&
                <pre className="m-5 w-1/2 bg-lime-400 rounded-full grid justify-self-center">
                    <code className="my-28 justify-self-center">{JSON.stringify(info, null, 2)}</code>
                </pre>
                )
            }
            </div>
        </div>
    )
}
