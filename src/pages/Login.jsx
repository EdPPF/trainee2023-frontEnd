import { Link } from "react-router-dom";

export function Login() {
    return (
        <div className="h-screen bg-gray-100 grid text-xl">
            <div className="h-auto grid bg-slate-600">
                <h2
                className="mt-10 mx-5 font-abril-fatface font-semibold text-5xl
                drop-shadow-lg justify-self-start">
                    Faça seu login:
                </h2>

                <div className="bg-neutral-400 w-1/2 grid justify-self-center mb-14 drop-shadow-lg rounded-md
                    text-4xl font-bold">
                    Forms Here
                </div>
            </div>

            <hr className="border-neutral-900 border-2 rounded-xl"/>

            <p className="mx-5 text-2xl font-medium">
                Ainda não possui uma conta? <Link to="#"
                className="hover:text-orange-500 duration-200">
                    Crie uma
                </Link>!
            </p>
        </div>
    )
}
