import { useGetPokemonDetailQuery } from "@/state/query/services/apiSlice";
import { useParams } from "react-router";

const QueryDetail = () => {
  const params = useParams();
  const pokemonName = params.pokemonName
  console.log("pokemonName", params);
  const { data, error, isLoading } = useGetPokemonDetailQuery(
    pokemonName ? pokemonName : ""
  );
  

  return (
    <div>
      {/* <Typography>{pokemonName}</Typography> */}
      {error ? (
        <p>Failed to retrieve information.</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : data ? (
        <p>{JSON.stringify(data)}</p>
      ) : null}
    </div>
  );
};

export default QueryDetail;
