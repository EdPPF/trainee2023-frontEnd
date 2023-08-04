import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../utils/api";

export function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [user, setUser] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email || !senha) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        api
            .get("/v1/users/login", {email, senha})
            .then((res) => {
                setUser(res.data.user)
            })
            .catch((err) => {
                console.error(err);
                alert("Erro ao fazer login.");
            });
    }

    return (
        <div className="h-screen bg-gray-100 grid text-xl">
            {
                user && <pre><code>{JSON.stringify(user, null, 2)}</code></pre>
            }

            <div className="h-auto grid">
                <h2
                className="mt-10 mx-5 font-abril-fatface font-semibold text-5xl
                drop-shadow-lg justify-self-start">
                    Faça seu login:
                </h2>

                <div className="bg-neutral-400 grid justify-self-center mb-14 shadow-md shadow-orange-500
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

                        Senha:
                        <input type="password" placeholder="senha" value={senha}
                        onChange={(event) => {
                            setSenha(event.target.value);
                        }}
                        className="outline-none w-11/12 justify-self-center rounded-lg"
                        />

                        <button type="submit" className="hover:text-green-700 duration-200"> Entrar </button>
                    </form>
                </div>
            </div>

            <hr className="border-neutral-900 border-2 rounded-xl"/>

            <p className="mx-5 text-2xl font-medium">
                Ainda não possui uma conta? <Link to="#"
                className="hover:text-orange-500 duration-200 underline">
                    Crie uma
                </Link>!
            </p>
        </div>
    )
}
