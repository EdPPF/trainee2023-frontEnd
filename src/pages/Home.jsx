import { Link } from "react-router-dom";

export function Home() {
    return (
        <div className="h-screen bg-gray-100 grid text-xl overflow-scroll">
            <h1
            className="mt-7 mb-2 font-abril-fatface font-bold text-8xl text-orange-500
            drop-shadow-lg hover:text-pink-500 duration-300
            justify-self-center">
                Joãozinho's
            </h1>

            <p className="mx-5 drop-shadow-lg text-3xl font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce dignissim eleifend tincidunt.
            Mauris ut imperdiet dui.
            Aliquam in mauris vel enim pretium volutpat.
            Vestibulum nisl eros, luctus vitae augue in, tempor iaculis ipsum.
            </p>

            <hr className="border-neutral-900 border-2 rounded-xl m-5"/>

            <p className="mx-5 mb-5 text-2xl font-medium">
                Navegue pelas categorias do blog!
            </p>

            <div className="bg-neutral-400 w-1/2 grid justify-self-center mb-14 shadow-lg shadow-orange-500 rounded-md
                text-4xl font-bold justify-center">
                <ul className="my-10 drop-shadow-lg grid">
                    <Link to="/daily" className="m-1 hover:text-red-500 duration-200">Daily</Link>
                    <Link to="/games" className="m-1 hover:text-blue-500 duration-200">Jogos</Link>
                    <Link to="/anime" className="m-1 hover:text-yellow-500 duration-200">Anime</Link>
                </ul>
            </div>
            <div className="bg-neutral-500 w-1/2 justify-self-center mb-14 shadow-md shadow-teal-600 rounded-full
                text-2xl font-semibold flex justify-center items-center">
                <Link to="/posts" className="m-5 hover:text-lime-500 duration-200">Ver Todas as Postagens</Link>
            </div>
        </div>
    )
}
