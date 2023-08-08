import { useEffect, useState } from "react";
import { api } from "../utils/api"

export function CreateUser() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        if (!email || !name || !password) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const response =  api.post("/v1/users/create", {
            email, name, password
        });

        // useEffect(() => {
        //     api.post("/v1/users/create")
        //     .then((res) => {
        //         setEmail(res.data.email);
        //         setName(res.data.name);
        //         setPassword(res.data.password);
        //     });
        // }, []);
    };

    return (
        <div className="h-fit min-h-screen bg-gray-100 grid text-xl">
            <div className="bg-neutral-400 grid justify-self-center m-5 min-h-1/2 shadow-md shadow-orange-500
                rounded-md text-4xl font-bold">
                    <form className="m-5 grid gap-5 justify-center"
                     onSubmit={handleSubmit}
                    >
                        Email:
                        <input type="email" placeholder="email" value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        className="outline-none w-11/12 justify-self-center rounded-lg"
                        />

                        Nome:
                        <input type="text" placeholder="nome" value={name}
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                        className="outline-none w-11/12 justify-self-center rounded-lg"
                        />

                        Senha:
                        <input type="password" placeholder="senha" value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        className="outline-none w-11/12 justify-self-center rounded-lg"
                        />

                        <button type="submit" className="hover:text-green-700 duration-200"> Entrar </button>
                    </form>
                </div>
        </div>
    )
}
