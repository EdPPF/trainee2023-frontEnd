export function Footer() {
    return (
        <footer className="h-[98px] bg-neutral-900 text-slate-300 grid justify-items-center">
            <a href="https://github.com/EdPPF/trainee2023-frontEnd/" target="_blank"
            className="h-full grid grid-cols-1 grid-rows-2 justify-items-center overflow-hidden">
                <img src="src/assets/images/github-mark-white.png" alt="GitHub_repo" className="h-12 m-2"/>
                <p className="my-3 hover:text-red-700 duration-300"> Developed by EdPPF </p>
            </a>
        </footer>

    )
}
