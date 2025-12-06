import { HeroPanel } from "../components/HeroPanel"
import { PokeList } from "../components/Pokedex/PokeList"

export const Home = ()=>{
    return (
        <>
            <HeroPanel photoId="120" />
            <section className="p-4">
                <PokeList />
            </section>
        </>
    )
}