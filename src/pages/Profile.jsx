import { useUserContext } from "../utils/UserContext";

export function Profile() {
    const {user} = useUserContext();

    return (
        <div className="h-fit min-h-screen bg-gray-100 grid text-xl">
            <h1 className="text-5xl my-5 h-fit justify-self-center">Profile</h1>
            <div className="m-5 h-fit rounded-xl bg-gray-300 shadow-md shadow-teal-500 grid text-xl">
            {
                user && <pre><code>{JSON.stringify(user, null, 2)}</code></pre>
            }
            </div>
        </div>
    )
}
