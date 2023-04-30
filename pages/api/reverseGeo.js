const url = (lng, lat) => {
  return `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=pk.eyJ1IjoiYmhhdnlhZ3VwdGExMjciLCJhIjoiY2xncGY3Mml3MHJ5MzNkcDkya2JoZWxxaCJ9.8UoSDJE-QV7fWvj3pMcwcw`;
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const [lng, lat] = req.body.points;

    const data = await fetch(url(lng, lat))
      .then((res) => res.json())
      .catch((er) => {
        console.log(er);
        res.status(404).json({ message: "Something went wrong", error: er });
      });

    res.json({ data: data.features[0].place_name });
  }
}
