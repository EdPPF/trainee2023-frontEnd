import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav
        className="h-[98px] bg-neutral-900 text-slate-300 flex items-center justify-around"
        >
            <Link
            to="/"><img src="src/assets/images/Cucas.png" alt="Home"
            className="h-20 rounded-full" />
            </Link>
            <button href="#"> Logout </button>
        </nav>
    )
}
