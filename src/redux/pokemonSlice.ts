import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface Pokemon {
  id: number;
  name: string;
  // Add other properties as needed
}

// Define the initial state for the Pokemons
interface PokemonsState {
  data: Pokemon[];
  loading: boolean;
  error: string | null;
}

const initialState: PokemonsState = {
  data: [],
  loading: false,
  error: null,
};

// Async thunk to fetch all 150 Pokemons from the API
export const fetchPokemons = createAsyncThunk<Pokemon[]>("pokemons/fetchAll", async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=150");
  console.log('dispatch was triggered', response.data.results)
  return response.data.results;
});

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch Pokemons";
      });
  },
});

export default pokemonsSlice.reducer;
