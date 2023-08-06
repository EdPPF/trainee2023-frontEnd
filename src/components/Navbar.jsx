import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav
        className="h-[98px] bg-neutral-900 text-slate-300 flex items-center justify-between text-2xl"
        >
            <Link
            to="/"><img src="src/assets/images/Cucas.png" alt="Home"
            className="h-20 mx-5 rounded-xl text-right"
            />
            </Link>

            <Link to="/"> Home </Link>

            <Link to="/profile"> Perfil </Link>

            <Link to="/login" className="mx-5"> Login </Link>
        </nav>
    )
}
