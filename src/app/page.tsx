import SearchInput from "@/components/SearchInput";
import Providers from "@/components/Provider";

import { store } from "@/store";
import { setInitialData } from "@/store/searchSlice";
import SSRPokemonTable from "@/components/SSRPokemonTable";

export default async function Home() {
  const req = await fetch("http://localhost:3000/api/search");
  const data = await req.json();
  store.dispatch(setInitialData(data));

  return (
    <main>
      <SSRPokemonTable/>
      <Providers initialData={data}>
        <SearchInput />
      </Providers>
    </main>
  );
}
