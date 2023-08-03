import { useState } from "react";
import { Link } from "react-router-dom";

export function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Email inserido: " + email + "\nSenha inserida: " + senha + "\nNome inserido: "+nome);
    }

    return (
        <div className="h-screen bg-gray-100 grid text-xl">
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
