// import SearchInput from "@/components/SearchInput";
// import Providers from "@/components/Provider";
// import Preloader from "@/components/Preloader";

import PokemonTable from "@/components/PokemonTable";
import SSRPokemonTable from "@/components/SSRPokemonTable";

import { store } from "@/store";
import { setStartupPokemon } from "@/store/searchSlice";

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();
  store.dispatch(setStartupPokemon(data));

  return (
    <main>
      <PokemonTable pokemons={data}/>
      <SSRPokemonTable/>
      {/* <Preloader pokemons={data} />
      <Providers>
        <SearchInput />
      </Providers> */}
    </main>
  );
}