import { Link } from "react-router-dom";
import { useUserContext } from "../utils/UserContext";

export function Navbar() {
    const {logout} = useUserContext();
    return (
        <nav
        className="h-[98px] bg-neutral-900 text-slate-300 flex items-center
        justify-between text-2xl overflow-scroll"
        >
            <Link
            to="/"><img src="src/assets/images/Cucas.png" alt="Home"
            className="h-16 ml-5 rounded-xl"
            />
            </Link>

            <Link to="/" className="hover:underline"> Home </Link>

            <Link to="/profile" className="hover:underline"> Perfil </Link>

            <Link to="/login"
             className="hover:underline hover:text-blue-400 duration-300"> Login </Link>

            <button onClick={logout}
             className="mr-5 hover:underline hover:text-red-400 duration-300"> Logout </button>
        </nav>
    )
}
