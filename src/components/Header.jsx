import { Link } from "react-router";

export const Header = ({ title = "Pokedex 2025 Tercero" }) => {
    return (
        <header className="bg-red-600 text-white flex justify-between items-center px-6 py-4 shadow-md border-b-4 border-red-800">
            <h1 className="text-xl font-extrabold tracking-wide drop-shadow">
                {title}
            </h1>
            <nav>
                <ul className="flex gap-4 items-center">
                    <li>
                        <Link
                            to="/"className="inline-block px-4 py-2 font-semibold rounded-md bg-white text-red-700 border-2 border-red-700 hover:bg-red-700 hover:text-white transition-colors"> Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to="/about"className="inline-block px-4 py-2 font-semibold rounded-md bg-white text-red-700 border-2 border-red-700 hover:bg-red-700 hover:text-white transition-colors"> Acerca de
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
