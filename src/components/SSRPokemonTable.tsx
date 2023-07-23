import { store } from "@/store";

import PokemonTable from "./PokemonTable";

function SSRPokemonTable() {
  return (
    <div className="grid w-fit mx-auto my-10 gap-4">
      SSR Table
      <PokemonTable pokemons={store.getState().search.startupPokemon} />
    </div>
  );
}

export default SSRPokemonTable;