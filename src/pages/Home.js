import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Countries from "../Components/Countries";
import Favourites from "../Components/Favourites";
import Header from "../Components/Header";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [favourites, setFavourite] = useState([]);
  const [search,setSearch]=useState("")

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();

      setCountries(data);
    };
    fetchData();
  }, []);

  const addToFav = (country) => {
    const existing = favourites.find((el) => el.name === country.name);
    if (!existing) {
      setFavourite([...favourites, country]);
    }
  };

  const removeFromFav = (country) => {
    const deleteCountry = favourites.filter((ind) => {
      return ind.name !== country.name;
    });
    setFavourite(deleteCountry);
  };

  const getData=(n)=>{
    setSearch(n)
  }

 
  return (
    <div>
      <Header getData={getData}/>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item md={6} xs={12}>
          <Countries countrylist={countries} addToFav={addToFav} search={search} />
        </Grid>
        <Grid item md={6} xs={12}>
          <Favourites favourites={favourites} removeFromFav={removeFromFav} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
