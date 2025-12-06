export const HeroPanel = 
(
    { photoId = "120" }
) => 
    {
    return (
        <div className="relative w-full h-[80vh] max-w-screen overflow-hidden">

            <picture className="w-full h-full">
                <source srcSet={`https://picsum.photos/id/${photoId}/1600/900`} media="(min-width:1025px)" />
                <source srcSet={`https://picsum.photos/id/${photoId}/1200/700`} media="(min-width:720px)" />
                <img
                    className="w-full h-full object-cover"
                    src={`https://picsum.photos/id/${photoId}/600/600`}
                    alt="Hero Panel"
                />
            </picture>

            <div className="absolute inset-0 bg-gradient-to-b from-red-600/60 via-red-700/40 to-red-800/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                <h2 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] tracking-wide">
                    ¡Sea bienvenido!
                </h2>

                <p className="max-w-lg text-lg md:text-xl opacity-95 mb-6 drop-shadow-lg">
                    Descubra el mundo Pokémon, explora la Pokédex y disfruta de un diseño inspirado en la Pokéball.
                </p>

                <button className="px-10 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-500 hover:scale-105 transition-transform duration-200 border-2 border-white">
                    Comenzar
                </button>
            </div>
        </div>
    );
};
