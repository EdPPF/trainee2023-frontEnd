import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";

export function Root() {
    return (
        <div className="flex bg-neutral-950">
            <div className="w-1/2 mx-auto justify-self-center">
                <Navbar/>

                <Outlet/>

                <Footer/>
            </div>
        </div>
    )
}
