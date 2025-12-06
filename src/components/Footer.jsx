export const Footer = () => {
    return (
        <footer className="bg-red-700 text-white py-4 flex justify-center items-center border-t-4 border-red-900 shadow-inner">
            <span className="text-sm font-semibold tracking-wide drop-shadow"> Todos los Derechos Reservados © {new Date().getFullYear()}
            </span>
        </footer>
    );
};
