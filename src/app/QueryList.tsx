import React from "react";
import { Button } from "@/components/button/Button";
import { useGetPokemonListQuery } from "@/state/query/services/apiSlice";
import { useNavigate } from "react-router";

const Query: React.FC = () => {
  const { data, error, isLoading } = useGetPokemonListQuery();
  const navigate = useNavigate();
  const handleClick = (pokemonName: string) => {
    navigate("/query/" + pokemonName);
  };

  return (
    <div>
      {error ? (
        <p>Failed to retrieve information.</p>
      ) : isLoading ? (
        // <ActivityIndicator animating={true} style={{ marginTop: 20 }} />
        <div>loading</div>
      ) : data ? (
        Object.entries(data.results).map(([key, value]) => (
          <Button key={key} onClick={() => handleClick(value.name)}>
            {JSON.stringify(value)}
          </Button>
        ))
      ) : null}
    </div>
  );
};

export default Query;
