const url = "https://pokeapi.co/api/v2/type/";
const individualCallURL = "https://pokeapi.co/api/v2/pokemon/";
const types = [10, 11, 12];

async function getData() {
  try {
    const fetchData = await Promise.all(
      types.map(async (id) => {
        const res = await fetch(`${url}${id}/`);
        const data = await res.json();
        const randomNumber = Math.floor(Math.random() * data.pokemon.length);
        return data.pokemon[randomNumber].pokemon.name;
      }),
    );

    const individualData = await Promise.all(
      fetchData.map(async (pokemon) => {
        const res = await fetch(`${individualCallURL}${pokemon}/`);
        const data = await res.json();
        return data;
      }),
    );

    const [fireData, waterData, grassData] = await Promise.all(individualData);

    return { fireData, waterData, grassData };
  } catch (err) {
    console.log(err);
  }
}

export { getData };
