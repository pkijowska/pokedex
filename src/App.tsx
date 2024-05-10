import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PokemonDetail from "./components/pokemon-detail/PokemonDetail";
import PokemonProvider from "./context/PokemonContext";
import PokemonList from "./components/pokemon-list/PokemonList";
import Layout from "./Layout";
import Pokedex from "./components/pokedex/Pokedex";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="pokemons" element={<PokemonList />} />
              <Route path="pokemons/:id" element={<PokemonDetail />} />
              <Route path="pokeball" element={<Pokedex />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PokemonProvider>
    </QueryClientProvider>
  );
}

export default App;
