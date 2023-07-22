import React, { useState, useEffect } from "react";
import { TextField, Autocomplete, Grid, Button } from "@mui/material";
import { fetchPokemons } from "../redux/pokemonSlice";
import { RootState } from "../redux/store";
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
} from "../hooks";

export default function PokemonList() {
  const dispatch = useDispatch();

  const {
    data: pokemons,
    loading,
    error,
  } = useSelector((state: RootState) => state.pokemons);

  useEffect(() => {
    dispatch(fetchPokemons()); // Explicitly cast the dispatch to 'any'
  }, [dispatch]);

  return (
    <Grid container justifyContent="center" spacing={3}>
      <Grid item>
        <Autocomplete
          id="searchPokemon"
          options={pokemons}
          getOptionLabel={(pokemon) => pokemon.name}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search a pokemon"
              variant="outlined"
            />
          )}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={() => {}}>
          Save pokemon
        </Button>
      </Grid>
    </Grid>
  );
}
