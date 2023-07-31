export function Home() {
    return (
        <div className="w-1/2 h-screen bg-gray-100 grid text-xl">
            <h1
            className="m-5 font-abril-fatface font-bold text-6xl text-orange-500
            drop-shadow-lg hover:text-7xl duration-200
            justify-self-center">
                Joãozinho's
            </h1>

            <p className="m-3 drop-shadow-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce dignissim eleifend tincidunt.
            Mauris ut imperdiet dui.
            Aliquam in mauris vel enim pretium volutpat.
            Vestibulum nisl eros, luctus vitae augue in, tempor iaculis ipsum.
            </p>

            <hr className="border-neutral-900 border-2 rounded-xl"/>

            <ul className="list-inside list-disc
            bg-neutral-300 w-1/2 justify-self-center m-10 drop-shadow-lg rounded-md
            text-2xl font-bold grid justify-evenly">
                <li><a href="#"className="m-1 hover:text-red-500 duration-200">Daily</a></li>
                <li><a href="#"className="m-1 hover:text-blue-500 duration-200">Jogos</a></li>
                <li><a href="#"className="m-1 hover:text-yellow-500 duration-200">Anime</a></li>
            </ul>
        </div>
    )
}
